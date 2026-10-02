import { NAV } from '@/lib/content';
import { PATHS, SITE, type Lang } from '@/lib/site';
import { Mark } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export function Header({ lang }: { lang: Lang }) {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <a className="brand" href="#top" aria-label={NAV.home[lang]}>
          <Mark />
          {SITE.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#work">{NAV.work[lang]}</a>
          <a href="#parts">{NAV.parts[lang]}</a>
          <a href="#background">{NAV.path[lang]}</a>
          <a href="#contact">{NAV.contact[lang]}</a>
        </nav>
        <div className="header-tools">
          <nav className="lang" aria-label={NAV.language[lang]}>
            <a href={PATHS.en} hrefLang="en" lang="en" aria-current={lang === 'en' ? 'true' : undefined} aria-label="English">
              EN
            </a>
            <a href={PATHS.tr} hrefLang="tr" lang="tr" aria-current={lang === 'tr' ? 'true' : undefined} aria-label="Türkçe">
              TR
            </a>
          </nav>
          <ThemeToggle label={NAV.theme[lang]} />
        </div>
      </div>
    </header>
  );
}
