'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState, type FormEvent } from 'react';
import { LANTERN } from '@/lib/copy';
import { ROUTES, LANTERN_SIGNUP_ENDPOINT } from '@/lib/constants';

// Cloudflare Turnstile site key. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in the
// Cloudflare Pages build env for production. The fallback is Cloudflare's
// documented *test* key (always passes, renders a dummy widget) so the form is
// functional in dev and preview — it MUST be overridden in production.
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error';

const c = LANTERN.signup;

export function BetaSignup() {
  const [status, setStatus] = useState<Status>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    const name = String(data.get('name') || '').trim();
    // Honeypot — real people never fill this hidden field.
    const website = String(data.get('website') || '');
    // Turnstile injects this hidden input into the form once solved.
    const token = String(data.get('cf-turnstile-response') || '');

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setFieldError(c.invalidEmail);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(LANTERN_SIGNUP_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, website, token }),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok && body.duplicate) setStatus('duplicate');
      else if (res.ok && body.ok) setStatus('success');
      else if (res.status === 400 && body.error === 'invalid_email') {
        setStatus('idle');
        setFieldError(c.invalidEmail);
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  // Confirmation / already-on-list states replace the form.
  if (status === 'success' || status === 'duplicate') {
    const s = status === 'success' ? c.success : c.duplicate;
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-md border border-amber/40 bg-shadow/60 p-8 text-center shadow-lantern sm:p-10"
      >
        <div
          aria-hidden="true"
          className="mx-auto mb-5 h-3 w-3 animate-lantern-flicker rounded-full bg-ember shadow-lantern-strong"
        />
        <h3 className="font-display text-2xl font-semibold text-ember">{s.title}</h3>
        <p className="mx-auto mt-3 max-w-md font-body text-lg text-parchment/85">{s.body}</p>
      </div>
    );
  }

  return (
    <>
      {/* Loads the Turnstile widget from Cloudflare (renders in production). */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      <form
        onSubmit={onSubmit}
        noValidate
        className="rounded-md border border-stone bg-shadow/50 p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-display text-[0.72rem] uppercase tracking-[0.2em] text-parchment/80">
              {c.nameLabel}
            </span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={c.namePlaceholder}
              className="w-full rounded-sm border border-stone bg-void/70 px-4 py-3 font-body text-lg text-parchment placeholder:text-parchment/35 focus:border-amber/60 focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-display text-[0.72rem] uppercase tracking-[0.2em] text-parchment/80">
              {c.emailLabel}
            </span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder={c.emailPlaceholder}
              aria-invalid={fieldError ? true : undefined}
              aria-describedby={fieldError ? 'email-error' : undefined}
              className="w-full rounded-sm border border-stone bg-void/70 px-4 py-3 font-body text-lg text-parchment placeholder:text-parchment/35 focus:border-amber/60 focus:outline-none"
            />
          </label>
        </div>

        {/* Honeypot: hidden from people, tempting to bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            Leave this field empty
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {fieldError && (
          <p id="email-error" role="alert" className="mt-3 font-body text-base text-ember">
            {fieldError}
          </p>
        )}

        {/* Bot protection */}
        <div className="mt-6">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="dark" />
          <p className="mt-2 font-body text-sm text-parchment/45">Protected by Cloudflare Turnstile.</p>
        </div>

        <p className="mt-6 font-body text-base leading-relaxed text-parchment/70">{c.consent}</p>

        <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-amber/60 bg-amber/90 px-8 py-3.5 font-display text-sm uppercase tracking-[0.18em] text-void transition-all duration-300 hover:bg-ember hover:shadow-lantern-strong disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? c.submitting : c.submit}
          </button>
          <p className="font-body text-sm text-parchment/55">
            {c.privacyPrefix}{' '}
            <Link href={ROUTES.privacy} className="text-amber underline-offset-2 hover:underline">
              {c.privacyLinkText}
            </Link>
            .
          </p>
        </div>

        {status === 'error' && (
          <div role="alert" className="mt-6 rounded-sm border border-ember/40 bg-void/60 p-4">
            <p className="font-display text-base text-ember">{c.error.title}</p>
            <p className="mt-1 font-body text-base text-parchment/80">{c.error.body}</p>
          </div>
        )}
      </form>
    </>
  );
}
