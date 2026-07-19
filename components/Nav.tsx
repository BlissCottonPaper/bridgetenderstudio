'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS, NAV_CTAS, PLATFORM_NAME, STUDIO_NAME, ROUTES } from '@/lib/constants';
import { CTAButton } from './CTAButton';

function LanternGlyph({ className = '' }: { className?: string }) {
  // A small lantern mark. Decorative — labels carry the meaning for assistive tech.
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path d="M9 3h6M12 3v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="7.5" y="5.5" width="9" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 19h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="11.5" r="2.6" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  if (href === ROUTES.home) return pathname === '/';
  return pathname.startsWith(href.split('#')[0]);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone/70 bg-void/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        {/* Wordmark */}
        <Link
          href={ROUTES.home}
          className="group flex items-center gap-2.5 font-display text-ember"
          aria-label={`${STUDIO_NAME} — home`}
        >
          <LanternGlyph className="h-6 w-6 text-amber transition-colors group-hover:text-ember" />
          <span className="text-base font-semibold tracking-[0.14em] sm:text-lg">
            BridgeTender
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative font-display text-[0.82rem] uppercase tracking-[0.16em] transition-colors ${
                    active ? 'text-ember' : 'text-parchment/80 hover:text-ember'
                  }`}
                >
                  {item.beta ? (
                    <span className="inline-flex items-center gap-1.5">
                      {PLATFORM_NAME}
                      <span className="rounded-sm border border-amber/50 px-1.5 py-0.5 text-[0.55rem] tracking-[0.2em] text-amber">
                        BETA
                      </span>
                    </span>
                  ) : (
                    item.label
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={NAV_CTAS.signIn.href}
            className="font-display text-[0.82rem] uppercase tracking-[0.16em] text-parchment/85 transition-colors hover:text-ember"
          >
            {NAV_CTAS.signIn.label}
          </Link>
          <CTAButton href={NAV_CTAS.getStarted.href} variant="primary" className="px-5 py-2.5">
            {NAV_CTAS.getStarted.label}
          </CTAButton>
        </div>

        {/* Mobile menu control */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex items-center gap-2 rounded-sm border border-stone px-3 py-2 text-amber transition-colors hover:border-amber/60 lg:hidden"
        >
          <LanternGlyph className="h-5 w-5" />
          <span className="font-display text-[0.7rem] uppercase tracking-[0.2em]">
            {open ? 'Close' : 'Menu'}
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-stone/70 bg-void/95 px-5 pb-8 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="border-b border-stone/50">
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between py-4 font-display text-sm uppercase tracking-[0.16em] ${
                    active ? 'text-ember' : 'text-parchment/85'
                  }`}
                >
                  {item.beta ? `${PLATFORM_NAME} (Beta)` : item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex flex-col gap-3">
          <CTAButton href={NAV_CTAS.getStarted.href} variant="primary">
            {NAV_CTAS.getStarted.label}
          </CTAButton>
          <CTAButton href={NAV_CTAS.signIn.href} variant="secondary">
            {NAV_CTAS.signIn.label}
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
