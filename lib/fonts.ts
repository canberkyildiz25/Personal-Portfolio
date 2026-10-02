import { Archivo, IBM_Plex_Mono } from 'next/font/google';

// Archivo carries a width axis: headings are set condensed and body text at
// normal width from the same family. Plex Mono is the lettering for figures.
export const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});
