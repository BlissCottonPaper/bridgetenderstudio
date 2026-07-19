/**
 * Editable page copy. Marc iterates here — keep prose out of components.
 * Written for creators age 13+, plain enough for a thoughtful twelve-year-old.
 */
import { PLATFORM_NAME, ROUTES } from './constants';

export const HOME = {
  hero: {
    eyebrow: 'Independent Creative Workshop',
    // Plainspoken register (locked): the studio's practical function.
    // The mythic register lives on /the-studio and must not echo this.
    statement: 'BridgeTender Studio helps ideas find form.',
    // The ember-lit phrase within the statement (kept in sync with `statement`).
    emphasis: 'find form.',
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

export const WORK_WITH_US = {
  eyebrow: 'Work With Us',
  title: 'Build something with BridgeTender',
  intro:
    "We partner with people and teams to shape ideas into things worth playing, learning from, and keeping. Tell us what you're making — we'll help it find its way across.",
  services: [
    {
      name: 'Game Design',
      body: 'From first spark to playable rules — tabletop and digital games built to be felt, not just finished.',
    },
    {
      name: 'Educational Systems',
      body: 'Learning that plays. Experiences that teach by doing, designed for real understanding.',
    },
    {
      name: 'AI-Assisted Prototyping',
      body: 'Turn a described idea into a working prototype quickly — the machinery kept behind the curtain.',
    },
    {
      name: 'Creative Partnerships',
      body: 'Ongoing collaboration for studios, makers, and organizations with a world to build.',
    },
  ],
  contact: {
    title: 'Have something in mind?',
    body: 'Tell us what you want to make. We read every note, and we answer.',
    cta: 'Start a conversation',
  },
};

export const PLAY = {
  eyebrow: 'Play',
  title: 'Cross into a game',
  intro:
    'Step into the worlds we have made playable. Each game has a home of its own — read a while, then cross the threshold into play.',
  featuredLabel: 'Featured Game',
  upcomingLabel: 'More at the workbench',
};

export const STUDIO = {
  eyebrow: 'The Studio',
  // The mythic identity line (locked). Plainspoken register lives on the homepage.
  identity: 'BridgeTender Studio tends the crossing where ideas find their way into the world.',
  mission: {
    heading: 'The Mission',
    line: 'BridgeTender Studio helps ideas find form.',
    body: 'Every idea begins as something only you can see. Our work is the crossing — the bridge from the half-formed thing in the mind to something real enough to hold, to play, to share.',
  },
  philosophy: {
    heading: 'Between Worlds',
    body: [
      'The most interesting things happen at the threshold — the place between what is imagined and what is made, between the world you know and the one just past it.',
      'That in-between is not empty. It is where the wonder begins. A BridgeTender does not guard the crossing. A BridgeTender lights it, and walks you across.',
    ],
  },
  approach: {
    heading: 'How We Tend the Crossing',
    body: [
      'We shorten the distance between an idea and its first breath. Plain language in; something playable out. The hard machinery — the scaffolding, the systems, the wiring — stays behind the curtain, where it belongs.',
      'What you keep is the making, and the quiet wonder of watching your idea stand up on its own.',
    ],
  },
  process: {
    heading: 'The Making',
    body: 'Every project walks the same lantern-lit path — imagine, shape, prototype, play, refine, and, when it is ready, publish. We move in small, honest steps, and we let the work tell us when it has come alive.',
  },
  future: {
    heading: 'What’s Ahead',
    body: 'We are building Lantern — a place where anyone can sit down, describe a world in their own words, and watch it become playable. Games first, then more. The bridge is being widened, so that more ideas, from more people, can find their way across.',
    cta: { label: 'See Lantern', href: ROUTES.lantern },
  },
  close: 'Bring us the thing only you can see. We will help it into the light.',
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
    unavailable: {
      title: 'The lantern is being lit.',
      body: 'Beta signups are briefly unavailable while we finish setup. Please check back shortly.',
    },
    invalidEmail: 'That email address doesn’t look quite right.',
  },
};
