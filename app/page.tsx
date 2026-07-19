import { Hero } from '@/components/Hero';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { LanternFeature } from '@/components/home/LanternFeature';
import { WhatWeBuild } from '@/components/home/WhatWeBuild';
import { ProcessPath } from '@/components/home/ProcessPath';
import { ClosingCTA } from '@/components/home/ClosingCTA';
import { LanternRule } from '@/components/LanternRule';

// Phase 1 · Milestone 2 — the complete homepage.
// Hero → Featured Projects → Featured Platform (Lantern) → What We Build →
// Process → closing CTA.
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <LanternRule className="mx-auto max-w-7xl" />
      <LanternFeature />
      <WhatWeBuild />
      <LanternRule className="mx-auto max-w-7xl" />
      <ProcessPath />
      <ClosingCTA />
    </>
  );
}
