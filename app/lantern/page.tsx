import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { LanternRule } from '@/components/LanternRule';
import { BetaSignup } from '@/components/BetaSignup';
import { LANTERN } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Lantern (Beta)',
  description:
    'Lantern is a digital makerspace for developing playable ideas. Describe what you want to make in plain language and watch it become playable — beginning with tabletop games.',
};

export default function LanternPage() {
  return (
    <>
      {/* Opening — the platform, marked Beta. */}
      <Section className="max-w-3xl pt-16 text-center sm:pt-20">
        <div className="mb-5 flex items-center justify-center gap-3">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-amber">
            {LANTERN.eyebrow}
          </p>
          <span className="rounded-sm border border-amber/50 px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-[0.2em] text-amber">
            Beta
          </span>
        </div>
        <h1 className="font-display text-5xl font-semibold tracking-wide text-ember sm:text-6xl">
          {LANTERN.name}
        </h1>
        <LanternRule short className="mx-auto my-7" />
        <p className="font-myth text-2xl italic text-parchment/90 sm:text-3xl">
          {LANTERN.subtitle}
        </p>

        <div className="mx-auto mt-10 max-w-2xl space-y-5">
          {LANTERN.vision.map((p) => (
            <p key={p} className="font-body text-lg leading-relaxed text-parchment/85">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* The companion + who it's for. */}
      <Section className="max-w-3xl pt-0 text-center">
        <div className="rounded-md border border-stone bg-shadow/40 px-6 py-10 sm:px-12">
          <p className="font-myth text-xl italic leading-relaxed text-parchment/90 sm:text-2xl">
            {LANTERN.companion}
          </p>
          <p className="mt-6 font-display text-[0.72rem] uppercase tracking-[0.24em] text-amber">
            {LANTERN.ageNote}
          </p>
        </div>
      </Section>

      {/* Beta signup — the doorway in. */}
      <Section id="beta" className="max-w-2xl scroll-mt-24 pt-0">
        <div className="text-center">
          <LanternRule short className="mx-auto" />
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-wide text-ember sm:text-4xl">
            {LANTERN.signup.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-parchment/80">
            {LANTERN.signup.blurb}
          </p>
        </div>
        <div className="mt-10">
          <BetaSignup />
        </div>
      </Section>
    </>
  );
}
