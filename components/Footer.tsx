import Link from 'next/link';
import { NAV_ITEMS, CONTACT_EMAIL, STUDIO_NAME } from '@/lib/constants';
import { LanternRule } from './LanternRule';

/**
 * Public-site footer. Carries the maker's mark — scoped to public pages only
 * (never rendered on utility/auth screens).
 */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-stone/60 bg-shadow/40">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <LanternRule className="mb-10" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg tracking-[0.14em] text-ember">BridgeTender</p>
            <p className="mt-3 font-myth text-[1.05rem] italic leading-relaxed text-parchment/75">
              Tending the crossing between an idea and the world beyond.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-[0.8rem] uppercase tracking-[0.16em] text-parchment/70 transition-colors hover:text-ember"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-lg text-parchment/85 transition-colors hover:text-ember"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-stone/40 pt-6 text-parchment/55">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {STUDIO_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
