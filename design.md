# Design: Canberk Yıldız portfolio

Locked design system for the site. Read it before changing the page; amend
this file when the system needs to grow. Written 2026-10-02 for the rebuild
on Next.js 16. The earlier cold-black and cyan system is retired.

## The idea

Canberk has a mechanical engineering degree and spent years on gas turbines
and production lines before he wrote software. So the page is laid out the
way an engineer hands over work: as a **drawing sheet**.

That is a structure, not a costume. Each drawing device carries real content:

| Device | What it holds |
| --- | --- |
| Title block | Who he is: role, city, stack, training, languages, status |
| Sheets | The six featured projects, one per sheet, stacked like a drawing set |
| Dimension lines | The two widths each project was captured at (1440 px, 390 px) |
| Parts list | All nineteen projects as one table |
| Revision history | The career, dated, in two tables |
| Redline | A project that was rebuilt from scratch (Rev B) |
| Inspection checklist | The checks run before a site is called finished |
| Weld symbol | The mark: a fillet weld symbol, from his inspection certificate |

If a device has no real content to carry, it does not appear. There is no
grid background, no coordinates, no zone letters, no decorative stamps.

## Genre

editorial / technical document. Paper, ink, tables.

## Colour

The page has no colour of its own. **Colour arrives only inside the project
screenshots**, so the work is the only vivid thing on the sheet.

| Token | Light (paper) | Dark (CAD model space) | Use |
| --- | --- | --- | --- |
| `--paper` | `oklch(0.977 0.003 250)` | `oklch(0.185 0.008 255)` | ground |
| `--paper-2` | `oklch(0.945 0.004 250)` | `oklch(0.235 0.009 255)` | active table row, image placeholder |
| `--ink` | `oklch(0.2 0.012 255)` | `oklch(0.94 0.004 255)` | text, primary button |
| `--ink-2` | `oklch(0.42 0.012 255)` | `oklch(0.74 0.008 255)` | secondary text, lettering |
| `--rule` | `oklch(0.2 0.012 255)` | `oklch(0.72 0.006 255)` | object lines: section rules, table frames |
| `--rule-2` | `oklch(0.82 0.006 255)` | `oklch(0.35 0.008 255)` | thin lines: table rows |
| `--red` | `oklch(0.5 0.19 27)` | `oklch(0.74 0.15 27)` | a revision, and nothing else |

Red means one thing: this was revised. It marks Rev B in the parts list and
the revision note on a sheet. It is never used for emphasis, links or errors.

Every colour in CSS is a token. No inline hex, no gradients, no shadows.

## Type

Two families, three jobs.

- **Archivo** (variable weight and width). Headings are set condensed
  (`font-stretch` 66 to 72%, weight 620 to 640), the way lettering on a
  drawing is narrow. Body text is the same family at normal width.
- **IBM Plex Mono**. Table heads, dates, figures: the single-stroke hand of
  a drawing's notes. Class `.lettering` (uppercase, tracked, small) is for
  column heads and data labels only. Class `.figure-text` is for dates and
  numbers.

Headings are always roman. No italics in headings, no gradient text.

## Layout

One column of full-width bands, each opened by a 1px rule. Max width 96rem,
gutter `clamp(1rem, 3.4vw, 3rem)`.

1. Header: mark and name, four anchors, language, theme. Sticky.
2. Hero: the headline at full width, a drawn rule, then intro beside the
   title block.
3. Selected work: six sheets. Screenshot on one side with its phone capture
   inset and dimension lines beneath; name, description and a three-row spec
   on the other. Sides alternate.
4. Parts list: table of all nineteen. On wide screens a sticky panel shows
   the screenshot of the row under the pointer or holding focus.
5. Revision history: heading and paragraph on the left (sticky), two tables
   on the right.
6. Inspection checklist: same split, one table.
7. Contact: one sentence, the address, two links.

Section heads are real headings. No small label above a heading, no section
numbers.

## Motion

Each animation has a job. Easing is `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)`
for things arriving and `--ease-in-out` `cubic-bezier(0.77, 0, 0.175, 1)` for
things drawn across the page.

| Where | What | Why |
| --- | --- | --- |
| Hero, on load | headline set word by word; rule drawn left to right | first-visit, once |
| Sheets, on scroll | screenshot wiped in from the left edge | a plot coming off the roller |
| Sheets, wide and tall screens | each sheet sticks under the header; the covered one recedes (GSAP scrub) | the set reads as stacked sheets |
| Blocks, on scroll | rise 20px and fade in | keeps content from teleporting |
| Parts list | preview crossfades in 200ms | state change |
| Buttons | press scales to 0.97; arrow nudges on hover | feedback |

Under `prefers-reduced-motion` nothing moves and nothing starts hidden.
Without JavaScript nothing starts hidden either: pre-states only apply once
the boot script has marked the document.

The sheet stack is active only at `min-width: 64rem` and `min-height: 50rem`,
where a sheet is sure to fit. Elsewhere sheets are ordinary blocks. A control
focused by keyboard inside a covered sheet scrolls its sheet into the docked
position, so focus is never hidden.

## Honesty

- Every number is counted or dated from a source: nineteen deployed sites,
  first-commit months from the repositories, career dates from LinkedIn.
- Screenshots are real captures of the live sites. Regenerate them with
  `npm run shots -- <dir>` when a project changes.
- Invented brands are labelled "Concept project". Only Rainbow Design and
  InfoDaily are called products.
- No photo of Canberk. He asked for it to be removed.

## Language

English at `/`, Turkish at `/tr/`. All copy lives in `lib/content.ts` and
`lib/projects.ts`, each string as `{ en, tr }`. No em dashes in either
language.

## Bans

Gradients, glass, glow, drop shadows, rounded cards, emoji, icon libraries,
logo walls, stat counters, custom cursors, background grids, fake browser or
phone frames, italic headings.
