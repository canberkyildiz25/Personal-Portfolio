import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { langNames, type Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

const navLinks: { key: TranslationKey; href: string }[] = [
  { key: 'nav_about', href: '#about' },
  { key: 'nav_stack', href: '#stack' },
  { key: 'nav_projects', href: '#projects' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 shadow-sm shadow-zinc-200/50 dark:shadow-zinc-900/50'
          : 'border-transparent bg-white/60 dark:bg-zinc-950/60'
      } backdrop-blur-md`}
    >
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-110 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <span className="text-white text-xs font-bold tracking-tight select-none">CY</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
              Canberk Yıldız
            </span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium tracking-wide mt-0.5">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {navLinks.map(({ key, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={key}
                href={href}
                className={`relative group transition-colors duration-300 ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-50'
                    : 'hover:text-zinc-900 dark:hover:text-zinc-50'
                }`}
              >
                {t(key)}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language picker */}
          <div className="relative flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <Icon icon="solar:global-linear" className="text-sm pointer-events-none" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="appearance-none bg-transparent text-xs font-medium pr-3 cursor-pointer focus:outline-none hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {(Object.keys(langNames) as Lang[]).map((code) => (
                <option
                  key={code}
                  value={code}
                  className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                >
                  {langNames[code]}
                </option>
              ))}
            </select>
            <Icon
              icon="solar:alt-arrow-down-linear"
              className="text-xs pointer-events-none absolute right-0"
            />
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:block text-xs font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
          >
            {t('nav_contact')}
          </a>

          {/* Hamburger button */}
          <button
            className="sm:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-zinc-700 dark:bg-zinc-300 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? 'max-h-72 border-t border-zinc-200 dark:border-zinc-800'
            : 'max-h-0'
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1 bg-white/95 dark:bg-zinc-950/95">
          {navLinks.map(({ key, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50'
                }`}
              >
                {t(key)}
              </a>
            );
          })}
          <div className="mt-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center text-xs font-medium bg-indigo-600 text-white px-4 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
            >
              {t('nav_contact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
