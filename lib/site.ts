export type Lang = 'en' | 'tr';

/** A string in both languages the site ships in. */
export type L = Record<Lang, string>;

export const SITE = {
  url: 'https://canberkyildiz.netlify.app',
  name: 'Canberk Yıldız',
  email: 'canberkyildiz2@yandex.com',
  github: 'https://github.com/canberkyildiz25',
  githubHandle: 'canberkyildiz25',
  linkedin: 'https://www.linkedin.com/in/canberkyildiz/',
  linkedinHandle: 'in/canberkyildiz',
  repo: 'https://github.com/canberkyildiz25/Personal-Portfolio',
} as const;

export const PATHS: Record<Lang, string> = { en: '/', tr: '/tr/' };
