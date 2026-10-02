'use client';
/* eslint-disable @next/next/no-img-element -- static export, pre-sized WebP */

import { useState } from 'react';
import { PARTS } from '@/lib/content';
import { PROJECTS } from '@/lib/projects';
import type { Lang } from '@/lib/site';
import { Arrow } from './Icons';

const host = (url: string) => new URL(url).host.replace(/^www\./, '');

/** Every project as one table. On wide screens the row under the pointer (or
    holding keyboard focus) shows its screenshot in the panel beside the table;
    an image is only requested once its row has been visited. */
export function PartsList({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(PROJECTS[0].id);
  const [seen, setSeen] = useState<string[]>([PROJECTS[0].id]);

  const visit = (id: string) => {
    setActive(id);
    setSeen((ids) => (ids.includes(id) ? ids : [...ids, id]));
  };

  const current = PROJECTS.find((p) => p.id === active)!;

  return (
    <div className="parts">
      <div>
        <table className="parts-table">
          <thead>
            <tr className="lettering">
              <th scope="col" className="c-no">
                {PARTS.no[lang]}
              </th>
              <th scope="col" className="c-thumb">
                <span className="sr-only">{PARTS.preview[lang]}</span>
              </th>
              <th scope="col">{PARTS.project[lang]}</th>
              <th scope="col" className="c-stack">
                {PARTS.stack[lang]}
              </th>
              <th scope="col">{PARTS.started[lang]}</th>
              <th scope="col">{PARTS.rev[lang]}</th>
              <th scope="col">{PARTS.links[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p, i) => (
              <tr key={p.id} data-active={p.id === active} onMouseEnter={() => visit(p.id)} onFocus={() => visit(p.id)}>
                <td className="c-no figure-text">{String(i + 1).padStart(2, '0')}</td>
                <td className="c-thumb">
                  <img src={`/work/${p.id}-560.webp`} width={560} height={350} alt="" loading="lazy" decoding="async" />
                </td>
                <td className="c-name">
                  <strong>{p.name}</strong>
                  <span>{p.blurb[lang]}</span>
                </td>
                <td className="c-stack">{p.stack.slice(0, 4).join(', ')}</td>
                <td className="c-date figure-text">{p.started}</td>
                <td className="c-rev figure-text">{p.rev === 'B' ? <span className="rev-chip">B</span> : p.rev}</td>
                <td className="c-links">
                  <a className="link" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${PARTS.live[lang]}`}>
                    {PARTS.live[lang]}&nbsp;
                    <Arrow />
                  </a>
                  {p.code ? (
                    <a className="link" href={p.code} target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: ${PARTS.code[lang]}`}>
                      {PARTS.code[lang]}&nbsp;
                      <Arrow />
                    </a>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="parts__legend">{PARTS.legend[lang]}</p>
      </div>

      <figure className="parts__preview" aria-hidden="true">
        <div className="parts__frame">
          {PROJECTS.filter((p) => seen.includes(p.id)).map((p) => (
            <img
              key={p.id}
              src={`/work/${p.id}-1120.webp`}
              width={1120}
              height={700}
              alt=""
              data-active={p.id === active}
              decoding="async"
            />
          ))}
        </div>
        <figcaption className="parts__caption lettering">
          <span>{current.name}</span>
          <span>{host(current.live)}</span>
        </figcaption>
      </figure>
    </div>
  );
}
