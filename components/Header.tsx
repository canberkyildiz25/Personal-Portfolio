import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { HERO, NAV } from '@/lib/content';
import { FEATURED } from '@/lib/projects';
import { PATHS, SITE, type Lang } from '@/lib/site';

/** Three dark chips that float over whatever is behind them: the name (with
    the project now on stage beside it), a way to write, and the language.
    The chips are solid, so they read the same on the night and on every
    stage colour. There is no row of section links: the page is one scroll,
    and its headings are the way round it. */
export function Header({ lang }: { lang: Lang }) {
  return (
    <header className="bar">
      <a className="chip chip--name" href="#top" aria-label={NAV.home[lang]}>
        <span className="chip__name">{SITE.name}</span>
        {/* Filled in by Motion while a scene holds the middle of the screen. */}
        <span className="chip__cue mono" aria-hidden="true" data-cue>
          <span className="chip__cue-label">{NAV.onStage[lang]}</span>
          <span data-cue-name>{FEATURED[0].name}</span>
        </span>
      </a>
      <a className="chip chip--mail" href={`mailto:${SITE.email}`}>
        {HERO.mail[lang]}
        <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
      </a>
      <nav className="chip chip--lang mono" aria-label={NAV.language[lang]}>
        <a href={PATHS.en} hrefLang="en" lang="en" aria-current={lang === 'en' ? 'true' : undefined} aria-label="English">
          EN
        </a>
        <a href={PATHS.tr} hrefLang="tr" lang="tr" aria-current={lang === 'tr' ? 'true' : undefined} aria-label="Türkçe">
          TR
        </a>
      </nav>
    </header>
  );
}
