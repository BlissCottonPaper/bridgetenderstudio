'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState, type FormEvent } from 'react';
import { LANTERN } from '@/lib/copy';
import { ROUTES, LANTERN_SIGNUP_ENDPOINT } from '@/lib/constants';

// Named Turnstile action — verified server-side in production.
const TURNSTILE_ACTION = 'lantern_beta_signup';
// Cloudflare's documented always-pass TEST site key — dev/preview only.
const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA';

// Environment-aware widget config, resolved at build time.
//   NEXT_PUBLIC_SITE_ENV        'production' | 'preview' | (unset -> development)
//   NEXT_PUBLIC_TURNSTILE_SITE_KEY  the real site key (required in production)
const SITE_ENV = process.env.NEXT_PUBLIC_SITE_ENV || 'development';
const REAL_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
const IS_PROD = SITE_ENV === 'production';
// Production NEVER falls back to the test key; dev/preview may.
const SITE_KEY = IS_PROD ? REAL_SITE_KEY : REAL_SITE_KEY || TURNSTILE_TEST_SITE_KEY;
// Fail closed on the client: no real key in production -> no form.
const MISCONFIGURED = IS_PROD && !REAL_SITE_KEY;

type Status = 'idle' | 'submitting' | 'success' | 'duplicate' | 'error' | 'unavailable';

const c = LANTERN.signup;

function Panel({
  variant,
  title,
  body,
}: {
  variant: 'warm' | 'muted';
  title: string;
  body: string;
}) {
  const warm = variant === 'warm';
  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-md border p-8 text-center sm:p-10 ${
        warm ? 'border-amber/40 bg-shadow/60 shadow-lantern' : 'border-stone bg-shadow/40'
      }`}
    >
      <div
        aria-hidden="true"
        className={`mx-auto mb-5 h-3 w-3 rounded-full ${
          warm ? 'animate-lantern-flicker bg-ember shadow-lantern-strong' : 'bg-amber/40'
        }`}
      />
      <h3 className="font-display text-2xl font-semibold text-ember">{title}</h3>
      <p className="mx-auto mt-3 max-w-md font-body text-lg text-parchment/85">{body}</p>
    </div>
  );
}

export function BetaSignup() {
  const [status, setStatus] = useState<Status>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);

  // Fail-closed: production without a real site key shows a graceful notice, not a form.
  if (MISCONFIGURED) {
    return <Panel variant="muted" title={c.unavailable.title} body={c.unavailable.body} />;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    const name = String(data.get('name') || '').trim();
    const website = String(data.get('website') || ''); // honeypot
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
      const b = await res.json().catch(() => ({}));

      if (res.ok && b.duplicate) setStatus('duplicate');
      else if (res.ok && b.ok) setStatus('success');
      else if (res.status === 503) setStatus('unavailable');
      else if (res.status === 400 && b.error === 'invalid_email') {
        setStatus('idle');
        setFieldError(c.invalidEmail);
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') return <Panel variant="warm" title={c.success.title} body={c.success.body} />;
  if (status === 'duplicate') return <Panel variant="warm" title={c.duplicate.title} body={c.duplicate.body} />;
  if (status === 'unavailable') return <Panel variant="muted" title={c.unavailable.title} body={c.unavailable.body} />;

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

        {/* Bot protection — named action verified server-side. */}
        <div className="mt-6">
          <div
            className="cf-turnstile"
            data-sitekey={SITE_KEY}
            data-action={TURNSTILE_ACTION}
            data-theme="dark"
          />
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
