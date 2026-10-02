# Canberk Yıldız · portfolio

Personal site of a full-stack developer with a mechanical engineering degree.
The page is laid out as a drawing sheet: a title block, six project sheets
with dimension lines, a parts list of all nineteen projects and a dated
revision history.

Live: https://canberkyildiz.netlify.app (English) and `/tr/` (Turkish).

## Stack

- Next.js 16 (App Router, static export), React 19, TypeScript
- Tailwind CSS 4 with a hand-written component layer in `app/globals.css`
- GSAP ScrollTrigger, loaded only on screens that use the stacked sheets
- Archivo and IBM Plex Mono, self-hosted through `next/font`

## Layout of the code

| Path | What it is |
| --- | --- |
| `lib/content.ts` | Every sentence on the page, in English and Turkish |
| `lib/projects.ts` | The nineteen projects: stack, dates, links, descriptions |
| `components/` | One file per band of the page |
| `app/(en)`, `app/(tr)` | The two language routes, each with its own `<html lang>` |
| `public/work/` | Project screenshots as WebP |
| `design.md` | The design system and its rules |

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run lint
npm run typecheck
```

Screenshots are captured from the live sites at 1440×900 and 390×844 (2x) and
converted with:

```bash
npm run shots -- path/to/captures
```

## Deploy

The site is plain static files. Build, then upload `out/`:

```bash
npm run build
npx netlify deploy --prod --dir=out
```
