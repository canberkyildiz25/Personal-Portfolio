# Canberk Yıldız · portfolio

My own site. I am a full-stack developer with a degree in mechanical engineering, and I also build websites for small businesses. The page is a shop window at night: the house lights are down and the work is lit.

**Live:** https://canberkyildiz.netlify.app (English) and https://canberkyildiz.netlify.app/tr/ (Turkish)

## What is on the page

- **The name over the reel.** Captures of all twenty live sites run in two lines, in opposite directions, under my name. They stop under the pointer, when the top of the page is off screen, and with the pause button; with the system's reduced-motion setting on they never move.
- **The stage.** Seven projects, one full screen each. While a project holds the middle of the screen the whole stage takes the colour its own site is built round (Rainbow Design's yellow, Spectra's cold blue, PokéDuel's baize, Nöbet's sodium lamp, MISE's lilac, Verdant's field), and the chip in the header names it. Each one shows the site at desktop width and on a phone, what it does, its stack, when it was started and how it was revised.
- **Every project**, all twenty, as a wall of captures with links to the running site and the code.
- **The background**: from mechanical engineering through sales to software, dated.
- **For businesses**: how a site gets made, the five checks every site I hand over passes, and Rainbow Design for anyone who would rather set one up alone.
- **Two languages**, English and Turkish, as two routes with their own `<html lang>`. Every sentence lives in one file.

Without JavaScript every scene paints its own colour and everything can still be read.

## Stack

- Next.js 16 (App Router, static export), React 19, TypeScript
- Tailwind CSS 4 with a hand-written component layer in `app/globals.css`
- No animation library: the reel is a CSS animation, the stage light is a registered CSS colour property faded by the browser, and a small script decides which project is on stage
- Funnel Display, Funnel Sans and Martian Mono, served from the site itself through `next/font`
- Phosphor for the arrows

## Layout of the code

| Path | What it is |
| --- | --- |
| `lib/content.ts` | Every sentence on the page, in English and Turkish |
| `lib/projects.ts` | The projects: stack, dates, links, descriptions, and which six are on stage |
| `components/Hero.tsx` | The name and the reel |
| `components/Featured.tsx` | The stage and its scenes |
| `components/PartsList.tsx` | The wall of every project |
| `components/Sections.tsx` | The background, the section for businesses and the closing line |
| `components/Motion.tsx` | Which project is on stage, reveals, the reel stopping off screen |
| `app/(en)`, `app/(tr)` | The two language routes |
| `public/work/` | Project screenshots as WebP |
| `scripts/optimize-shots.mjs` | Turns captures into those WebP files |
| `scripts/og-image.mjs` | Renders the share picture from the page's own top |
| `design.md` | The design system and its rules |

## Run it

Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # the static site, into ./out
npm run lint
npm run typecheck
```

There are no environment variables.

Screenshots are captured from the live sites at 1440×900 and 390×844 (2x) and converted with:

```bash
npm run shots -- path/to/captures
```

## Adding a project

Add an entry to `lib/projects.ts` and put its screenshots in `public/work/` as `<id>-560.webp`, `<id>-1120.webp` and `<id>-1920.webp`. The reel, the wall and both languages pick it up from there.

To put it on stage as well, add its id to `STAGED` in the same file, give it `feature` text and a phone capture (`<id>-m-520.webp`), and give it a colour: three tokens and a `[data-tone]` block in `app/globals.css`. `design.md` says how the colour is chosen and which contrast it has to clear.

## Deploying

The site is plain static files. Build, then upload `out/`:

```bash
npm run build
npx netlify deploy --prod --dir=out
```

## What I checked

With a headless browser against the built site, in both languages: no sideways scroll at eight widths from 320 to 1920 pixels, no console or network errors, no broken image; no accessibility violations reported by axe at phone and desktop width or on the 404 page, and each scene checked for contrast while it is lit; every control on a phone at least 44 pixels; the keyboard reaches every control with a visible ring that is never under the header; the top of the page fits a 1280×800 screen; reduced motion and scripts turned off. The scripts for these checks are not in the repository.

## Author

[Canberk Yıldız](https://canberkyildiz.netlify.app)
