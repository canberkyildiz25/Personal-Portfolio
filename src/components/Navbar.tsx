import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { langNames, type Lang } from '../i18n/translations';

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10,10,15,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 h-[68px] flex items-center justify-between">

        {/* Brand — Nikki's pink square "C" */}
        <a href="#" className="group flex-shrink-0">
          <div
            className="w-11 h-11 bg-rose-600 flex items-center justify-center text-black font-black text-xl leading-none select-none group-hover:bg-rose-500 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            C
          </div>
        </a>

        {/* Center nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold" style={{ fontFamily: "'Barlow', sans-serif" }}>
          <a href="#" className="text-rose-400 hover:text-rose-300 transition-colors tracking-wide">
            {t('nav_about')}
          </a>
          <a href="#stack" className="text-zinc-400 hover:text-white transition-colors tracking-wide">
            {t('nav_stack')}
          </a>
          <a href="#projects" className="text-zinc-400 hover:text-white transition-colors tracking-wide">
            {t('nav_projects')}
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language picker */}
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

          {/* Contact button — CodeCrafted style */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <Icon icon="solar:letter-linear" className="text-sm" />
            {t('nav_contact')}
          </a>
        </div>
      </div>
    </nav>
  );
}
