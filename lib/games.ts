/**
 * Game data. Each game gets a home page under /play/<slug>, then a threshold
 * into play. New games are added here; /play and the game-home pages follow.
 * Public register throughout — evocative, never mechanics language.
 */

export type Game = {
  slug: string;
  name: string;
  tagline: string;
  // One-line hook for the /play showcase card.
  hook: string;
  // The full public-register description for the game-home page.
  description: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  playHref: string;
  rulesHref?: string;
  status: string;
};

export const GAMES: Record<string, Game> = {
  harmony: {
    slug: 'harmony',
    name: 'Harmony',
    tagline: 'A Game of Balance',
    hook: 'A meditative game of balance, nature, seasons, and change.',
    description:
      'Harmony is a meditative game of balance, nature, seasons, and change. Players gather the four terrains across the four directions, completing patterns of harmony and locking them with Spring, Summer, Autumn, and Winter. Mountains can bridge what is missing, Fog holds time still, Wind restores possibility, and the sky changes everyone at the table.',
    image: '/harmony-logo.png',
    imageFit: 'cover',
    playHref: '/harmony/',
    rulesHref: '/harmony/rules.html',
    status: 'Playable Now',
  },
};

export const FEATURED_GAME = 'harmony';

// Games still taking shape — placeholder slots on the /play showcase.
export const UPCOMING_GAMES: { name: string; note: string }[] = [
  { name: 'Wyldroot', note: 'In the workshop' },
  { name: 'A new world', note: 'Taking shape' },
];
