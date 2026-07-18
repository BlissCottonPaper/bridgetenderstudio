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

export const OUR_WORK = {
  eyebrow: 'Our Work',
  title: 'The worlds we tend',
  intro:
    'Games, instruments, and handmade things — each one an idea we helped carry across the bridge. More are always taking shape.',
};

export const PLAY = {
  eyebrow: 'Play',
  title: 'Cross into a game',
  intro:
    'Step into the worlds we have made playable. Each game has a home of its own — read a while, then cross the threshold into play.',
  featuredLabel: 'Featured Game',
  upcomingLabel: 'More at the workbench',
};

export const LANTERN = {
  eyebrow: 'The Platform',
  name: PLATFORM_NAME,
  subtitle: 'A digital makerspace for developing playable ideas.',
  vision: [
    'Sit down with an insightful collaborator. Describe what you want to make in plain language — and watch it become playable.',
    'No code, no deployment, no databases to wrangle. That machinery stays behind the curtain. Lantern begins with tabletop games, and grows from there.',
  ],
  companion:
    'A design companion stays with you the whole way — asking the right questions, and turning your answers into something you can hold and play.',
  ageNote: 'Lantern is made for creators 13 and older.',
  signup: {
    heading: 'Join the Beta',
    blurb:
      "Leave your email and we'll light the way in. We'll only write when there's something real to share.",
    nameLabel: 'What should we call you?',
    namePlaceholder: 'Your name or handle (optional)',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    consent:
      'By joining, you agree to receive occasional email about the Lantern beta. No spam, and you can leave the list anytime.',
    submit: 'Join the Beta',
    submitting: 'Lighting the way…',
    privacyPrefix: 'We keep your address private — see our',
    privacyLinkText: 'Privacy Policy',
    // Warm, welcoming states — a duplicate is not a failure.
    success: {
      title: "You're on the list.",
      body: "Watch your inbox — we'll send word when the next doors open.",
    },
    duplicate: {
      title: "You're already with us.",
      body: "This email is already on the list — no need to sign up twice. We'll be in touch.",
    },
    error: {
      title: 'Something went dim.',
      body: "We couldn't add you just now. Please try again in a moment.",
    },
    invalidEmail: 'That email address doesn’t look quite right.',
  },
};
