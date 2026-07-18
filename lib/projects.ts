/**
 * Project data — the single source for cards across the site (homepage Featured
 * Projects and /our-work). New projects are added here; the ProjectCard renders
 * them everywhere. Public register throughout — no mechanics language.
 */

export type Project = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  href: string;
  external?: boolean;
  status: string;
  cta: string;
};

export const PROJECTS: Record<string, Project> = {
  harmony: {
    slug: 'harmony',
    name: 'Harmony',
    tag: 'Tabletop Game',
    blurb:
      'A meditative game of balance, nature, seasons, and change — gather the four terrains across the four directions, complete patterns of harmony, and seal them with the turning of the year.',
    image: '/harmony-logo.png',
    imageFit: 'cover',
    href: '/play',
    status: 'Playable Now',
    cta: 'Play Harmony',
  },
  soulcraft: {
    slug: 'soulcraft',
    name: 'The Art of Soulcraft',
    tag: 'Reflective Experience',
    blurb:
      'A reflective instrument that maps your core archetypes — a mirror for how you see, protect, choose, and become. Discover your archetypes.',
    image: '/soulcraft-site.jpg',
    imageFit: 'cover',
    href: 'https://artofsoulcraft.com',
    external: true,
    status: 'Live',
    cta: 'Enter Soulcraft',
  },
  bliss: {
    slug: 'bliss',
    name: 'Bliss Cotton Paper',
    tag: 'Paper & Print',
    blurb:
      'Handmade cotton paper and letterpress printing — deckled-edge stationery, wedding goods, and keepsakes, made in small batches and printed beautifully.',
    image: '/bliss-site.jpg',
    imageFit: 'cover',
    href: 'https://blisscottonpaper.com',
    external: true,
    status: 'Live & Shipping',
    cta: 'Visit Bliss',
  },
  wyldroot: {
    slug: 'wyldroot',
    name: 'WyldRoot',
    tag: 'Tabletop Game',
    blurb:
      'Forage the ancient forest as the herbalist of Eldermere, gathering what heals in a wood that never maps the same way twice.',
    image: '/wyldroot-logo.png',
    imageFit: 'cover',
    href: 'https://instagram.com/wyldrootgame',
    external: true,
    status: 'In Development',
    cta: 'Follow WyldRoot',
  },
};

// Homepage Featured Projects (order matters).
export const FEATURED_SLUGS = ['harmony', 'soulcraft', 'bliss'] as const;

// /our-work full roster (added to over time).
export const OUR_WORK_SLUGS = ['harmony', 'wyldroot', 'soulcraft', 'bliss'] as const;
