import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { CTAButton } from '@/components/CTAButton';
import { HOME } from '@/lib/copy';
import { PROJECTS, FEATURED_SLUGS } from '@/lib/projects';

export function FeaturedProjects() {
  return (
    <Section id="featured-projects">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow={HOME.featured.eyebrow} title={HOME.featured.title} />
        <CTAButton href={HOME.featured.cta.href} variant="ghost" className="self-start sm:self-auto">
          {HOME.featured.cta.label} →
        </CTAButton>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FEATURED_SLUGS.map((slug) => (
          <ProjectCard key={slug} project={PROJECTS[slug]} />
        ))}
      </div>
    </Section>
  );
}
