/** @type {import('next').NextConfig} */
const nextConfig = {
  // Phase 1 is a static public site — export to plain HTML so it deploys to
  // Cloudflare Pages exactly like the current site (no SSR runtime, Lighthouse-friendly).
  // The signup endpoint lives in /functions as a Cloudflare Pages Function alongside the
  // export. When Phase 2's authenticated /app needs server rendering, switch the output
  // mode + add the Cloudflare adapter — the App Router structure and components carry over.
  output: 'export',
  trailingSlash: true,
  images: {
    // next/image optimization needs a server; static export serves images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
