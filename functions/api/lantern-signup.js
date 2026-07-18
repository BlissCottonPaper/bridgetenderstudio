// ============================================================
// /functions/api/lantern-signup.js
// ============================================================
// Cloudflare Pages Function backing the Lantern beta signup form.
// Runs alongside the static export at POST /api/lantern-signup.
//
// Storage: D1 (binding `DB`). A UNIQUE(email) constraint makes duplicate
// handling atomic and race-free — INSERT OR IGNORE, then read meta.changes:
//   changes === 1 -> newly added   ({ ok: true })
//   changes === 0 -> already on the list ({ duplicate: true })  <- warm, not an error
//
// Bot protection: Cloudflare Turnstile. If TURNSTILE_SECRET_KEY is set, the
// token is verified server-side and a failed challenge is rejected. If it is
// not set (local/preview before provisioning), verification is skipped so the
// flow stays testable — set the secret in production to enforce it.
//
// A hidden honeypot field (`website`) catches naive bots: if it is filled we
// return a friendly success without storing anything.
// ============================================================

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

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
    const data = await res.json();
    return !!data.success;
  } catch {
    return false;
  }
}

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = String(body.email || '').trim().toLowerCase();
    const name = String(body.name || '').trim().slice(0, 120);
    const honeypot = String(body.website || '');
    const token = String(body.token || '');

    // Honeypot filled -> almost certainly a bot. Pretend success, store nothing.
    if (honeypot) return json({ ok: true });

    if (!EMAIL_RE.test(email) || email.length > 254) {
      return json({ error: 'invalid_email' }, 400);
    }

    // Bot protection (enforced when the secret is configured).
    if (env.TURNSTILE_SECRET_KEY) {
      const ip = request.headers.get('CF-Connecting-IP') || '';
      const ok = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip);
      if (!ok) return json({ error: 'failed_challenge' }, 400);
    }

    if (!env.DB) {
      // No database bound yet — surface a clear server error rather than silently dropping.
      return json({ error: 'storage_unconfigured' }, 500);
    }

    // Self-healing schema: safe to run on every request.
    await env.DB.prepare(
      `CREATE TABLE IF NOT EXISTS lantern_signups (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         email TEXT NOT NULL UNIQUE,
         name TEXT,
         created_at INTEGER NOT NULL
       )`
    ).run();

    const result = await env.DB.prepare(
      'INSERT OR IGNORE INTO lantern_signups (email, name, created_at) VALUES (?, ?, ?)'
    )
      .bind(email, name || null, Math.floor(Date.now() / 1000))
      .run();

    const added = result?.meta?.changes === 1;
    // Warm duplicate: already on the list is a welcome, not a failure.
    return json(added ? { ok: true } : { duplicate: true });
  } catch (err) {
    return json({ error: 'server_error' }, 500);
  }
}
