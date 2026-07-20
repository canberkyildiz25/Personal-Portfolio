import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/* ── Meta row (mono, technical-document style) ──────────────── */
function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="mono text-[10px] tracking-[0.2em]" style={{ color: 'var(--muted-2)', textTransform: 'none' }}>
        {label.toUpperCase()}
      </span>
      <span className="mono text-[12.5px]" style={{ color: 'var(--text)' }}>{value}</span>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ════════════════════════════════════════════════════════════ */
export default function Hero() {
  const { t } = useLanguage();

  const words = [
    { text: t('hero_h1_1'), accent: false },
    { text: t('hero_h1_2'), accent: true },
    { text: t('hero_h1_3'), accent: false },
    { text: t('hero_h1_4'), accent: true },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] overflow-x-clip">

      {/* ── LEFT — editorial content ──────────────────────── */}
      <div className="flex flex-col justify-center flex-1 px-7 sm:px-10 md:px-14 lg:px-20 py-16 z-10 relative">

        {/* eyebrow — mono, section index + coordinates */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="eyebrow" style={{ textTransform: 'none' }}>// FULL-STACK ENGINEER</span>
          <span className="hidden sm:block h-px w-10" style={{ background: 'var(--line-2)' }} />
          <span className="mono text-[10px] tracking-[0.15em]" style={{ color: 'var(--muted-2)' }}>
            41.0°N · 28.9°E
          </span>
        </motion.div>

        {/* Heading — Bricolage, cyan accents, hairline rule */}
        <h1 className="text-[2.5rem] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[4.1rem] font-extrabold leading-[1.02] mb-7">
          <span className="flex flex-wrap gap-x-3 items-baseline">
            {words.slice(0, 2).map((w, i) => (
              <motion.span key={i}
                className={w.accent ? 'text-gradient-cyan' : ''}
                style={{ color: w.accent ? undefined : 'var(--text)' }}
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease }}>
                {w.text}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap gap-x-3 items-baseline mt-1">
            {words.slice(2).map((w, i) => (
              <motion.span key={i}
                className={w.accent ? 'text-gradient-cyan' : ''}
                style={{ color: w.accent ? undefined : 'var(--text)' }}
                initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.31 + i * 0.08, ease }}>
                {w.text}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Description */}
        <motion.p
          className="text-[15px] sm:text-base max-w-md mb-9 leading-relaxed"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease }}
        >
          {t('hero_desc')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-3 mb-12"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
        >
          <a href="#projects"
            className="group inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 text-[13px] tracking-wide transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#08090C', borderRadius: '2px' }}>
            {t('hero_cta_projects')}
            <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-medium px-7 py-3.5 text-[13px] tracking-wide transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--line-2)', color: 'var(--text)', borderRadius: '2px' }}>
            <Icon icon="solar:code-2-linear" />
            {t('hero_cta_github')}
          </a>
        </motion.div>

        {/* Meta grid — technical-document footer */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6 max-w-lg pt-7"
          style={{ borderTop: '1px solid var(--line)' }}
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
        >
          <Meta label="Based in" value="İstanbul, TR" />
          <Meta label="Role" value="Full-Stack Dev" />
          <Meta label="Degree" value="Bachelor's" />
          <Meta label="Status" value="Available" />
        </motion.div>
      </div>

      {/* ── RIGHT — photo panel ───────────────────────────── */}
      <div className="hidden md:block relative w-[38%] lg:w-[40%] flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
        {/* cyan bloom behind head */}
        <div className="absolute pointer-events-none" style={{
          top: '-6%', left: '8%', right: '8%', height: '62%',
          background: 'radial-gradient(ellipse at 50% 32%, rgba(53,224,240,0.28) 0%, rgba(53,224,240,0.08) 38%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        {/* faint blueprint grid inside panel */}
        <div className="absolute inset-0 blueprint" style={{ opacity: 0.4 }} />

        <motion.img
          src="/avatar.png" alt="Canberk Yıldız"
          className="absolute w-full object-cover object-top"
          style={{ top: '-22%', height: '122%', transform: 'translateZ(0)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease }}
        />
        <div className="absolute inset-0 bg-gradient-to-t pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to top, var(--bg) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right, rgba(8,9,12,0.5), transparent 30%)' }} />

        {/* Name plate */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-24 z-10"
          style={{ backgroundImage: 'linear-gradient(to top, var(--bg) 12%, transparent)' }}
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <div className="w-9 h-[2px] mb-3" style={{ background: 'var(--accent)' }} />
          <h3 className="text-[1.6rem] font-extrabold mb-0.5" style={{ color: 'var(--text)' }}>
            Canberk Yıldız
          </h3>
          <p className="mono text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
            Full-Stack Developer
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer"
              className="transition-colors" style={{ color: 'var(--muted)' }}>
              <Icon icon="solar:code-square-linear" className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/canberk-y/" target="_blank" rel="noopener noreferrer"
              className="transition-colors" style={{ color: 'var(--muted)' }}>
              <Icon icon="solar:link-linear" className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── SIDE STRIP — cyan hairline ─────────────────────── */}
      <div className="hidden md:block w-px flex-shrink-0 self-stretch z-10" style={{ background: 'var(--accent)', opacity: 0.5 }} />
    </section>
  );
}
