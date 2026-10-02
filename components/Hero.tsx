import type { CSSProperties } from 'react';
import { HERO, TITLE_BLOCK } from '@/lib/content';
import { SITE, type Lang } from '@/lib/site';
import { Arrow, Stripe } from './Icons';

export function Hero({ lang }: { lang: Lang }) {
  const words = HERO.h1[lang].split(' ');

  return (
    <section className="hero wrap" id="top">
      <h1>
        {words.map((word, i) => (
          <span key={i}>
            <span className="w" style={{ '--i': i } as CSSProperties}>
              {word}
            </span>
            {i < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </h1>
      <Stripe className="hero__stripe" />
      <div className="hero__grid">
        <div>
          <p className="hero__intro">{HERO.intro[lang]}</p>
          <div className="hero__actions">
            <a className="btn" href="#work">
              {HERO.work[lang]}
              <Arrow down />
            </a>
            <a className="btn btn--plain" href={`mailto:${SITE.email}`}>
              {HERO.mail[lang]}
              <Arrow />
            </a>
          </div>
        </div>
        <table className="title-block">
          <caption className="lettering">{HERO.blockCaption[lang]}</caption>
          <tbody>
            {TITLE_BLOCK.map((row) => (
              <tr key={row.label.en}>
                <th scope="row" className="lettering">
                  {row.label[lang]}
                </th>
                <td>{row.value[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
