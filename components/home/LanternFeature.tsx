import { Section } from '@/components/Section';
import { CTAButton } from '@/components/CTAButton';
import { LanternRule } from '@/components/LanternRule';
import { HOME } from '@/lib/copy';

export function LanternFeature() {
  const { eyebrow, name, subtitle, body, cta } = HOME.lantern;

  return (
    <Section>
      <div className="relative overflow-hidden rounded-md border border-amber/25 bg-gradient-to-b from-shadow to-void px-6 py-16 shadow-lantern sm:px-14 sm:py-20">
        {/* Lantern glow rising from below. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/10 blur-3xl animate-lantern-flicker"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-amber">
              {eyebrow}
            </p>
            <span className="rounded-sm border border-amber/50 px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-[0.2em] text-amber">
              Beta
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-wide text-ember sm:text-5xl">
            {name}
          </h2>

          <LanternRule short className="mx-auto my-6" />

          <p className="font-myth text-xl italic text-parchment/90 sm:text-2xl">{subtitle}</p>

          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-parchment/80">
            {body}
          </p>

          <div className="mt-9 flex justify-center">
            <CTAButton href={cta.href} variant="primary" className="px-8">
              {cta.label}
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
