/* eslint-disable @next/next/no-img-element -- static export: pre-sized WebP files, not the image optimizer */
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import type { CSSProperties } from 'react';
import { HERO } from '@/lib/content';
import { PROJECTS, type Project } from '@/lib/projects';
import { SITE, type Lang } from '@/lib/site';
import { ReelToggle } from './ReelToggle';

const year = (p: Project) => p.started.slice(0, 4);

/** One moving line of captures. The list is laid down twice so that sliding
    it by half its own width brings it back to where it started. Purely a
    picture: every project in it is listed, with links, further down. */
function Rail({ projects, seconds, reverse = false }: { projects: Project[]; seconds: number; reverse?: boolean }) {
  return (
    <div className="rail" aria-hidden="true">
      <div className={reverse ? 'rail__track rail__track--back' : 'rail__track'} style={{ '--seconds': `${seconds}s` } as CSSProperties}>
        {[0, 1].map((copy) =>
          projects.map((p, i) => (
            <figure className="tile" key={`${copy}-${p.id}`}>
              <img
                src={`/work/${p.id}-560.webp`}
                width={560}
                height={350}
                alt=""
                loading={copy === 0 && i < 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <figcaption className="tile__tag mono">
                {p.name} · {year(p)}
              </figcaption>
            </figure>
          )),
        )}
      </div>
    </div>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const half = Math.ceil(PROJECTS.length / 2);

  return (
    <section className="hero" id="top" aria-labelledby="hero-name" data-reel>
      <p className="hero__role mono">{HERO.role[lang]}</p>
      <ReelToggle pause={HERO.pause[lang]} play={HERO.play[lang]} />

      <div className="hero__stage">
        <Rail projects={PROJECTS.slice(0, half)} seconds={96} />
        <Rail projects={PROJECTS.slice(half)} seconds={128} reverse />
        <h1 className="hero__name" id="hero-name">
          <span className="hero__first">Canberk</span> <span className="hero__last">Yıldız</span>
          <span className="sr-only">, {HERO.role[lang]}</span>
        </h1>
      </div>

      <div className="hero__foot">
        <p className="hero__line">{HERO.line[lang]}</p>
        <div className="hero__about">
          <p>{HERO.intro[lang]}</p>
          <ul className="hero__status">
            <li>{HERO.roles[lang]}</li>
            <li>{HERO.sites[lang]}</li>
          </ul>
        </div>
        <div className="hero__actions">
          <a className="btn btn--light" href="#work">
            {HERO.work[lang]}
            <ArrowDown size={16} weight="bold" aria-hidden="true" />
          </a>
          <a className="btn btn--line" href={`mailto:${SITE.email}`}>
            {HERO.mail[lang]}
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
