/**
 * Single source of truth for names, routes, and navigation.
 * Marc will iterate on language — keep user-facing strings here and in lib/copy.ts.
 */

// The platform is Lantern — capital L, one word, no "The".
// "Game development" is a pathway within Lantern, not the brand.
export const PLATFORM_NAME = 'Lantern';

// The studio that tends the crossing between an idea and the world beyond.
export const STUDIO_NAME = 'BridgeTender Studio';

// Public maker's mark — scoped to public pages, never forced into utility/auth screens.
export const MAKERS_MARK = 'From the mind of Marc Simmons';

export const CONTACT_EMAIL = 'hello@bridgetenderstudio.com';

export const ROUTES = {
  home: '/',
  ourWork: '/our-work',
  play: '/play',
  lantern: '/lantern',
  workWithUs: '/work-with-us',
  theStudio: '/the-studio',
  signIn: '/sign-in',
  getStarted: '/lantern#beta',
} as const;

// Locked six-item primary navigation.
export const NAV_ITEMS: { label: string; href: string; beta?: boolean }[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Our Work', href: ROUTES.ourWork },
  { label: 'Play', href: ROUTES.play },
  { label: `${PLATFORM_NAME} (Beta)`, href: ROUTES.lantern, beta: true },
  { label: 'Work With Us', href: ROUTES.workWithUs },
  { label: 'The Studio', href: ROUTES.theStudio },
];

// Nav call-to-action buttons.
export const NAV_CTAS = {
  // Authentication placeholder now; Lantern login when available.
  signIn: { label: 'Sign In', href: ROUTES.signIn },
  // Lantern beta signup.
  getStarted: { label: 'Get Started', href: ROUTES.getStarted },
} as const;
