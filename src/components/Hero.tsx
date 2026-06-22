import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

const sideIcons = [
  { icon: 'solar:user-rounded-linear', href: '#about' },
  { icon: 'solar:folder-2-linear', href: '#projects' },
  { icon: 'solar:letter-linear', href: '#contact' },
];

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
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="relative flex min-h-screen overflow-x-clip pt-16">

      {/* ── LEFT — text ── */}
      <div className="flex flex-col justify-center flex-1 px-8 sm:px-12 md:px-16 lg:px-24 py-16 z-10">

        {/* Heading — thick rose left border like Nikki */}
        <div className="border-l-[5px] border-rose-600 pl-6 mb-8">
          <h1
            className="text-4xl sm:text-5xl md:text-[3.2rem] lg:text-[3.8rem] font-black tracking-tight leading-[1.08] text-white"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            <span className="text-zinc-100">{t('hero_h1_1')}</span>
            <span className="text-rose-500">{t('hero_h1_2')}</span>
            <br className="hidden sm:block" />
            <span className="text-zinc-100">{t('hero_h1_3')}</span>
            <span className="text-rose-500">{t('hero_h1_4')}</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-zinc-400 max-w-lg mb-12 leading-relaxed">
          {t('hero_desc')}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold px-9 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-600/30"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('hero_cta_projects')}
            <Icon icon="solar:arrow-right-bold" />
          </a>
          <a
            href="https://github.com/canberkyildiz25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white font-medium px-9 py-4 rounded-full text-base transition-all hover:-translate-y-0.5"
          >
            <Icon icon="solar:brand-github-linear" />
            {t('hero_cta_github')}
          </a>
        </div>

        {/* "Let's work together" */}
        <p className="text-zinc-500 text-sm font-medium">
          Let&apos;s <span className="text-rose-500 font-semibold">work</span> together!
        </p>
      </div>

      {/* ── RIGHT — photo panel ── */}
      <div className="hidden md:block relative w-[40%] flex-shrink-0 overflow-hidden">

        {/* Dark base */}
        <div className="absolute inset-0 bg-[#0c0c10]" />

        {/* Photo */}
        <img
          src="/avatar.png"
          alt="Canberk Yıldız"
          className="absolute left-1/2 w-full"
          style={{
            top: '-18%',
            transform: 'translateX(-50%)',
            filter: 'brightness(0.97) contrast(1.08) saturate(1.05)',
          }}
        />

        {/* Bottom dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent pointer-events-none" />

        {/* ✦ Pembe/magenta ışık — soldan yüze vuruyor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at -10% 42%, rgba(244,63,94,0.60) 0%, rgba(236,72,153,0.28) 28%, transparent 60%)',
          }}
        />

        {/* Parallax micro-glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at -15% 38%, rgba(251,113,133,0.22) 0%, transparent 50%)',
            transform: `translate(${mouse.x * 14}px, ${mouse.y * 10}px)`,
            transition: 'transform 0.9s ease-out',
          }}
        />

        {/* Right-edge dark vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-[#0a0a0c]/50 via-transparent to-transparent" />

        {/* Name / title block */}
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-24 z-10 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent">
          <div className="w-10 h-[3px] bg-rose-600 mb-3" />
          <h3
            className="text-2xl font-black text-white mb-1"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Canberk Yıldız
          </h3>
          <p className="text-rose-500 font-semibold text-sm mb-4">Full Stack Developer</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Icon icon="solar:brand-github-linear" className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/canberk-y/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-rose-500 transition-colors">
              <Icon icon="solar:brand-linkedin-linear" className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* ── SIDE STRIP — Nikki's pink vertical bar ── */}
      <div className="hidden md:flex w-14 bg-rose-600 flex-shrink-0 flex-col items-center py-8 z-10">
        <a href="#about" className="text-black hover:text-black/70 transition-colors mb-auto">
          <Icon icon="solar:arrow-down-bold" className="text-2xl" />
        </a>
        <div className="flex flex-col items-center gap-7 mb-auto">
          {sideIcons.map((item) => (
            <a key={item.href} href={item.href} className="text-black hover:text-black/70 transition-colors">
              <Icon icon={item.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
