import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const calc = (x: number, y: number) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouse({ x: (x - cx) / cx, y: (y - cy) / cy });
    };
    const move = (e: MouseEvent) => calc(e.clientX, e.clientY);
    const touch = (e: TouchEvent) => {
      if (e.touches[0]) calc(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', touch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', touch);
    };
  }, []);

  return (
    <section className="relative py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Parallax background orbs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Orb 1 — far back, moves slow */}
        <div
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-500/8 blur-3xl"
          style={{
            transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
        {/* Orb 2 — mid layer */}
        <div
          className="absolute bottom-[-5%] right-[5%] w-[400px] h-[400px] rounded-full bg-violet-400/10 dark:bg-violet-500/8 blur-3xl"
          style={{
            transform: `translate(${mouse.x * 28}px, ${mouse.y * 28}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />
        {/* Orb 3 — close, moves fast */}
        <div
          className="absolute top-[30%] right-[20%] w-[220px] h-[220px] rounded-full bg-purple-400/8 dark:bg-purple-500/6 blur-2xl"
          style={{
            transform: `translate(${mouse.x * 42}px, ${mouse.y * 42}px)`,
            transition: 'transform 0.25s ease-out',
          }}
        />
        {/* Orb 4 — accent close */}
        <div
          className="absolute top-[10%] right-[35%] w-[150px] h-[150px] rounded-full bg-indigo-300/8 dark:bg-indigo-400/5 blur-2xl"
          style={{
            transform: `translate(${mouse.x * 55}px, ${mouse.y * 55}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        />
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-zinc-800 bg-emerald-50 dark:bg-zinc-900/50 text-xs font-medium text-emerald-700 dark:text-zinc-300 mb-6 animate-fade-in" style={{'--delay': '0ms'} as React.CSSProperties}>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {t('hero_badge')}
      </div>

      {/* Avatar Circle */}
      <div className="mb-8 animate-fade-in" style={{'--delay': '100ms'} as React.CSSProperties}>
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="relative w-32 h-32 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-100 dark:border-zinc-800 shadow-xl hover:scale-110 transition-transform duration-300">
            <Icon icon="solar:user-rounded-bold" className="text-6xl text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-tight animate-fade-in" style={{'--delay': '200ms'} as React.CSSProperties}>
        <span className="text-zinc-900 dark:text-zinc-100">{t('hero_h1_1')}</span>
        <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          {t('hero_h1_2')}
        </span>
        <br className="hidden sm:block" />
        <span className="text-zinc-900 dark:text-zinc-100">{t('hero_h1_3')}</span>
        <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
          {t('hero_h1_4')}
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-normal animate-fade-in" style={{'--delay': '300ms'} as React.CSSProperties}>
        {t('hero_desc')}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{'--delay': '400ms'} as React.CSSProperties}>
        <a
          href="#projects"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 shadow-lg shadow-indigo-500/20 group hover:scale-105"
        >
          {t('hero_cta_projects')}
          <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://github.com/canberkyildiz25"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all duration-300 group hover:scale-105"
        >
          <Icon icon="solar:code-square-linear" />
          {t('hero_cta_github')}
        </a>
      </div>
    </section>
  );
}
