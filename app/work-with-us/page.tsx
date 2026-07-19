import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { CTAButton } from '@/components/CTAButton';
import { LanternRule } from '@/components/LanternRule';
import { WORK_WITH_US } from '@/lib/copy';
import { CONTACT_EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    'Collaborate with BridgeTender Studio — game design, educational systems, AI-assisted prototyping, and creative partnerships.',
};

export default function WorkWithUsPage() {
  const { eyebrow, title, intro, services, contact } = WORK_WITH_US;

  return (
    <Section className="pt-14 sm:pt-16">
      <SectionHeading eyebrow={eyebrow} title={title} as="h1" />
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-parchment/80">{intro}</p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.name}
            className="rounded-md border border-stone bg-shadow/50 p-7 transition-colors hover:border-amber/40"
          >
            <span
              aria-hidden="true"
              className="mb-4 block h-2.5 w-2.5 rounded-full bg-amber shadow-lantern"
            />
            <h2 className="font-display text-xl font-semibold tracking-wide text-ember">{s.name}</h2>
            <p className="mt-3 font-body text-lg leading-relaxed text-parchment/85">{s.body}</p>
          </div>
        ))}
      </div>

      {/* Simple contact path — no backend, straight to the studio inbox. */}
      <div className="mt-16 rounded-md border border-amber/25 bg-gradient-to-b from-shadow to-void px-6 py-14 text-center shadow-lantern sm:px-12">
        <LanternRule short className="mx-auto" />
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-wide text-ember sm:text-4xl">
          {contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-parchment/85">
          {contact.body}
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href={`mailto:${CONTACT_EMAIL}`} variant="primary" external className="px-8">
            {contact.cta}
          </CTAButton>
        </div>
        <p className="mt-5 font-body text-base text-parchment/60">
          or write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber underline-offset-2 hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </Section>
  );
}
