import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { LanternRule } from '@/components/LanternRule';
import { CTAButton } from '@/components/CTAButton';
import { ROUTES, PLATFORM_NAME } from '@/lib/constants';

// Authentication placeholder — real sign-in arrives with Lantern (Phase 2).
export const metadata: Metadata = {
  title: 'Sign In',
  description: `Sign in to ${PLATFORM_NAME} is coming soon.`,
  robots: { index: false, follow: true },
};

export default function SignInPage() {
  return (
    <Section className="flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-amber">Sign In</p>
      <LanternRule short className="mx-auto my-7" />
      <h1 className="font-display text-3xl font-semibold tracking-wide text-ember sm:text-4xl">
        The door isn’t open yet.
      </h1>
      <p className="mx-auto mt-5 max-w-md font-body text-lg leading-relaxed text-parchment/80">
        Sign-in arrives with {PLATFORM_NAME}. For now, join the beta and we’ll light your way in when
        the first doors open.
      </p>
      <div className="mt-9">
        <CTAButton href={ROUTES.getStarted} variant="primary" className="px-8">
          Join the {PLATFORM_NAME} Beta
        </CTAButton>
      </div>
    </Section>
  );
}
