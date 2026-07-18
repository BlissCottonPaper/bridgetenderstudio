import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { PLAY } from '@/lib/copy';
import { GAMES, FEATURED_GAME, UPCOMING_GAMES } from '@/lib/games';

export const metadata: Metadata = {
  title: 'Play',
  description:
    'Step into the games from BridgeTender Studio, beginning with Harmony — a meditative game of balance, nature, seasons, and change.',
};

export default function PlayPage() {
  const game = GAMES[FEATURED_GAME];

  return (
    <Section className="pt-14 sm:pt-16">
      <SectionHeading eyebrow={PLAY.eyebrow} title={PLAY.title} as="h1" />
      <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-parchment/80">
        {PLAY.intro}
      </p>

      {/* Featured game — a doorway to its home page, not straight into play. */}
      <p className="mt-14 font-display text-xs uppercase tracking-[0.3em] text-amber">
        {PLAY.featuredLabel}
      </p>
      <Link
        href={`/play/${game.slug}`}
        className="group mt-5 grid overflow-hidden rounded-md border border-stone bg-shadow transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-lantern md:grid-cols-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.image}
          alt={`${game.name} — ${game.tagline}`}
          className="h-64 w-full border-b border-stone object-cover md:h-full md:border-b-0 md:border-r"
        />
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <p className="font-display text-[0.7rem] uppercase tracking-[0.3em] text-amber">
            {game.tagline}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-wide text-ember sm:text-4xl">
            {game.name}
          </h2>
          <p className="mt-4 font-body text-lg leading-relaxed text-parchment/85">
            {game.hook}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 font-display text-[0.75rem] uppercase tracking-[0.2em] text-amber transition-colors group-hover:text-ember">
            Enter {game.name} →
          </span>
        </div>
      </Link>

      {/* Placeholder slots — future demonstration games. */}
      <p className="mt-16 font-display text-xs uppercase tracking-[0.3em] text-amber">
        {PLAY.upcomingLabel}
      </p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {UPCOMING_GAMES.map((g) => (
          <div
            key={g.name}
            className="flex min-h-[9rem] flex-col items-center justify-center rounded-md border border-dashed border-stone/80 bg-shadow/30 p-8 text-center"
          >
            <span
              aria-hidden="true"
              className="mb-3 h-2.5 w-2.5 rounded-full bg-amber/40 shadow-lantern"
            />
            <p className="font-display text-lg tracking-wide text-parchment/70">{g.name}</p>
            <p className="mt-1 font-myth text-base italic text-parchment/45">{g.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
