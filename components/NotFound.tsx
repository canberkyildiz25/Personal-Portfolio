'use client';

import { ArrowRight } from '@phosphor-icons/react';
import { useSyncExternalStore } from 'react';
import { NAV, NOT_FOUND } from '@/lib/content';
import { PATHS, SITE, type Lang } from '@/lib/site';

const subscribe = () => () => {};

/** The address that was asked for. Only known in the browser, so the
    prerendered page leaves it empty until it hydrates. */
function RequestedPath() {
  const path = useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => '',
  );
  return <span className="nf__path mono">{path}</span>;
}

function Message({ lang }: { lang: Lang }) {
  return (
    <div className="nf__msg" lang={lang}>
      <p className="nf__title">{NOT_FOUND.title[lang]}</p>
      <p>{NOT_FOUND.body[lang]}</p>
      <a className="btn btn--light" href={PATHS[lang]}>
        {NOT_FOUND.home[lang]}
        <ArrowRight size={16} weight="bold" aria-hidden="true" />
      </a>
    </div>
  );
}

/** One 404 page for the whole site. A static host cannot tell which language
    the missing address belonged to, so the page speaks both. */
export function NotFound() {
  return (
    <>
      <header className="bar">
        <a className="chip chip--name" href={PATHS.en} aria-label={NAV.home.en}>
          <span className="chip__name">{SITE.name}</span>
        </a>
        <nav className="chip chip--lang mono" aria-label={NAV.language.en}>
          <a href={PATHS.en} hrefLang="en" lang="en" aria-label="English">
            EN
          </a>
          <a href={PATHS.tr} hrefLang="tr" lang="tr" aria-label="Türkçe">
            TR
          </a>
        </nav>
      </header>
      <main id="main" className="nf">
        <h1 className="nf__code">404</h1>
        <p className="nf__asked mono">
          {NOT_FOUND.requested.en} · <span lang="tr">{NOT_FOUND.requested.tr}</span> <RequestedPath />
        </p>
        <div className="nf__msgs">
          <Message lang="en" />
          <Message lang="tr" />
        </div>
      </main>
    </>
  );
}
