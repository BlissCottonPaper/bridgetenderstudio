import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS, OUR_WORK_SLUGS } from '@/lib/projects';
import { OUR_WORK } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Games, instruments, and handmade things from BridgeTender Studio — Harmony, Wyldroot, The Art of Soulcraft, and Bliss Cotton Paper.',
};

export default function OurWorkPage() {
  return (
    <Section className="pt-14 sm:pt-16">
      <SectionHeading eyebrow={OUR_WORK.eyebrow} title={OUR_WORK.title} as="h1" />
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-parchment/80">
        {OUR_WORK.intro}
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {OUR_WORK_SLUGS.map((slug) => (
          <ProjectCard key={slug} project={PROJECTS[slug]} />
        ))}
      </div>
    </Section>
  );
}
