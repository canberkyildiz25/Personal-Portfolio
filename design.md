# Design: Canberk Yıldız portfolio, v3

Locked design system for the site. Read it before changing the page; amend
this file when the system needs to grow. Written 2026-10-14. It replaces the
v2 "drawing sheet" (cream paper, indigo ink, five pens), which is retired.

## The idea

A **shop window at night**. The house lights are down and the work is lit.
The page is dark; each project that is featured steps onto a stage that
floods with the colour its own site is built round, and the light changes
as the next one steps up.

It speaks to two readers at once. An employer reads the developer first: the
name, the work, the career. A business that wants a website finds its own
section near the end, in the page's own colour, with three steps and the
checks every site passes.

Every device carries real content:

| Device | What it holds |
| --- | --- |
| The reel | Captures of all twenty live sites, in two lines moving in opposite directions under the name |
| The stage | Seven featured projects, one full screen each, in their own colours |
| The stage cue | The header chip names the project on stage, with a dot of its colour |
| The wall | All twenty as a grid of captures; the seven staged ones keep a bar of their colour |
| The timeline | The career in two lists: engineering and sales, then software |
| The limelight section | Work for small businesses: three steps, five checks, Rainbow Design |
| The closing line | One sentence, the email in limelight, two profile links |
| Weld symbol | The favicon: a fillet weld symbol, from his inspection certificate |

There are no counters (`01 / 06`), no "scroll" hints, no invented numbers.

## Structure

1. **Hero** (night, opaque). The name is the heading, one word on each rail.
   Above: the role in mono and the reel's pause button. Below: one line in
   display type, the introduction, the two kinds of work he takes, two
   buttons.
2. **Stage** (`#work`). A heading block, then six scenes. Each scene is a
   full screen: the text in one column, the desktop capture bleeding off the
   other edge with the phone capture overlapping its inner corner. The
   capture side alternates.
3. **Every project** (`#parts`, night). Heading and note side by side, then
   the wall of twenty.
4. **Background** (`#background`, night). Heading, introduction and three
   facts in a sticky column; the two timelines beside it.
5. **For businesses** (`#hire`, limelight). Heading, introduction and one
   button; three numbered steps; the five checks as rows; one sentence
   pointing to Rainbow Design.
6. **Contact** (`#contact`, night). The closing line as a statement footer.

Nav: three floating chips (name with stage cue, email, language). No row of
section links. The email chip appears once the hero, which has its own
button for it, is off screen.

## Colour

All colours are tokens in `app/globals.css` `:root`; nothing further down
writes a colour of its own.

| Token | Value | Role |
| --- | --- | --- |
| `--night` | `oklch(0.165 0.006 60)` | Ground of every dark section, the chips |
| `--night-2` | `oklch(0.215 0.007 60)` | Behind a capture while it loads |
| `--line` | `oklch(0.33 0.008 60)` | Hairlines, chip edges, link underlines |
| `--ink` | `oklch(0.96 0.008 90)` | Text on night |
| `--ink-2` | `oklch(0.76 0.012 80)` | Secondary text on night |
| `--ink-3` | `oklch(0.62 0.012 80)` | Labels and dates on night (5.3:1) |
| `--lime` | `oklch(0.93 0.14 112)` | Limelight: focus ring, software dates, the email, the business section |
| `--lime-ink`, `--lime-ink-2` | | Text on limelight |

Limelight is the page's only colour of its own: the stage lamp of the
nineteenth-century theatre burned this pale green-yellow.

### Stage colours

Each featured project has a ground and two inks. The ground is the colour its
own site is built round; the ink is the dark that site uses. Every ink, and
every second ink, clears 4.5:1 on its own ground and on the grounds of the
scenes either side of it (a scene's text can sit on its neighbour's colour
while the light changes).

| Project | Ground | Why |
| --- | --- | --- |
| Rainbow Design | `oklch(0.88 0.16 95)` | Its yellow highlighter |
| Spectra CRM | `oklch(0.74 0.12 248)` | The cold blue of a new lead |
| PokéDuel | `oklch(0.67 0.19 33)` | The tomato baize of the table |
| NÖBET | `oklch(0.78 0.14 72)` | The sodium lamp; ink is its night blue |
| MISE | `oklch(0.81 0.055 320)` | Its lilac and aubergine |
| VERDANT | `oklch(0.8 0.14 138)` | The field |

A block carries a tone with `data-tone="<project id>"`, which sets `--scene`,
`--scene-ink`, `--scene-ink-2`, `--scene-rule` and `--scene-shade` for its
subtree. To stage another project: add its id to `STAGED` in
`lib/projects.ts`, give it `feature` text and a phone capture, add its three
tokens and a `[data-tone]` block, and check the contrast pairs above.

### The stage light

`--live` is a registered colour property (`@property`). With scripts on,
every block on the stage paints `var(--live)` and the stage fades it to the
tone of whichever block holds the middle line of the screen (700 ms,
`--ease-in-out`). Without scripts each block paints its own `--scene`.

## Type

| Role | Face | Use |
| --- | --- | --- |
| Display | Funnel Display, 500 to 700 | The name, headings, project names, the hero line, ledes, the email |
| Text | Funnel Sans | Everything read |
| Labels and figures | Martian Mono at width 87.5 | Kinds, dates, fact labels, the stage cue, capture tags |

Headings are never italic. Display line-height runs 0.8 to 0.92 with a small
bottom padding so descenders clear the next line. Labels are 12 px, never
smaller.

## Shape and space

- Interactive things (buttons, chips) are full pills. Captures have a 6 px
  corner (`--radius-shot`); a capture that bleeds off the edge is square on
  that side. Nothing else is rounded.
- Spacing is on a 4 px scale (0.25 rem steps). Side gutter
  `clamp(1rem, 4vw, 3rem)`, 16 px on a phone.
- Reading measures stay between 45 and 75 characters.

## Motion

| What | How | Reduced motion |
| --- | --- | --- |
| The reel | CSS `translate3d`, linear, 96 s and 128 s, opposite directions; stops on hover, off screen and on the pause button | Still |
| Stage light | `--live` fades between tones, 700 ms | 250 ms |
| Reveal | Opacity and 20 px rise, 700 ms `--ease-out`, once | Opacity only |
| Capture reveal | `clip-path` opens from the edge the capture bleeds off, 900 ms; the phone rises 250 ms later | Opacity only |
| Press | `scale(0.97)`, 160 ms | None |

Easing tokens: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`,
`--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. Hover effects only under
`(hover: hover) and (pointer: fine)`.

## Checks before a change ships

- No sideways scroll from 320 to 1920 px, in both languages.
- axe clean at 390 and 1440 px in both languages and on the 404, and each
  scene checked for contrast while it is lit.
- Every control at least 44 px on a phone; no clickable text on two lines.
- Keyboard reaches every control with a visible 2 px ring, never under the
  header chips.
- Hero name, line and both buttons above the fold at 1280 × 800.
- Reduced motion: the reel is still and everything is shown.
- Scripts off: every scene paints its own colour and all text is there.
