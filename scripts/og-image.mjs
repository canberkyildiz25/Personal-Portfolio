/* Renders public/og-image.png from the site's own hero, so the share card is
   the real page rather than a separate design that can drift.

   usage: node scripts/og-image.mjs <url of a running build> <chromium path>
   Needs playwright-core available to Node (it is not a project dependency). */
import { chromium } from 'playwright-core';

const [url = 'http://127.0.0.1:5421/', executablePath] = process.argv.slice(2);

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  reducedMotion: 'reduce',
});
await page.goto(url, { waitUntil: 'networkidle' });
await page.addStyleTag({
  content: `
    .bar, .reel-toggle, .hero__about, .hero__actions, .skip-link { display: none !important; }
    .hero { padding: 2.5rem 3rem 2.75rem !important; gap: 1.25rem !important; }
    .hero__role { font-size: 0.9rem !important; }
    .hero__stage { margin-inline: -3rem !important; }
    .hero__name { padding-inline: 3rem !important; font-size: 10rem !important; }
    .rail { height: 9.5rem !important; }
    .hero__line { font-size: 2.25rem !important; max-width: none !important; }
  `,
});
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
console.log('wrote public/og-image.png');
