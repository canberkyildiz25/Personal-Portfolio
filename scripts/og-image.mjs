/* Renders public/og-image.png from the site's own hero, so the share card is
   the real page rather than a separate design that can drift.

   usage: node scripts/og-image.mjs <url of a running build> <chromium path>
   Needs playwright-core available to Node (it is not a project dependency). */
import { chromium } from 'playwright-core';

const [url = 'http://127.0.0.1:5351/', executablePath] = process.argv.slice(2);

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  colorScheme: 'light',
  reducedMotion: 'reduce',
});
await page.goto(url, { waitUntil: 'networkidle' });
await page.addStyleTag({
  content: `
    .site-nav, .header-tools, .hero__actions, .skip-link { display: none !important; }
    .hero { padding-top: 3.25rem !important; }
    .hero h1 { font-size: 8.4rem !important; }
    .hero__stripe { margin-block: 1.75rem !important; }
    .hero__grid { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr) !important; gap: 3.5rem !important; }
    .hero__intro { font-size: 1.2rem !important; }
  `,
});
await page.waitForTimeout(300);
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
console.log('wrote public/og-image.png');
