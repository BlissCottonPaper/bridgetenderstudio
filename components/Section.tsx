import type { ReactNode } from 'react';

/** Consistent section rhythm and max width across the site. */
export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}
