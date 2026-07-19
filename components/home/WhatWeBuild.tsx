import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { HOME } from '@/lib/copy';

export function WhatWeBuild() {
  const { eyebrow, title, items } = HOME.whatWeBuild;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} align="center" />
      <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-sm border border-stone bg-shadow/60 px-5 py-3 font-display text-[0.72rem] uppercase tracking-[0.18em] text-parchment/90 transition-colors hover:border-amber/50 hover:text-ember sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
