import type { Metadata, Viewport } from 'next';

// Self-hosted display, body, and myth-voice faces.
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/im-fell-english/400.css';
import '@fontsource/im-fell-english/400-italic.css';

import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { STUDIO_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://bridgetenderstudio.com'),
  title: {
    default: `${STUDIO_NAME} — Where ideas cross into the world`,
    template: `%s · ${STUDIO_NAME}`,
  },
  description:
    'BridgeTender Studio is an independent creative workshop that helps ideas find form.',
  openGraph: {
    title: STUDIO_NAME,
    description: 'An independent creative workshop that helps ideas find form.',
    type: 'website',
  },
  icons: {
    // ?v=2 cache-busts the browser's separate (sticky) favicon store — bump on any icon change.
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0a0806',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Keyboard users can jump straight to content. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-amber focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-widest focus:text-void"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
