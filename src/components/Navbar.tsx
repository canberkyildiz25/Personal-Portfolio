import { Icon } from '@iconify/react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { langNames, type Lang } from '../i18n/translations';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-all duration-300 hover:bg-white/95 dark:hover:bg-zinc-950/95">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <Icon icon="solar:code-square-bold" className="text-white text-lg" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Full Stack Developer</span>
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300 relative group">
            {t('nav_about')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#stack" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300 relative group">
            {t('nav_stack')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-300 relative group">
            {t('nav_projects')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <Icon icon="solar:global-linear" className="text-sm pointer-events-none" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="appearance-none bg-transparent text-xs font-medium pr-3 cursor-pointer focus:outline-none hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {(Object.keys(langNames) as Lang[]).map((code) => (
                <option key={code} value={code} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                  {langNames[code]}
                </option>
              ))}
            </select>
            <Icon icon="solar:alt-arrow-down-linear" className="text-xs pointer-events-none absolute right-0" />
          </div>
          <ThemeToggle />
          <a
            href="#contact"
            className="text-xs font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
          >
            {t('nav_contact')}
          </a>
        </div>
      </div>
    </nav>
  );
}
