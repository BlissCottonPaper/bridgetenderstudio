import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { CONTACT_EMAIL, STUDIO_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${STUDIO_NAME} handles the information you share with us.`,
};

const sections: { h: string; p: string[] }[] = [
  {
    h: 'What we collect',
    p: [
      'When you join the Lantern beta, we collect your email address and, if you choose to give it, a name or handle. When you contact us, we collect your email and the message you send.',
      'We do not knowingly collect information from anyone under 13. Lantern is made for creators 13 and older.',
    ],
  },
  {
    h: 'Why we collect it',
    p: [
      'We use your email to let you know about the Lantern beta — when doors open and when there is something real to share. We use contact messages only to reply to you.',
    ],
  },
  {
    h: 'How it is stored',
    p: [
      'Your information is stored privately with our hosting provider, Cloudflare. Email addresses are never shown publicly and are never displayed to other people who sign up.',
      'To keep signups free of spam and abuse, the beta form is protected by Cloudflare Turnstile.',
    ],
  },
  {
    h: 'What we never do',
    p: ['We do not sell your information, and we do not share it with advertisers or unrelated third parties.'],
  },
  {
    h: 'Your choices',
    p: [
      'You can leave the beta list at any time — every email we send includes a way to unsubscribe, and you can also write to us to be removed.',
    ],
  },
  {
    h: 'Changes to this notice',
    p: ['If this notice changes in a meaningful way, we will update this page.'],
  },
];

export default function PrivacyPage() {
  return (
    <Section className="max-w-3xl pt-14 sm:pt-16">
      <SectionHeading eyebrow="Privacy" title="Privacy Policy" as="h1" />
      <p className="mt-6 font-body text-lg leading-relaxed text-parchment/80">
        {STUDIO_NAME} keeps things simple: we collect only what we need to reach you, we keep it
        private, and we never sell it.
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display text-xl font-semibold tracking-wide text-ember">{s.h}</h2>
            {s.p.map((para) => (
              <p key={para} className="mt-3 font-body text-lg leading-relaxed text-parchment/80">
                {para}
              </p>
            ))}
          </div>
        ))}

        <div>
          <h2 className="font-display text-xl font-semibold tracking-wide text-ember">Contact</h2>
          <p className="mt-3 font-body text-lg leading-relaxed text-parchment/80">
            Questions about your information? Write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber underline-offset-2 hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
