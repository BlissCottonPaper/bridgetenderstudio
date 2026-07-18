/**
 * Editable page copy. Marc iterates here — keep prose out of components.
 * Written for creators age 13+, plain enough for a thoughtful twelve-year-old.
 */
import { PLATFORM_NAME, ROUTES } from './constants';

export const HOME = {
  hero: {
    eyebrow: 'Independent Creative Workshop',
    // Locked. No qualifiers that filter which ideas belong — every idea is welcome.
    statement: 'BridgeTender Studio helps ideas find their way into the world.',
    // The ember-lit phrase within the statement (kept in sync with `statement`).
    emphasis: 'find their way into the world.',
    cta: { label: 'Explore Our Work', href: ROUTES.ourWork },
  },

  featured: {
    eyebrow: 'Our Work',
    title: "What we've built",
    cta: { label: 'See all our work', href: ROUTES.ourWork },
  },

  // Featured Platform. Lantern is a digital makerspace (not "workshop" — the
  // eyebrow owns that word). Never games-only: games are the first pathway.
  lantern: {
    eyebrow: 'Featured Platform',
    name: PLATFORM_NAME,
    subtitle: 'A digital makerspace for playable ideas.',
    body: 'Describe what you want to make in plain language, and begin prototyping it right away. No code, no setup — Lantern helps light the way, beginning with tabletop games and growing from there.',
    cta: { label: `Step into ${PLATFORM_NAME}`, href: ROUTES.lantern },
  },

  whatWeBuild: {
    eyebrow: 'What We Build',
    title: 'Many kinds of playable ideas',
    items: [
      'Tabletop games',
      'Educational games',
      'Reflective experiences',
      'Browser games',
      'Creator tools',
    ],
  },

  process: {
    eyebrow: 'The Path',
    title: 'From spark to something you can share',
    steps: ['Imagine', 'Shape', 'Prototype', 'Play', 'Refine', 'Publish'],
  },

  closing: {
    title: 'Every idea deserves a way across.',
    ctas: [
      { label: 'Explore Projects', href: ROUTES.ourWork, variant: 'primary' as const },
      { label: `Join the ${PLATFORM_NAME} Beta`, href: ROUTES.getStarted, variant: 'secondary' as const },
      { label: 'Work With BridgeTender', href: ROUTES.workWithUs, variant: 'ghost' as const },
    ],
  },
};
