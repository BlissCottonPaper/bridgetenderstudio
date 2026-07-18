import type { Config } from 'tailwindcss';

/**
 * The BridgeTender design system, expressed as Tailwind tokens.
 * Dark amber / void: deep near-black grounds, a warm lantern glow as the accent.
 * The darkness is mysterious; the light is safe.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0806',
        shadow: '#141009',
        stone: '#2c2218',
        parchment: '#c8b89a',
        amber: '#e8a030',
        ember: '#f5c870',
        mist: '#7a6e62',
      },
      fontFamily: {
        // Display headings, body prose, and the myth voice (pull quotes / italics).
        // Self-hosted via @fontsource (imported in app/layout.tsx).
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        myth: ['"IM Fell English"', 'Georgia', 'serif'],
      },
      boxShadow: {
        lantern: '0 0 28px rgba(232, 160, 48, 0.09)',
        'lantern-strong': '0 0 44px rgba(232, 160, 48, 0.18)',
      },
      keyframes: {
        'lantern-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.82' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'lantern-flicker': 'lantern-flicker 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
