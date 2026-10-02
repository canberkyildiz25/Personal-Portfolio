import { CHECKS, CHECK_ROWS, CONTACT, PARTS, PATH, PATH_BEFORE, PATH_SOFTWARE, type PathRow } from '@/lib/content';
import { SITE, type Lang } from '@/lib/site';
import { Arrow, Stripe } from './Icons';
import { PartsList } from './PartsList';

export function Parts({ lang }: { lang: Lang }) {
  return (
    <section className="section" id="parts" aria-labelledby="parts-h">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <h2 id="parts-h">{PARTS.h2[lang]}</h2>
          <p>{PARTS.sub[lang]}</p>
        </div>
        <PartsList lang={lang} />
      </div>
    </section>
  );
}

function RevTable({ caption, pen, rows, lang }: { caption: string; pen: 'orange' | 'teal'; rows: PathRow[]; lang: Lang }) {
  return (
    <table className="rev-table" data-reveal>
      <caption>
        <span className="tag" data-pen={pen}>
          {caption}
        </span>
      </caption>
      <thead>
        <tr className="lettering">
          <th scope="col">{PATH.date[lang]}</th>
          <th scope="col">{PATH.change[lang]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.date.en + row.text.en.slice(0, 12)}>
            <th scope="row" className="figure-text">
              {row.date[lang]}
            </th>
            <td>{row.text[lang]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Background({ lang }: { lang: Lang }) {
  return (
    <section className="section" id="background" aria-labelledby="background-h">
      <div className="wrap split">
        <div className="split__lead" data-reveal>
          <h2 id="background-h">{PATH.h2[lang]}</h2>
          <p>{PATH.intro[lang]}</p>
        </div>
        <div>
          <RevTable caption={PATH.before[lang]} pen="orange" rows={PATH_BEFORE} lang={lang} />
          <RevTable caption={PATH.software[lang]} pen="teal" rows={PATH_SOFTWARE} lang={lang} />
        </div>
      </div>
    </section>
  );
}

export function Checklist({ lang }: { lang: Lang }) {
  return (
    <section className="section section--band" id="checks" aria-labelledby="checks-h">
      <div className="wrap split">
        <div className="split__lead" data-reveal>
          <h2 id="checks-h">{CHECKS.h2[lang]}</h2>
          <p>{CHECKS.intro[lang]}</p>
        </div>
        <table className="check-table" data-reveal>
          <thead>
            <tr className="lettering">
              <th scope="col">{CHECKS.check[lang]}</th>
              <th scope="col">{CHECKS.method[lang]}</th>
              <th scope="col">{CHECKS.accept[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {CHECK_ROWS.map((row) => (
              <tr key={row.check.en}>
                <th scope="row">{row.check[lang]}</th>
                <td>{row.method[lang]}</td>
                <td>{row.accept[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap" data-reveal>
        <h2 id="contact-h">{CONTACT.h2[lang]}</h2>
        <a className="contact__mail" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        <dl className="contact__list">
          <div>
            <dt className="lettering">{CONTACT.github[lang]}</dt>
            <dd>
              <a className="link" href={SITE.github} target="_blank" rel="noopener noreferrer me">
                {SITE.githubHandle}&nbsp;
                <Arrow />
              </a>
            </dd>
          </div>
          <div>
            <dt className="lettering">{CONTACT.linkedin[lang]}</dt>
            <dd>
              <a className="link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer me">
                {SITE.linkedinHandle}&nbsp;
                <Arrow />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="site-footer">
      <Stripe />
      <div className="wrap site-footer__row">
        <span>© 2026 {SITE.name}</span>
        <span>{CONTACT.set[lang]}</span>
        <a className="link" href={SITE.repo} target="_blank" rel="noopener noreferrer">
          {CONTACT.source[lang]}
        </a>
      </div>
    </footer>
  );
}
