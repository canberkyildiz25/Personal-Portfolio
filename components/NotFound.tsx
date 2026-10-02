'use client';

import { useSyncExternalStore } from 'react';
import { NAV, NOT_FOUND } from '@/lib/content';
import { PATHS, SITE, type Lang } from '@/lib/site';
import { Arrow, Mark, Stripe } from './Icons';
import { ThemeToggle } from './ThemeToggle';

const subscribe = () => () => {};

/** The address that was asked for. Only known in the browser, so the
    prerendered page leaves the cell empty until it hydrates. */
function RequestedPath() {
  const path = useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
    () => '',
  );
  return <span className="figure-text nf__path">{path}</span>;
}

function Message({ lang }: { lang: Lang }) {
  return (
    <div className="nf__msg" lang={lang}>
      <p className="nf__lede">{NOT_FOUND.title[lang]}</p>
      <p className="nf__body">{NOT_FOUND.body[lang]}</p>
      <a className="btn" href={PATHS[lang]}>
        {NOT_FOUND.home[lang]}
        <Arrow />
      </a>
    </div>
  );
}

/** One 404 page for the whole site. A static host cannot tell which language
    the missing address belonged to, so the page speaks both. */
export function NotFound() {
  return (
    <>
      <header className="site-header">
        <div className="wrap site-header__row">
          <a className="brand" href={PATHS.en} aria-label={NAV.home.en}>
            <Mark />
            {SITE.name}
          </a>
          <div className="header-tools">
            <nav className="lang" aria-label={NAV.language.en}>
              <a href={PATHS.en} hrefLang="en" lang="en" aria-label="English">
                EN
              </a>
              <a href={PATHS.tr} hrefLang="tr" lang="tr" aria-label="Türkçe">
                TR
              </a>
            </nav>
            <ThemeToggle label={NAV.theme.en} />
          </div>
        </div>
      </header>
      <main id="main" className="hero hero--nf wrap">
        <h1>404</h1>
        <Stripe className="hero__stripe" />
        <div className="nf__msgs">
          <Message lang="en" />
          <Message lang="tr" />
        </div>
        <table className="title-block">
          <tbody>
            <tr>
              <th scope="row" className="lettering">
                {NOT_FOUND.requested.en} · <span lang="tr">{NOT_FOUND.requested.tr}</span>
              </th>
              <td>
                <RequestedPath />
              </td>
            </tr>
            <tr>
              <th scope="row" className="lettering">
                {NOT_FOUND.status.en} · <span lang="tr">{NOT_FOUND.status.tr}</span>
              </th>
              <td>
                404. {NOT_FOUND.statusValue.en} · <span lang="tr">{NOT_FOUND.statusValue.tr}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
