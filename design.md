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
| Revision mark | A project that was rebuilt from scratch (Rev B chip, red revision note) |
| Inspection checklist | The checks run before a site is called finished |
| Weld symbol | The mark: a fillet weld symbol, from his inspection certificate |

If a device has no real content to carry, it does not appear. There is no
grid background, no coordinates, no zone letters, no decorative stamps.

## Genre

editorial / technical document, printed in eighties colour. Paper, ink,
tables, five pens.

## Colour

Changed 2026-10-02 at Canberk's request: livelier, eighties, retro. The sheet
is now **plotted the way a 1985 pen plotter drew**: cream paper, indigo ink
and five loud pens. The reference is flat print (speed stripes on packaging,
binder dividers, out-of-register ink), not synthwave. Nothing glows and
nothing blends.

| Token | Light (paper) | Dark (night) | Use |
| --- | --- | --- | --- |
| `--paper` | `oklch(0.951 0.027 92)` | `oklch(0.2 0.045 285)` | ground |
| `--paper-2` | `oklch(0.915 0.04 92)` | `oklch(0.255 0.055 285)` | title block labels, image placeholder |
| `--ink` | `oklch(0.225 0.05 285)` | `oklch(0.951 0.027 92)` | text, button edges |
| `--ink-2` | `oklch(0.42 0.045 285)` | `oklch(0.82 0.03 92)` | secondary text, lettering |
| `--rule` | `oklch(0.225 0.05 285)` | `oklch(0.82 0.03 92)` | object lines |
| `--rule-2` | `oklch(0.83 0.035 92)` | `oklch(0.36 0.05 285)` | thin lines: table rows |
| `--red` | `oklch(0.52 0.2 28)` | `oklch(0.78 0.15 35)` | red as text: revision notes, dimensions, the mark |

The five pens are the same in both themes:

| Pen | Value | Where it is laid down |
| --- | --- | --- |
| `--pen-yellow` | `oklch(0.868 0.17 88)` | primary button, active parts row, checklist heading, sheet 1 and 6 |
| `--pen-orange` | `oklch(0.7 0.19 45)` | sheet 4, "Engineering and sales" tag |
| `--pen-pink` | `oklch(0.7 0.2 358)` | headline block, Rev B chip, nav underline, sheet 2 |
| `--pen-teal` | `oklch(0.72 0.125 185)` | title block and preview offset, "Software" tag, sheet 3 |
| `--pen-blue` | `oklch(0.44 0.23 272)` | the contact band, sheet 5 |

Text over a pen is `--on-pen` (indigo) on the four bright ones and `--on-blue`
(cream) on blue, in both themes. The checklist is the one reversed band
(`--band`, `--on-band`).

How the pens may be used, and only these ways:

- **Stripe**: the five pens side by side, under the headline and above the
  footer.
- **Tab**: a full-width band heading each featured sheet, one pen per sheet.
- **Offset block**: one flat pen printed out of register behind a capture,
  the title block or a heading (`box-shadow` or `text-shadow` with no blur).
- **Fill**: a button, a chip, a tag, the active row, the contact band.

Every colour in CSS is a token. No inline hex, no gradients between pens, no
blur, no glow.

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

The 404 page (`app/global-not-found.tsx`) reuses the hero: the numeral at
headline size, the stripe, then one message per language side by side and a
two-row title block showing the address that was asked for. It speaks both
languages because a static host cannot tell which one the visitor wanted.

## Motion

Each animation has a job. Easing is `--ease-out` `cubic-bezier(0.23, 1, 0.32, 1)`
for things arriving and `--ease-in-out` `cubic-bezier(0.77, 0, 0.175, 1)` for
things drawn across the page.

| Where | What | Why |
| --- | --- | --- |
| Hero, on load | headline set word by word; the stripe drawn pen by pen | first-visit, once |
| Sheets, on scroll | screenshot wiped in from the left edge | a plot coming off the roller |
| Sheets, wide and tall screens | each sheet sticks under the header; the covered one recedes (GSAP scrub) | the set reads as stacked sheets |
| Blocks, on scroll | rise 20px and fade in | keeps content from teleporting |
| Parts list | preview crossfades in 200ms | state change |
| Buttons | press pushes the key into its ink block; arrow nudges on hover | feedback |

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

Gradients, glass, glow, neon, blurred shadows, chrome lettering, grid
horizons and sunsets, scanlines, rounded cards, emoji, icon libraries, logo
walls, stat counters, custom cursors, background grids, fake browser or phone
frames, italic headings.
