import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/Section';
import { LanternRule } from '@/components/LanternRule';
import { CTAButton } from '@/components/CTAButton';
import { GAMES } from '@/lib/games';

// Every game in the roster gets a statically generated home page.
export function generateStaticParams() {
  return Object.keys(GAMES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = GAMES[params.slug];
  if (!game) return {};
  return {
    title: `${game.name} — ${game.tagline}`,
    description: game.hook,
  };
}

export default function GameHomePage({ params }: { params: { slug: string } }) {
  const game = GAMES[params.slug];
  if (!game) notFound();

  return (
    <>
      {/* Cinematic banner — the game's face. */}
      <section className="relative isolate flex min-h-[52vh] items-end overflow-hidden border-b border-stone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.image}
          alt={`${game.name} — ${game.tagline}`}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(to top, #0a0806 6%, rgba(10,8,6,0.65) 45%, rgba(10,8,6,0.35) 100%)',
          }}
        />
        <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
          <Link
            href="/play"
            className="font-display text-[0.72rem] uppercase tracking-[0.2em] text-parchment/70 transition-colors hover:text-ember"
          >
            ← All games
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="font-display text-xs uppercase tracking-[0.32em] text-amber">
              {game.tagline}
            </p>
            <span className="rounded-sm border border-parchment/40 bg-amber/5 px-3 py-1 font-display text-[0.62rem] uppercase tracking-[0.16em] text-parchment">
              {game.status}
            </span>
          </div>
          <h1 className="mt-2 font-display text-5xl font-semibold tracking-wide text-ember sm:text-6xl">
            {game.name}
          </h1>
        </div>
      </section>

      {/* The reading, then the threshold. */}
      <Section className="max-w-3xl text-center">
        <LanternRule short className="mx-auto" />
        <p className="mt-8 font-body text-xl leading-relaxed text-parchment/90 sm:text-2xl">
          {game.description}
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton
            href={game.playHref}
            variant="primary"
            external
            className="px-10 py-4 text-base"
          >
            Play {game.name}
          </CTAButton>
          {game.rulesHref && (
            <CTAButton href={game.rulesHref} variant="secondary" external className="px-8">
              Read the Rules
            </CTAButton>
          )}
        </div>
      </Section>
    </>
  );
}
