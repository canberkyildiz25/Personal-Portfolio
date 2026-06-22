import { Icon } from '@iconify/react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { langNames, type Lang } from '../i18n/translations';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="px-8 sm:px-12 md:px-16 lg:px-24 h-16 flex items-center justify-between">

        {/* Brand — pink square like Nikki's "N" */}
        <a href="#" className="group flex-shrink-0">
          <div
            className="w-12 h-12 bg-rose-600 flex items-center justify-center text-black font-black text-2xl leading-none select-none group-hover:bg-rose-500 transition-colors"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            C
          </div>
        </a>

        {/* Center nav — Nikki style */}
        <div className="hidden sm:flex items-center gap-10 text-sm font-semibold" style={{ fontFamily: "'Barlow', sans-serif" }}>
          <a href="#" className="text-rose-500 hover:text-rose-400 transition-colors tracking-wide">
            {t('nav_about')}
          </a>
          <a href="#stack" className="text-zinc-300 hover:text-white transition-colors tracking-wide">
            {t('nav_stack')}
          </a>
          <a href="#projects" className="text-zinc-300 hover:text-white transition-colors tracking-wide">
            {t('nav_projects')}
          </a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors tracking-wide">
            {t('nav_contact')}
          </a>
        </div>

        {/* Right — lang + theme only, minimal */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
            <Icon icon="solar:global-linear" className="text-sm pointer-events-none" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="appearance-none bg-transparent text-xs font-medium pr-3 cursor-pointer focus:outline-none transition-colors"
            >
              {(Object.keys(langNames) as Lang[]).map((code) => (
                <option key={code} value={code} className="bg-zinc-900 text-zinc-100">
                  {langNames[code]}
                </option>
              ))}
            </select>
            <Icon icon="solar:alt-arrow-down-linear" className="text-xs pointer-events-none absolute right-1" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
