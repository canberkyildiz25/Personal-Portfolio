import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

/* ── Skill bars (Mr.Bande) ──────────────────────────────────── */
const skillCols = [
  {
    title: 'Frontend',
    color: 'from-rose-500 to-pink-400',
    skills: [
      { name: 'React / Next.js', pct: 95 },
      { name: 'TypeScript', pct: 88 },
      { name: 'Tailwind CSS', pct: 92 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'Node.js / Express', pct: 82 },
      { name: 'MongoDB', pct: 78 },
      { name: 'PostgreSQL', pct: 75 },
    ],
  },
];

/* ── Animated skill bar ─────────────────────────────────────── */
function SkillBar({
  name, pct, color, delay,
}: { name: string; pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex justify-between text-[11px] mb-1.5">
        <span className="text-zinc-400">{name}</span>
        <span className="text-zinc-300 font-semibold tabular-nums">{pct}%</span>
      </div>
      <div className="h-[3px] bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ── Floating tech icon ─────────────────────────────────────── */
function FloatingIcon({
  icon, className, delay = 0, duration = 5,
}: { icon: string; className?: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      className={`absolute pointer-events-none z-20 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.3 },
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl"
        style={{
          background: 'rgba(20,20,32,0.85)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Icon icon={icon} className="text-2xl" />
      </div>
    </motion.div>
  );
}

/* ── Info chip ──────────────────────────────────────────────── */
function InfoChip({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <Icon icon={icon} className="text-rose-500 text-sm flex-shrink-0" />
      <span className="text-zinc-500">{label}:</span>
      <span className="text-zinc-300 font-medium">{value}</span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
export default function Hero() {
  const { t } = useLanguage();
  const [, setMouse] = useState({ x: 0, y: 0 });

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

  /* Heading word animation */
  const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
    }),
  };

  return (
    <section className="relative flex min-h-[calc(100vh-68px)] overflow-x-clip">

      {/* ── LEFT — text content ───────────────────────────── */}
      <div className="flex flex-col justify-center flex-1 px-7 sm:px-10 md:px-14 lg:px-20 py-14 z-10 relative">

        {/* Floating tech icons — CodeCrafted style */}
        <FloatingIcon icon="logos:react" className="top-10 right-4 opacity-60" delay={0.8} duration={4.5} />
        <FloatingIcon icon="logos:typescript-icon" className="top-32 right-16 opacity-50" delay={1.2} duration={5.5} />
        <FloatingIcon icon="logos:nextjs-icon" className="bottom-40 right-8 opacity-40" delay={1.6} duration={6} />

        {/* ── Heading — Nikki border + CodeCrafted bold words ── */}
        <div className="border-l-[5px] border-rose-600 pl-6 mb-6">
          <h1
            className="text-[2.4rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[4rem] font-black tracking-tight leading-[1.05]"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {/* Line 1 */}
            <span className="flex flex-wrap gap-x-3 items-baseline">
              {[
                { text: t('hero_h1_1'), style: 'text-white' },
                { text: t('hero_h1_2'), style: 'text-gradient-rose-violet' },
              ].map((w, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={headingVariants}
                  initial="hidden"
                  animate="visible"
                  className={w.style}
                >
                  {w.text}
                </motion.span>
              ))}
            </span>
            {/* Line 2 */}
            <span className="flex flex-wrap gap-x-3 items-baseline mt-1">
              {[
                { text: t('hero_h1_3'), style: 'text-white' },
                { text: t('hero_h1_4'), style: 'text-gradient-violet' },
              ].map((w, i) => (
                <motion.span
                  key={i}
                  custom={i + 2}
                  variants={headingVariants}
                  initial="hidden"
                  animate="visible"
                  className={w.style}
                >
                  {w.text}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base text-zinc-400 max-w-md mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {t('hero_desc')}
        </motion.p>

        {/* ── Info strip — Mr.Bande style ── */}
        <motion.div
          className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <InfoChip icon="solar:map-point-linear" label="City" value="Istanbul, TR" />
          <InfoChip icon="solar:user-id-linear" label="Role" value="Full Stack Developer" />
          <InfoChip icon="solar:diploma-linear" label="Degree" value="Bachelor's" />
          <InfoChip icon="solar:check-circle-linear" label="Status" value="Available" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-600/25"
            style={{
              background: 'linear-gradient(135deg, #e11d48, #f43f5e)',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            {t('hero_cta_projects')}
            <Icon icon="solar:arrow-right-bold" />
          </a>
          <a
            href="https://github.com/canberkyildiz25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700/80 text-zinc-300 hover:border-violet-500/60 hover:text-violet-300 font-medium px-8 py-3.5 rounded-full text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/10"
          >
            <Icon icon="solar:brand-github-linear" />
            {t('hero_cta_github')}
          </a>
        </motion.div>

        {/* ── Skill bars — Mr.Bande style ── */}
        <motion.div
          className="grid grid-cols-2 gap-x-8 gap-y-1 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {skillCols.map((col) => (
            <div
              key={col.title}
              className="p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: col.title === 'Frontend' ? '#f43f5e' : '#a855f7' }}
              >
                {col.title}
              </p>
              {col.skills.map((s, i) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  color={col.color}
                  delay={0.9 + i * 0.12}
                />
              ))}
            </div>
          ))}
        </motion.div>

        {/* "Let's work together" */}
        <motion.p
          className="mt-8 text-zinc-500 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Let&apos;s{' '}
          <span className="text-rose-500 font-semibold">work</span>{' '}
          together!
        </motion.p>
      </div>

      {/* ── RIGHT — photo panel (Nikki) ─────────────────── */}
      <div className="hidden md:block relative w-[38%] lg:w-[40%] flex-shrink-0 overflow-hidden">

        {/* Dark base */}
        <div className="absolute inset-0 bg-[#08080d]" />

        {/* Background glow behind head */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-5%',
            left: '10%',
            right: '10%',
            height: '60%',
            background: 'radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.35) 0%, rgba(217,70,239,0.15) 35%, transparent 70%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Photo */}
        <motion.img
          src="/avatar.png"
          alt="Canberk Yıldız"
          className="absolute w-full object-cover object-top"
          style={{
            top: '-22%',
            height: '122%',
            transform: 'translateZ(0)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Bottom dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080d] via-[#08080d]/30 to-transparent pointer-events-none" />


        {/* Left-edge dark vignette (blends into hero text area) */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a0a0f]/40 via-transparent to-transparent" />

        {/* Name card — Nikki style */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 px-8 pb-8 pt-20 z-10 bg-gradient-to-t from-[#08080d] via-[#08080d]/85 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-10 h-[3px] bg-rose-600 mb-3" />
          <h3
            className="text-2xl font-black text-white mb-1"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Canberk Yıldız
          </h3>
          <p className="text-rose-400 font-semibold text-sm mb-4">Full Stack Developer</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/canberkyildiz25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Icon icon="solar:brand-github-linear" className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/canberk-y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-rose-400 transition-colors"
            >
              <Icon icon="solar:brand-linkedin-linear" className="text-xl" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── SIDE STRIP — thin rose line ──────────────── */}
      <div className="hidden md:block w-[5px] bg-rose-600 flex-shrink-0 self-stretch z-10" />

    </section>
  );
}
