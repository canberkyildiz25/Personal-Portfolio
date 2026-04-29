import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import { useNormalizedMousePosition } from '../hooks/useMousePosition';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useLanguage();
  const mouse = useNormalizedMousePosition();

  return (
    <section className="relative py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
      {/* Parallax background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-500/8 blur-3xl"
          style={{ transform: `translate(${mouse.x * -18}px, ${mouse.y * -18}px)`, transition: 'transform 0.6s ease-out' }}
        />
        <div
          className="absolute bottom-[-5%] right-[5%] w-[400px] h-[400px] rounded-full bg-violet-400/10 dark:bg-violet-500/8 blur-3xl"
          style={{ transform: `translate(${mouse.x * 28}px, ${mouse.y * 28}px)`, transition: 'transform 0.4s ease-out' }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[220px] h-[220px] rounded-full bg-purple-400/8 dark:bg-purple-500/6 blur-2xl"
          style={{ transform: `translate(${mouse.x * 42}px, ${mouse.y * 42}px)`, transition: 'transform 0.25s ease-out' }}
        />
        <div
          className="absolute top-[10%] right-[35%] w-[150px] h-[150px] rounded-full bg-indigo-300/8 dark:bg-indigo-400/5 blur-2xl"
          style={{ transform: `translate(${mouse.x * 55}px, ${mouse.y * 55}px)`, transition: 'transform 0.15s ease-out' }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-zinc-800 bg-emerald-50 dark:bg-zinc-900/50 text-xs font-medium text-emerald-700 dark:text-zinc-300 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {t('hero_badge')}
        </motion.div>

        {/* Avatar */}
        <motion.div variants={item} className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full blur opacity-75 animate-pulse" />
            <div className="relative w-32 h-32 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-100 dark:border-zinc-800 shadow-xl hover:scale-110 transition-transform duration-300">
              <Icon icon="solar:user-rounded-bold" className="text-6xl text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-tight"
        >
          <span className="text-zinc-900 dark:text-zinc-100">{t('hero_h1_1')}</span>
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero_h1_2')}
          </span>
          <br className="hidden sm:block" />
          <span className="text-zinc-900 dark:text-zinc-100">{t('hero_h1_3')}</span>
          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            {t('hero_h1_4')}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-normal"
        >
          {t('hero_desc')}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center gap-3">
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
        </motion.div>
      </motion.div>
    </section>
  );
}
