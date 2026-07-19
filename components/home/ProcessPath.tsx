import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { ProcessStep } from '@/components/ProcessStep';
import { HOME } from '@/lib/copy';

export function ProcessPath() {
  const { eyebrow, title, steps } = HOME.process;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} align="center" />

      {/* The illuminated path. Scrolls horizontally on small screens so the
          left-to-right journey stays intact. */}
      <div className="mt-16 overflow-x-auto pb-2">
        <div className="relative mx-auto min-w-[640px] max-w-5xl px-4">
          {/* The lit wire the lanterns hang from — runs through the bulb centers. */}
          <div
            aria-hidden="true"
            className="lantern-rule absolute left-4 right-4 top-[6px]"
          />
          <ol className="relative flex items-start justify-between gap-2">
            {steps.map((label) => (
              <ProcessStep key={label} label={label} />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
