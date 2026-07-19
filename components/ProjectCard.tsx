import Link from 'next/link';
import type { Project } from '@/lib/projects';

/**
 * A single project doorway — image, tag, name, one-paragraph blurb, status badge,
 * and a call-through. The whole card is the link. Reused on the homepage and
 * /our-work; projects are added in lib/projects.ts, never here.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { name, tag, blurb, image, imageFit = 'cover', href, external, status, cta } = project;

  const arrow = external ? '↗' : '→';
  const linkProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
  const CardTag = external ? 'a' : Link;

  return (
    <CardTag
      {...(linkProps as any)}
      className="group flex flex-col overflow-hidden rounded-sm border border-stone bg-shadow transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-lantern focus-visible:border-amber/60"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`${name} — ${tag}`}
        loading="lazy"
        className={`aspect-video w-full border-b border-stone bg-[#0c110d] ${
          imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'
        }`}
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-display text-[0.7rem] uppercase tracking-[0.3em] text-amber">
          {tag}
        </p>
        <h3 className="mb-3 font-display text-xl font-semibold tracking-wide text-ember">
          {name}
        </h3>
        <p className="mb-6 font-body text-[1.05rem] leading-relaxed text-parchment/85">
          {blurb}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
          <span className="font-display text-[0.7rem] uppercase tracking-[0.18em] text-amber transition-colors group-hover:text-ember">
            {cta} {arrow}
          </span>
          <span className="whitespace-nowrap rounded-sm border border-parchment/40 bg-amber/5 px-3 py-1 font-display text-[0.62rem] uppercase tracking-[0.16em] text-parchment">
            {status}
          </span>
        </div>
      </div>
    </CardTag>
  );
}
