/* eslint-disable @next/next/no-img-element -- static export: pre-sized WebP files with a hand-written srcset */
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { WORK } from '@/lib/content';
import { FEATURED, STANDING, type Project } from '@/lib/projects';
import type { Lang } from '@/lib/site';

/** One project on stage. While it holds the middle of the screen the whole
    stage takes its colour; without scripts it simply paints its own. */
function Scene({ project, index, lang }: { project: Project; index: number; lang: Lang }) {
  const f = project.feature!;
  const shot = `/work/${project.id}`;
  const eager = index === 0;

  return (
    <article className={index % 2 ? 'scene scene--flip' : 'scene'} data-tone={project.id} data-name={project.name} aria-labelledby={`${project.id}-h`}>
      <figure className="scene__shot" data-reveal="shot">
        <img
          className="scene__desktop"
          src={`${shot}-1120.webp`}
          srcSet={`${shot}-560.webp 560w, ${shot}-1120.webp 1120w, ${shot}-1920.webp 1920w`}
          sizes="(min-width: 64rem) 62vw, 100vw"
          width={1440}
          height={900}
          alt={`${project.name}, ${WORK.desktopAlt[lang]}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <img
          className="scene__phone"
          src={`${shot}-m-520.webp`}
          width={390}
          height={844}
          alt={`${project.name}, ${WORK.phoneAlt[lang]}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </figure>

      <div className="scene__text" data-reveal>
        <p className="scene__kind mono">
          {project.kind[lang]} · {STANDING[project.standing][lang]}
        </p>
        <h3 id={`${project.id}-h`}>{project.name}</h3>
        <p className="scene__lede">{f.lede[lang]}</p>
        <p className="scene__detail">{f.detail[lang]}</p>
        <dl className="scene__facts">
          <div>
            <dt className="mono">{WORK.stack[lang]}</dt>
            <dd>{project.stack.join(', ')}</dd>
          </div>
          <div>
            <dt className="mono">{WORK.started[lang]}</dt>
            <dd className="mono">{project.started}</dd>
          </div>
          <div>
            <dt className="mono">{WORK.revision[lang]}</dt>
            <dd>{f.revision ? f.revision[lang] : WORK.firstIssue[lang]}</dd>
          </div>
        </dl>
        <div className="scene__links">
          <a className="btn btn--ink" href={project.live} target="_blank" rel="noopener noreferrer">
            {WORK.open[lang]}
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </a>
          {project.code ? (
            <a className="btn btn--ink-line" href={project.code} target="_blank" rel="noopener noreferrer">
              {WORK.source[lang]}
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Featured({ lang }: { lang: Lang }) {
  return (
    <section className="stage" id="work" aria-labelledby="work-h">
      <header className="stage__head" data-tone={FEATURED[0].id} data-name={FEATURED[0].name}>
        <h2 id="work-h">{WORK.h2[lang]}</h2>
        <p>{WORK.sub[lang]}</p>
      </header>
      {FEATURED.map((project, i) => (
        <Scene key={project.id} project={project} index={i} lang={lang} />
      ))}
    </section>
  );
}
