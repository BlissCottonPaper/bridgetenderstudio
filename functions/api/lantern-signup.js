// ============================================================
// /functions/api/lantern-signup.js
// ============================================================
// Cloudflare Pages Function backing the Lantern beta signup form.
// Runs alongside the static export at POST /api/lantern-signup.
//
// Storage: D1 (binding `DB`). A UNIQUE(email) constraint makes duplicate
// handling atomic and race-free — INSERT OR IGNORE, then read meta.changes:
//   changes === 1 -> newly added        ({ ok: true })
//   changes === 0 -> already on the list ({ duplicate: true })  <- warm, not an error
// The table is created by an explicit migration (see /migrations), NOT at
// request time.
//
// Environment (set per-environment in the Cloudflare Pages dashboard):
//   SITE_ENV                    'production' | 'preview'   (drives fail-closed + strict checks)
//   TURNSTILE_SECRET_KEY        Turnstile secret (real in prod, test key in preview)
//   TURNSTILE_EXPECTED_HOSTNAME e.g. 'bridgetenderstudio.com' (enforced when set)
//   DB                          D1 binding (separate database per environment)
//
// Bot protection: Cloudflare Turnstile with a named action.
//   - Production FAILS CLOSED: if TURNSTILE_SECRET_KEY is missing we reject with
//     503 and log — signups are never accepted unprotected in production.
//   - When a secret is present the token is verified, and in production we also
//     require the expected `action` and (when configured) the expected hostname.
//   - Local dev with no secret skips verification so the flow stays testable.
//
// A hidden honeypot field (`website`) catches naive bots: if filled we return a
// friendly success without storing anything.
// ============================================================

const TURNSTILE_ACTION = 'lantern_beta_signup';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function verifyTurnstile(secret, token, ip) {
  try {
    const form = new FormData();
    form.append('secret', secret);
    form.append('response', token || '');
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    });
    return await res.json(); // { success, action, hostname, 'error-codes', ... }
  } catch {
    return { success: false, 'error-codes': ['fetch_failed'] };
  }
}

export async function onRequestPost({ request, env }) {
  try {
    const isProd = env.SITE_ENV === 'production';

    // --- Fail closed: production must never accept signups unprotected. ---
    if (isProd && !env.TURNSTILE_SECRET_KEY) {
      console.error('lantern-signup: TURNSTILE_SECRET_KEY is not configured in production');
      return json({ error: 'service_unavailable' }, 503);
    }
    if (isProd && !env.DB) {
      console.error('lantern-signup: D1 binding DB is not configured in production');
      return json({ error: 'service_unavailable' }, 503);
    }

    const body = await request.json().catch(() => ({}));
    // Normalize before anything else: trim + lowercase so the UNIQUE constraint dedupes reliably.
    const email = String(body.email || '').trim().toLowerCase();
    const name = String(body.name || '').trim().slice(0, 120);
    const honeypot = String(body.website || '');
    const token = String(body.token || '');

    // Honeypot filled -> almost certainly a bot. Pretend success, store nothing.
    if (honeypot) return json({ ok: true });

    if (!EMAIL_RE.test(email) || email.length > 254) {
      return json({ error: 'invalid_email' }, 400);
    }

    // --- Bot protection (enforced whenever a secret is configured). ---
    if (env.TURNSTILE_SECRET_KEY) {
      const ip = request.headers.get('CF-Connecting-IP') || '';
      const v = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip);
      if (!v.success) return json({ error: 'failed_challenge' }, 400);

      // In production, validate more than `success`: the action must be ours,
      // and the hostname must match when an expected hostname is configured.
      if (isProd) {
        if (v.action !== TURNSTILE_ACTION) return json({ error: 'failed_challenge' }, 400);
        const expected = env.TURNSTILE_EXPECTED_HOSTNAME;
        if (expected && v.hostname && v.hostname !== expected) {
          return json({ error: 'failed_challenge' }, 400);
        }
      }
    }

    if (!env.DB) {
      // Non-production without a DB bound: clear error rather than a silent drop.
      return json({ error: 'storage_unconfigured' }, 500);
    }

    // Table is provisioned by migration — do not create it here.
    const result = await env.DB.prepare(
      'INSERT OR IGNORE INTO lantern_signups (email, name, created_at) VALUES (?, ?, ?)'
    )
      .bind(email, name || null, Math.floor(Date.now() / 1000))
      .run();

    const added = result?.meta?.changes === 1;
    // Warm duplicate: already on the list is a welcome, not a failure.
    return json(added ? { ok: true } : { duplicate: true });
  } catch (err) {
    console.error('lantern-signup: unexpected error', err && err.message);
    return json({ error: 'server_error' }, 500);
  }
}
