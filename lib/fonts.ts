import { Funnel_Display, Funnel_Sans, Martian_Mono } from 'next/font/google';

// Funnel Display for the name and the project names, Funnel Sans for
// reading, Martian Mono (narrowed on its width axis) for dates, labels and
// the stage cue.
export const funnelDisplay = Funnel_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-funnel-display',
  display: 'swap',
});

export const funnelSans = Funnel_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-funnel-sans',
  display: 'swap',
});

export const martianMono = Martian_Mono({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-martian-mono',
  display: 'swap',
});
