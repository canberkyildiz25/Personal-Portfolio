import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const projects: {
  title: string;
  descKey: TranslationKey;
  tags: string[];
  gradient: string;
  hoverColor: string;
  icon: string;
  liveUrl: string;
  githubUrl: string;
}[] = [
  {
    title: 'Fornace',
    descKey: 'project_fornace',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-orange-400',
    hoverColor: 'group-hover:text-orange-400',
    icon: 'solar:fire-linear',
    liveUrl: 'https://fornace-next.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/fornace-next',
  },
  {
    title: 'Apex Engineering',
    descKey: 'project_apex_engineering',
    tags: ['React 18', 'Three.js', 'React Three Fiber', 'React Three Drei', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    gradient: 'from-sky-400',
    hoverColor: 'group-hover:text-sky-400',
    icon: 'solar:3d-square-linear',
    liveUrl: 'https://apex-engineering-two.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/apex-engineering',
  },
  {
    title: 'Mystic',
    descKey: 'project_mystic',
    tags: ['React 19', 'TypeScript', 'Firebase', 'Framer Motion', 'React Router 7', 'Tailwind CSS 4', 'Vite'],
    gradient: 'from-fuchsia-400',
    hoverColor: 'group-hover:text-fuchsia-400',
    icon: 'solar:stars-linear',
    liveUrl: 'https://mystic-app-gules.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/mystic-app',
  },
  {
    title: 'Spectra CRM',
    descKey: 'project_spectra_crm',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zustand'],
    gradient: 'from-violet-400',
    hoverColor: 'group-hover:text-violet-400',
    icon: 'solar:chart-square-linear',
    liveUrl: 'https://client-xi-three-50.vercel.app',
    githubUrl: 'https://github.com/canberkyildiz25/Spectra-CRM',
  },
  {
    title: 'PokéDuel',
    descKey: 'project_pokeduel',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion'],
    gradient: 'from-yellow-400',
    hoverColor: 'group-hover:text-yellow-400',
    icon: 'solar:gamepad-linear',
    liveUrl: 'https://pokedueltr.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/PokeDuel',
  },
  {
    title: 'PetLove',
    descKey: 'project_petlove',
    tags: ['React 19', 'React Router 7', 'Node.js', 'Express 5', 'MongoDB', 'Vite 8'],
    gradient: 'from-pink-400',
    hoverColor: 'group-hover:text-pink-400',
    icon: 'solar:paw-linear',
    liveUrl: 'https://pet-love-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/Pet-Love',
  },
  {
    title: 'E-Pharmacy',
    descKey: 'project_epharmacy',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Geolocation'],
    gradient: 'from-teal-400',
    hoverColor: 'group-hover:text-teal-400',
    icon: 'solar:pills-2-linear',
    liveUrl: 'https://e-pharmacy-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/E-Pharmacy',
  },
  {
    title: 'Purr Pedia',
    descKey: 'project_purr_pedia',
    tags: ['React 18', 'TypeScript', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Vite', 'PWA'],
    gradient: 'from-orange-400',
    hoverColor: 'group-hover:text-orange-400',
    icon: 'solar:cat-2-linear',
    liveUrl: 'https://purr-pedia.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Purr-Pedia',
  },
  {
    title: 'TravelTrucks',
    descKey: 'project_traveltrucks',
    tags: ['React 19', 'Redux Toolkit', 'React Router', 'Axios', 'Vite'],
    gradient: 'from-indigo-400',
    hoverColor: 'group-hover:text-indigo-400',
    icon: 'solar:bus-linear',
    liveUrl: 'https://travel-trucks-eight-theta.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Travel-Trucks',
  },
  {
    title: 'Cinemania',
    descKey: 'project_cinemania',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-rose-400',
    hoverColor: 'group-hover:text-rose-400',
    icon: 'solar:clapperboard-play-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Cinemania/',
    githubUrl: 'https://github.com/canberkyildiz25/Cinemania',
  },
  {
    title: 'Book-Shelf',
    descKey: 'project_bookshelf',
    tags: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
    gradient: 'from-emerald-400',
    hoverColor: 'group-hover:text-emerald-400',
    icon: 'solar:book-linear',
    liveUrl: 'https://book-shelf-brown.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Book-Shelf',
  },
  {
    title: 'Tasty Treats',
    descKey: 'project_tastytreats',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-orange-400',
    hoverColor: 'group-hover:text-orange-400',
    icon: 'solar:dish-linear',
    liveUrl: 'https://tasty-treats-six.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Tasty-Treats',
  },
  {
    title: 'Money Guard',
    descKey: 'project_moneyguard',
    tags: ['React', 'Redux Toolkit', 'Chart.js', 'Vite'],
    gradient: 'from-cyan-400',
    hoverColor: 'group-hover:text-cyan-400',
    icon: 'solar:wallet-linear',
    liveUrl: 'https://money-guard-pi.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Money-Guard',
  },
  {
    title: 'Focus Frame',
    descKey: 'project_focusframe',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-slate-400',
    hoverColor: 'group-hover:text-slate-400',
    icon: 'solar:camera-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Focus-Frame-Project/',
    githubUrl: 'https://github.com/canberkyildiz25/Focus-Frame-Project',
  },
  {
    title: 'Green Harvest',
    descKey: 'project_greenharvest',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-lime-400',
    hoverColor: 'group-hover:text-lime-500',
    icon: 'solar:leaf-linear',
    liveUrl: 'https://green-harvest-project.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/green-harvest-project',
  },
  {
    title: 'Psychologist Services',
    descKey: 'project_psychologist',
    tags: ['React 19', 'Vite', 'React Router v7', 'Firebase', 'React Hook Form', 'Yup'],
    gradient: 'from-purple-400',
    hoverColor: 'group-hover:text-purple-400',
    icon: 'solar:heart-linear',
    liveUrl: 'https://resilient-salmiakki-c08a67.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Psychologist-Services',
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const { t } = useLanguage();
  const [imgState, setImgState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => window.open(project.liveUrl, '_blank')}
    >
      {/* Screenshot / thumbnail */}
      <div className="aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative mb-6 transition-all duration-500 group-hover:border-rose-500/50">
        {imgState === 'loading' && <div className="absolute inset-0 animate-shimmer" />}

        {imgState !== 'error' && (
          <img
            src={`https://s0.wordpress.com/mshots/v1/${encodeURIComponent(project.liveUrl)}?w=1200&h=675`}
            alt={project.title}
            loading="eager"
            fetchPriority={idx < 2 ? 'high' : 'auto'}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imgState === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgState('loaded')}
            onError={() => setImgState('error')}
          />
        )}

        {imgState === 'loaded' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        )}

        {imgState === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className={`absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${project.gradient} via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-500`} />
            <Icon icon={project.icon} className="text-4xl text-zinc-400 dark:text-zinc-700 group-hover:scale-110 transition-transform duration-500 relative z-10" />
          </div>
        )}
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between hover:translate-x-1 transition-transform duration-300">
        <div className="flex-1">
          <h3 className={`text-lg font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors duration-300 ${project.hoverColor}`}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-500 max-w-sm">{t(project.descKey)}</p>
        </div>
        <div className="flex items-center gap-2 opacity-100 group-hover:scale-110 transition-all duration-300" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-md"
            title="GitHub"
          >
            <Icon icon="logos:github-icon" className="text-base" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-rose-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-md hover:shadow-rose-500/40"
            title="Live Demo"
          >
            <Icon icon="solar:arrow-right-up-linear" />
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:border-rose-300/60 dark:hover:border-rose-700/50 hover:text-rose-700 dark:hover:text-rose-400 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-800/60">
      <motion.div
        className="flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
          {t('projects_title')}
        </h2>
        <button
          onClick={() => setShowAll((v) => !v)}
          className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 transition-all duration-300 hover:gap-2"
        >
          {showAll ? t('projects_show_less') : t('projects_view_all')}
          <Icon icon={showAll ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-right-linear'} />
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showAll ? 'all' : 'partial'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {visible.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
