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
        background: scrolled ? 'rgba(8,9,12,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      }}
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 h-[64px] flex items-center justify-between">

        {/* Brand — cyan mark */}
        <a href="#" className="group flex-shrink-0 flex items-center gap-2.5">
          <div
            className="w-9 h-9 flex items-center justify-center font-extrabold text-[15px] leading-none select-none transition-all duration-300 group-hover:scale-105"
            style={{ background: 'var(--accent)', color: '#08090C', borderRadius: '3px', fontFamily: 'var(--display)' }}
          >
            C
          </div>
          <span className="mono text-[11px] tracking-[0.2em] uppercase hidden sm:block" style={{ color: 'var(--muted)' }}>
            canberk.dev
          </span>
        </a>

        {/* Center nav */}
        <div className="hidden sm:flex items-center gap-9 text-[13px] font-medium mono">
          <a href="#about" className="transition-colors tracking-wide" style={{ color: 'var(--accent)' }}>
            {t('nav_about')}
          </a>
          <a href="#stack" className="transition-colors tracking-wide hover:opacity-100" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            {t('nav_stack')}
          </a>
          <a href="#projects" className="transition-colors tracking-wide" style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            {t('nav_projects')}
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center gap-1 transition-colors cursor-pointer" style={{ color: 'var(--muted-2)' }}>
            <Icon icon="solar:global-linear" className="text-sm pointer-events-none" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="mono appearance-none bg-transparent text-[11px] font-medium pr-3 cursor-pointer focus:outline-none"
            >
              {(Object.keys(langNames) as Lang[]).map((code) => (
                <option key={code} value={code} style={{ background: '#12151C', color: '#E9EEF3' }}>
                  {langNames[code]}
                </option>
              ))}
            </select>
            <Icon icon="solar:alt-arrow-down-linear" className="text-xs pointer-events-none absolute right-1" />
          </div>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-[11px] font-semibold tracking-wide mono uppercase transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#08090C', borderRadius: '2px' }}
          >
            <Icon icon="solar:letter-linear" className="text-sm" />
            {t('nav_contact')}
          </a>
        </div>
      </div>
    </nav>
  );
}
