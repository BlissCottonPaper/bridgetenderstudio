import { CTAButton } from './CTAButton';
import { LanternRule } from './LanternRule';
import { HOME } from '@/lib/copy';

/**
 * The homepage hero — cinematic bridge/lantern artwork behind the studio's
 * opening statement. Warm, mysterious, handcrafted, inviting.
 */
export function Hero() {
  const { eyebrow, cta } = HOME.hero;

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
      {/* Cinematic artwork */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.png"
        alt="A lantern-lit bridge crossing into the mist"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      {/* Legibility + mood: sink the edges into the void, keep a warm center glow. */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 45%, rgba(10,8,6,0.35), rgba(10,8,6,0.86) 78%, #0a0806 100%), linear-gradient(to bottom, rgba(10,8,6,0.55), transparent 30%, rgba(10,8,6,0.7))',
        }}
      />
      {/* A lantern glow that breathes just above the fold. */}
      <div
        className="absolute left-1/2 top-[18%] -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-amber/10 blur-3xl animate-lantern-flicker"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8">
        <p className="animate-fade-up font-display text-[0.7rem] uppercase tracking-[0.4em] text-amber sm:text-xs">
          {eyebrow}
        </p>

        <LanternRule short className="mx-auto mt-5" />

        <h1 className="mt-6 animate-fade-up font-body text-3xl font-medium leading-[1.2] tracking-wide text-parchment sm:text-4xl md:text-5xl">
          BridgeTender Studio helps ideas <span className="text-ember">find form.</span>
        </h1>

        <div className="mt-11 flex animate-fade-up items-center justify-center">
          <CTAButton href={cta.href} variant="primary" className="px-8 py-3.5 text-[0.95rem]">
            {cta.label}
          </CTAButton>
        </div>
      </div>

      {/* Quiet scroll cue */}
      <div
        className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 text-parchment/45"
        aria-hidden="true"
      >
        <span className="font-display text-[0.62rem] uppercase tracking-[0.35em]">Enter</span>
      </div>
    </section>
  );
}
