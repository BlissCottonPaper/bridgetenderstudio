import { Section } from '@/components/Section';
import { CTAButton } from '@/components/CTAButton';
import { LanternRule } from '@/components/LanternRule';
import { HOME } from '@/lib/copy';

export function ClosingCTA() {
  const { title, ctas } = HOME.closing;

  return (
    <Section className="text-center">
      <LanternRule short className="mx-auto" />
      <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-wide text-ember sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
        {ctas.map((c) => (
          <CTAButton key={c.href} href={c.href} variant={c.variant}>
            {c.label}
          </CTAButton>
        ))}
      </div>
    </Section>
  );
}
