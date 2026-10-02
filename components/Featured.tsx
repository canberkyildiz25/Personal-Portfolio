/* eslint-disable @next/next/no-img-element -- static export: images are
   pre-sized WebP files with a hand-written srcset, not the image optimizer */
import { WORK } from '@/lib/content';
import { FEATURED, STANDING, type Project } from '@/lib/projects';
import type { Lang } from '@/lib/site';
import { Arrow } from './Icons';

// One pen per sheet, in binder order.
const PENS = ['yellow', 'pink', 'teal', 'orange', 'blue'] as const;

function Sheet({ project, index, lang }: { project: Project; index: number; lang: Lang }) {
  const f = project.feature!;
  const shot = `/work/${project.id}`;

  return (
    <article className={index % 2 ? 'sheet sheet--flip' : 'sheet'} data-sheet data-pen={PENS[index % PENS.length]}>
      <div className="sheet__tab">
        <div className="wrap lettering">
          <span>
            {project.kind[lang]} · {STANDING[project.standing][lang]}
          </span>
          <span>
            {WORK.sheet[lang]} {index + 1} {WORK.of[lang]} {FEATURED.length}
          </span>
        </div>
      </div>
      <div className="wrap sheet__inner">

        <figure className="sheet__figure" data-reveal="plot">
          <div className="sheet__plot">
            <img
              className="sheet__desktop"
              src={`${shot}-1120.webp`}
              srcSet={`${shot}-560.webp 560w, ${shot}-1120.webp 1120w, ${shot}-1920.webp 1920w`}
              sizes="(min-width: 64rem) 56vw, 100vw"
              width={1440}
              height={900}
              alt={`${project.name}, ${WORK.desktopAlt[lang]}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <img
              className="sheet__phone"
              src={`${shot}-m-520.webp`}
              width={390}
              height={844}
              alt={`${project.name}, ${WORK.phoneAlt[lang]}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
          {/* Chained dimensions, as on a drawing: the widths the two captures were taken at. */}
          <figcaption className="sheet__dims lettering">
            <span className="dim dim--phone">390</span>
            <span className="dim">1440 px</span>
          </figcaption>
        </figure>

        <div className="sheet__spec" data-reveal>
          <h3>{project.name}</h3>
          <p className="sheet__lede">{f.lede[lang]}</p>
          <p className="sheet__detail">{f.detail[lang]}</p>
          <dl className="spec-list">
            <div>
              <dt className="lettering">{WORK.stack[lang]}</dt>
              <dd>{project.stack.join(', ')}</dd>
            </div>
            <div>
              <dt className="lettering">{WORK.started[lang]}</dt>
              <dd className="figure-text">{project.started}</dd>
            </div>
            <div>
              <dt className="lettering">{WORK.revision[lang]}</dt>
              <dd className={f.revision ? 'redline' : undefined}>{f.revision ? f.revision[lang] : WORK.firstIssue[lang]}</dd>
            </div>
          </dl>
          <div className="sheet__links">
            <a className="btn" href={project.live} target="_blank" rel="noopener noreferrer">
              {WORK.open[lang]}
              <Arrow />
            </a>
            {project.code ? (
              <a className="btn btn--plain" href={project.code} target="_blank" rel="noopener noreferrer">
                {WORK.source[lang]}
                <Arrow />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Featured({ lang }: { lang: Lang }) {
  return (
    <section id="work" aria-labelledby="work-h">
      <div className="work-head">
        <div className="wrap section-head">
          <h2 id="work-h">{WORK.h2[lang]}</h2>
          <p>{WORK.sub[lang]}</p>
        </div>
      </div>
      <div className="sheets">
        {FEATURED.map((project, i) => (
          <Sheet key={project.id} project={project} index={i} lang={lang} />
        ))}
      </div>
    </section>
  );
}
