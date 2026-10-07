# Canberk Yıldız · portfolio

My own site. I am a full-stack developer with a degree in mechanical engineering, and the page is laid out the way I was taught to present work: as a drawing sheet.

**Live:** https://canberkyildiz.netlify.app (English) and https://canberkyildiz.netlify.app/tr/ (Turkish)

## What is on the page

- **A title block** in place of a hero: who I am, what I do, where to reach me.
- **Featured project sheets**, each with a screenshot under dimension lines, the stack as a parts table and links to the live site and the code.
- **A parts list** of every project, with its kind, its stack, when it was started and which revision it is on.
- **A revision history**: the path from mechanical engineering through sales to software, dated.
- **Two languages**, English and Turkish, as two routes with their own `<html lang>`. Every sentence lives in one file.
- **Light and dark**, following the system until the visitor chooses.

## Stack

- Next.js 16 (App Router, static export), React 19, TypeScript
- Tailwind CSS 4 with a hand-written component layer in `app/globals.css`
- GSAP ScrollTrigger, loaded only on screens that use the stacked sheets
- Archivo and IBM Plex Mono, served from the site itself through `next/font`

## Layout of the code

| Path | What it is |
| --- | --- |
| `lib/content.ts` | Every sentence on the page, in English and Turkish |
| `lib/projects.ts` | The projects: stack, dates, links, descriptions |
| `components/` | One file per band of the page: `Hero`, `Featured`, `PartsList`, `Sections`, and the shell round them |
| `app/(en)`, `app/(tr)` | The two language routes |
| `public/work/` | Project screenshots as WebP, three widths each |
| `scripts/optimize-shots.mjs` | Turns captures into those WebP files |
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

Add an entry to `lib/projects.ts`, put its screenshots in `public/work/` as `<id>-560.webp`, `<id>-1120.webp` and `<id>-1920.webp`, and build. The parts list, the counts and both languages pick it up from there.

## Deploying

The site is plain static files. Build, then upload `out/`:

```bash
npm run build
npx netlify deploy --prod --dir=out
```

## Author

[Canberk Yıldız](https://canberkyildiz.netlify.app)
