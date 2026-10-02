/* Turns raw project captures into the WebP files the site serves.

   usage: npm run shots -- <dir with name.png and name-m.png>

   Desktop captures are 1440x900 @2x, mobile ones 390x844 @2x. Each desktop
   capture becomes three widths (the large figure, its 1x fallback and the
   list thumbnail); each mobile capture becomes one. */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const src = process.argv[2];
if (!src) {
  console.error('usage: npm run shots -- <source dir>');
  process.exit(1);
}
const out = path.resolve('public/work');
fs.mkdirSync(out, { recursive: true });

const DESKTOP = [
  [1920, 80],
  [1120, 80],
  [560, 76],
];
const MOBILE = [[520, 80]];

for (const file of fs.readdirSync(src).filter((f) => f.endsWith('.png') && !f.startsWith('_'))) {
  const name = file.replace(/\.png$/, '');
  const widths = name.endsWith('-m') ? MOBILE : DESKTOP;
  for (const [width, quality] of widths) {
    const target = path.join(out, `${name}-${width}.webp`);
    await sharp(path.join(src, file)).resize({ width }).webp({ quality, effort: 6 }).toFile(target);
    console.log(path.basename(target), `${Math.round(fs.statSync(target).size / 1024)} KB`);
  }
}
