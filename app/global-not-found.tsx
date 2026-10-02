import type { Metadata } from 'next';
import { NotFound } from '@/components/NotFound';
import { Shell } from '@/components/Shell';
import './globals.css';

// The site has one root layout per language, so the 404 cannot belong to
// either of them. This file is the page Next exports as 404.html.
export { viewport } from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Page not found · Canberk Yıldız',
  robots: { index: false, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function GlobalNotFound() {
  return (
    <Shell lang="en">
      <NotFound />
    </Shell>
  );
}
