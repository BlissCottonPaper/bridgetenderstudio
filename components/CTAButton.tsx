import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const VARIANTS: Record<Variant, string> = {
  // Warm lantern glow — the safe light against the void.
  primary:
    'bg-amber/90 text-void hover:bg-ember hover:shadow-lantern-strong border border-amber/60',
  // Quiet doorway — an outline that warms on hover.
  secondary:
    'bg-transparent text-ember border border-stone hover:border-amber/60 hover:text-ember hover:shadow-lantern',
  // Barely-there text link with an underline flourish.
  ghost:
    'bg-transparent text-amber border border-transparent hover:text-ember px-0',
};

/**
 * The single call-to-action element across the site. Renders a Next Link so
 * internal routes are prefetched; pass an external href and it still works.
 */
export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-display text-sm uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-2 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
