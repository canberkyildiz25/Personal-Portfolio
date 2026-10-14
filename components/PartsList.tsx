/* eslint-disable @next/next/no-img-element -- static export: pre-sized WebP files */
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { PARTS } from '@/lib/content';
import { FEATURED, PROJECTS } from '@/lib/projects';
import type { Lang } from '@/lib/site';

const staged = new Set(FEATURED.map((p) => p.id));

/** All nineteen, as a wall of captures. The projects that had a scene above
    carry their stage colour along the top edge of the picture. */
export function PartsList({ lang }: { lang: Lang }) {
  return (
    <section className="index" id="parts" aria-labelledby="parts-h">
      <div className="wrap">
        <div className="index__head" data-reveal>
          <h2 id="parts-h">{PARTS.h2[lang]}</h2>
          <p>{PARTS.sub[lang]}</p>
        </div>
        <ol className="index__grid">
          {PROJECTS.map((p) => (
            <li className="work" key={p.id} data-tone={staged.has(p.id) ? p.id : undefined}>
              <div className="work__shot">
                <img src={`/work/${p.id}-560.webp`} width={560} height={350} alt="" loading="lazy" decoding="async" />
              </div>
              <h3 className="work__name">{p.name}</h3>
              <p className="work__kind mono">
                {p.kind[lang]} · {p.started} · rev {p.rev}
              </p>
              <p className="work__blurb">{p.blurb[lang]}</p>
              <p className="work__stack">{p.stack.slice(0, 4).join(', ')}</p>
              <p className="work__links">
                <a className="link" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${PARTS.live[lang]}`}>
                  {PARTS.live[lang]}
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                </a>
                {p.code ? (
                  <a className="link" href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${PARTS.code[lang]}`}>
                    {PARTS.code[lang]}
                    <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
