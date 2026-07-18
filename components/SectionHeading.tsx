import { LanternRule } from './LanternRule';

/**
 * A section heading carrying the lantern rule — a small caps eyebrow, the
 * illuminated divider, and the display title. Used to open every major section.
 */
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-display text-xs uppercase tracking-[0.35em] text-amber">
          {eyebrow}
        </p>
      )}
      <LanternRule short className={centered ? 'mx-auto' : ''} />
      <Tag className="mt-4 text-3xl font-semibold leading-tight tracking-wide sm:text-4xl">
        {title}
      </Tag>
    </div>
  );
}
