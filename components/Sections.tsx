import { ArrowUp, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { CHECK_ROWS, CONTACT, FACTS, HIRE, HIRE_STEPS, PATH, PATH_BEFORE, PATH_SOFTWARE, type PathRow } from '@/lib/content';
import { SITE, type Lang } from '@/lib/site';

function Timeline({ title, rows, lang, now = false }: { title: string; rows: PathRow[]; lang: Lang; now?: boolean }) {
  return (
    <div className={now ? 'line line--now' : 'line'} data-reveal>
      <h3 className="line__title mono">{title}</h3>
      <ol>
        {rows.map((row) => (
          <li key={row.date.en + row.text.en.slice(0, 12)}>
            <span className="line__date mono">{row.date[lang]}</span>
            <p>{row.text[lang]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Background({ lang }: { lang: Lang }) {
  return (
    <section className="past" id="background" aria-labelledby="background-h">
      <div className="wrap past__grid">
        <div className="past__lead" data-reveal>
          <h2 id="background-h">{PATH.h2[lang]}</h2>
          <p>{PATH.intro[lang]}</p>
          <dl className="past__facts">
            {FACTS.map((fact) => (
              <div key={fact.label.en}>
                <dt className="mono">{fact.label[lang]}</dt>
                <dd>{fact.value[lang]}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="past__lines">
          <Timeline title={PATH.before[lang]} rows={PATH_BEFORE} lang={lang} />
          <Timeline title={PATH.software[lang]} rows={PATH_SOFTWARE} lang={lang} now />
        </div>
      </div>
    </section>
  );
}

export function Hire({ lang }: { lang: Lang }) {
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(HIRE.subject[lang])}`;

  return (
    <section className="hire" id="hire" aria-labelledby="hire-h">
      <div className="wrap">
        <div className="hire__grid">
          <div className="hire__lead" data-reveal>
            <h2 id="hire-h">{HIRE.h2[lang]}</h2>
            <p>{HIRE.intro[lang]}</p>
            <a className="btn btn--ink" href={mail}>
              {HIRE.cta[lang]}
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>
          <ol className="hire__steps" data-reveal>
            {HIRE_STEPS.map((step, i) => (
              <li key={step.title.en}>
                <span className="hire__no" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title[lang]}</h3>
                <p>{step.text[lang]}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="checks" data-reveal>
          <div className="checks__lead">
            <h3>{HIRE.checksH[lang]}</h3>
            <p>{HIRE.checksIntro[lang]}</p>
          </div>
          <ul className="checks__list">
            {CHECK_ROWS.map((row) => (
              <li key={row.check.en}>
                <strong>{row.check[lang]}</strong>
                <span>{row.method[lang]}</span>
                <span className="checks__ok">{row.accept[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="hire__self" data-reveal>
          {HIRE.self[lang]}{' '}
          <a className="link link--ink" href="https://rainbowdesign.com.tr" target="_blank" rel="noopener noreferrer">
            rainbowdesign.com.tr
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  return (
    <footer className="close" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h" data-reveal>
          {CONTACT.h2[lang]}
        </h2>
        <a className="close__mail" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        <ul className="close__links">
          <li>
            <span className="mono">{CONTACT.github[lang]}</span>
            <a className="link" href={SITE.github} target="_blank" rel="noopener noreferrer me">
              {SITE.githubHandle}
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </li>
          <li>
            <span className="mono">{CONTACT.linkedin[lang]}</span>
            <a className="link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer me">
              {SITE.linkedinHandle}
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <div className="close__colophon">
          <span>© 2026 {SITE.name}</span>
          <span>{CONTACT.set[lang]}</span>
          <a className="link" href={SITE.repo} target="_blank" rel="noopener noreferrer">
            {CONTACT.source[lang]}
          </a>
          <a className="link" href="#top">
            {CONTACT.top[lang]}
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
