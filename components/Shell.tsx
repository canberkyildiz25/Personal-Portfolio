import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { META, NAV } from '@/lib/content';
import { funnelDisplay, funnelSans, martianMono } from '@/lib/fonts';
import { PATHS, SITE, type Lang } from '@/lib/site';

/* Runs before first paint: marks the document as scripted, so the stage
   (which needs the script to change colour) and the reveal pre-states only
   apply when the code that drives them can run. */
const BOOT = `document.documentElement.classList.add('js')`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#100e0c',
  colorScheme: 'dark',
};

export function buildMetadata(lang: Lang): Metadata {
  const url = SITE.url + PATHS[lang];
  return {
    metadataBase: new URL(SITE.url),
    title: META.title[lang],
    description: META.description[lang],
    authors: [{ name: SITE.name, url: SITE.url }],
    alternates: {
      canonical: url,
      languages: { en: SITE.url + PATHS.en, tr: SITE.url + PATHS.tr, 'x-default': SITE.url + PATHS.en },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE.name,
      title: META.title[lang],
      description: META.description[lang],
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: lang === 'tr' ? 'en_US' : 'tr_TR',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: META.title[lang] }],
    },
    twitter: { card: 'summary_large_image', title: META.title[lang], description: META.description[lang], images: ['/og-image.png'] },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
  };
}

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  alternateName: 'Canberk Yildiz',
  url: SITE.url + '/',
  jobTitle: 'Full-stack developer',
  email: `mailto:${SITE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'İstanbul', addressCountry: 'TR' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Odesa Polytechnic National University' },
    { '@type': 'EducationalOrganization', name: 'GoIT' },
  ],
  knowsLanguage: ['tr', 'en', 'ru'],
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Mechanical engineering'],
};

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${funnelDisplay.variable} ${funnelSans.variable} ${martianMono.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <a className="skip-link" href="#main">
          {NAV.skip[lang]}
        </a>
        {children}
      </body>
    </html>
  );
}
