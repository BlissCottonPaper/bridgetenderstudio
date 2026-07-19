import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { LanternRule } from '@/components/LanternRule';
import { CTAButton } from '@/components/CTAButton';
import { STUDIO } from '@/lib/copy';
import { ROUTES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Studio',
  description:
    'BridgeTender Studio tends the crossing where ideas find their way into the world — the mission, philosophy, approach, and future of BridgeTender Studio.',
};

export default function TheStudioPage() {
  const { eyebrow, identity, mission, philosophy, approach, process, future, close } = STUDIO;

  return (
    <>
      {/* Mythic opening — the myth voice, front and center. */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/10 blur-3xl animate-lantern-flicker"
        />
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-amber">{eyebrow}</p>
          <LanternRule short className="mx-auto my-8" />
          <p className="font-myth text-3xl italic leading-[1.28] text-parchment sm:text-4xl md:text-[2.75rem]">
            {identity}
          </p>
        </div>
      </section>

      {/* Mission — the line that lands with weight. */}
      <Section className="max-w-4xl pt-0 text-center">
        <p className="font-display text-xs uppercase tracking-[0.35em] text-amber">
          {mission.heading}
        </p>
        <LanternRule className="mx-auto mt-8 max-w-md" />
        <p className="mx-auto mt-10 max-w-3xl font-display text-3xl font-semibold leading-[1.24] tracking-wide text-ember sm:text-4xl md:text-5xl">
          BridgeTender Studio helps ideas <span className="text-parchment">find their way</span>{' '}
          into the world.
        </p>
        <LanternRule className="mx-auto mt-10 max-w-md" />
        <p className="mx-auto mt-10 max-w-2xl font-body text-lg leading-relaxed text-parchment/80">
          {mission.body}
        </p>
      </Section>

      {/* Philosophy */}
      <Section className="max-w-3xl pt-0">
        <SectionHeading eyebrow="Philosophy" title={philosophy.heading} />
        <div className="mt-8 space-y-6">
          {philosophy.body.map((p, i) => (
            <p
              key={p}
              className={
                i === philosophy.body.length - 1
                  ? 'font-myth text-2xl italic leading-relaxed text-parchment/90'
                  : 'font-body text-lg leading-relaxed text-parchment/85'
              }
            >
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section className="max-w-3xl pt-0">
        <SectionHeading eyebrow="Approach" title={approach.heading} />
        <div className="mt-8 space-y-6">
          {approach.body.map((p) => (
            <p key={p} className="font-body text-lg leading-relaxed text-parchment/85">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* Creative process */}
      <Section className="max-w-3xl pt-0">
        <SectionHeading eyebrow="Creative Process" title={process.heading} />
        <p className="mt-8 font-body text-lg leading-relaxed text-parchment/85">{process.body}</p>
      </Section>

      {/* Future vision */}
      <Section className="max-w-3xl pt-0">
        <SectionHeading eyebrow="Future Vision" title={future.heading} />
        <p className="mt-8 font-body text-lg leading-relaxed text-parchment/85">{future.body}</p>
        <div className="mt-8">
          <CTAButton href={future.cta.href} variant="secondary">
            {future.cta.label} →
          </CTAButton>
        </div>
      </Section>

      {/* Close */}
      <Section className="max-w-3xl text-center">
        <LanternRule short className="mx-auto" />
        <p className="mx-auto mt-8 max-w-2xl font-myth text-2xl italic leading-relaxed text-ember sm:text-3xl">
          {close}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={ROUTES.workWithUs} variant="primary">
            Work With BridgeTender
          </CTAButton>
          <CTAButton href={ROUTES.ourWork} variant="ghost">
            Explore Our Work →
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
