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
  accentColor: string;
  icon: string;
  liveUrl: string;
  githubUrl: string;
}[] = [
  {
    title: 'FORGE Athletic',
    descKey: 'project_forge',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'GSAP'],
    gradient: 'from-orange-600/20 to-red-500/10',
    accentColor: 'rgba(255,74,0,0.4)',
    icon: 'solar:dumbbell-large-linear',
    liveUrl: 'https://forge-athletic.netlify.app',
    githubUrl: 'https://github.com/canberkyildiz25/forge',
  },
  {
    title: 'Fornace',
    descKey: 'project_fornace',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-orange-500/20 to-amber-500/10',
    accentColor: 'rgba(249,115,22,0.4)',
    icon: 'solar:fire-linear',
    liveUrl: 'https://fornace-next.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/fornace-next',
  },
  {
    title: 'Apex Engineering',
    descKey: 'project_apex_engineering',
    tags: ['React 18', 'Three.js', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-sky-500/20 to-cyan-500/10',
    accentColor: 'rgba(14,165,233,0.4)',
    icon: 'solar:3d-square-linear',
    liveUrl: 'https://apex-engineering-two.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/apex-engineering',
  },
  {
    title: 'Mystic',
    descKey: 'project_mystic',
    tags: ['React 19', 'TypeScript', 'Firebase', 'Framer Motion', 'Tailwind CSS 4'],
    gradient: 'from-fuchsia-500/20 to-pink-500/10',
    accentColor: 'rgba(217,70,239,0.4)',
    icon: 'solar:stars-linear',
    liveUrl: 'https://mystic-app-gules.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/mystic-app',
  },
  {
    title: 'Spectra CRM',
    descKey: 'project_spectra_crm',
    tags: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Zustand'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    accentColor: 'rgba(124,58,237,0.4)',
    icon: 'solar:chart-square-linear',
    liveUrl: 'https://client-xi-three-50.vercel.app',
    githubUrl: 'https://github.com/canberkyildiz25/Spectra-CRM',
  },
  {
    title: 'PokéDuel',
    descKey: 'project_pokeduel',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion'],
    gradient: 'from-yellow-500/20 to-orange-500/10',
    accentColor: 'rgba(234,179,8,0.4)',
    icon: 'solar:gamepad-linear',
    liveUrl: 'https://pokedueltr.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/PokeDuel',
  },
  {
    title: 'PetLove',
    descKey: 'project_petlove',
    tags: ['React 19', 'React Router 7', 'Node.js', 'Express 5', 'MongoDB'],
    gradient: 'from-pink-500/20 to-rose-500/10',
    accentColor: 'rgba(236,72,153,0.4)',
    icon: 'solar:paw-linear',
    liveUrl: 'https://pet-love-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/Pet-Love',
  },
  {
    title: 'E-Pharmacy',
    descKey: 'project_epharmacy',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Geolocation'],
    gradient: 'from-teal-500/20 to-emerald-500/10',
    accentColor: 'rgba(20,184,166,0.4)',
    icon: 'solar:pills-2-linear',
    liveUrl: 'https://e-pharmacy-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/E-Pharmacy',
  },
  {
    title: 'Purr Pedia',
    descKey: 'project_purr_pedia',
    tags: ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'PWA'],
    gradient: 'from-orange-500/20 to-red-500/10',
    accentColor: 'rgba(249,115,22,0.4)',
    icon: 'solar:cat-2-linear',
    liveUrl: 'https://purr-pedia.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Purr-Pedia',
  },
  {
    title: 'OVERLAND',
    descKey: 'project_traveltrucks',
    tags: ['React 19', 'Redux Toolkit', 'React Router 7', 'Vite', 'Custom UI'],
    gradient: 'from-orange-500/20 to-amber-600/10',
    accentColor: 'rgba(232,130,60,0.4)',
    icon: 'solar:map-point-wave-linear',
    liveUrl: 'https://travel-trucks-eight-theta.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/overland',
  },
  {
    title: 'Cinemania',
    descKey: 'project_cinemania',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-rose-500/20 to-pink-500/10',
    accentColor: 'rgba(244,63,94,0.4)',
    icon: 'solar:clapperboard-play-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Cinemania/',
    githubUrl: 'https://github.com/canberkyildiz25/Cinemania',
  },
  {
    title: 'Book-Shelf',
    descKey: 'project_bookshelf',
    tags: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
    gradient: 'from-emerald-500/20 to-green-500/10',
    accentColor: 'rgba(16,185,129,0.4)',
    icon: 'solar:book-linear',
    liveUrl: 'https://book-shelf-brown.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Book-Shelf',
  },
  {
    title: 'Tasty Treats',
    descKey: 'project_tastytreats',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-orange-500/20 to-yellow-500/10',
    accentColor: 'rgba(249,115,22,0.4)',
    icon: 'solar:dish-linear',
    liveUrl: 'https://tasty-treats-six.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Tasty-Treats',
  },
  {
    title: 'Money Guard',
    descKey: 'project_moneyguard',
    tags: ['React', 'Redux Toolkit', 'Chart.js', 'Vite'],
    gradient: 'from-cyan-500/20 to-sky-500/10',
    accentColor: 'rgba(6,182,212,0.4)',
    icon: 'solar:wallet-linear',
    liveUrl: 'https://money-guard-pi.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Money-Guard',
  },
  {
    title: 'Focus Frame',
    descKey: 'project_focusframe',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-slate-500/20 to-zinc-500/10',
    accentColor: 'rgba(100,116,139,0.4)',
    icon: 'solar:camera-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Focus-Frame-Project/',
    githubUrl: 'https://github.com/canberkyildiz25/Focus-Frame-Project',
  },
  {
    title: 'Green Harvest',
    descKey: 'project_greenharvest',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-lime-500/20 to-green-500/10',
    accentColor: 'rgba(132,204,22,0.4)',
    icon: 'solar:leaf-linear',
    liveUrl: 'https://green-harvest-project.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/green-harvest-project',
  },
  {
    title: 'Psychologist Services',
    descKey: 'project_psychologist',
    tags: ['React 19', 'Vite', 'Firebase', 'React Hook Form', 'Yup'],
    gradient: 'from-purple-500/20 to-violet-500/10',
    accentColor: 'rgba(168,85,247,0.4)',
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
      {/* Screenshot card */}
      <div
        className="aspect-video w-full rounded-2xl overflow-hidden relative mb-5 transition-all duration-500"
        style={{
          background: 'rgba(10,10,15,0.8)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = project.accentColor;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
        }}
      >
        {imgState === 'loading' && (
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, #18181b 25%, #27272a 50%, #18181b 75%)',
              backgroundSize: '200% 100%',
            }}
          />
        )}

        {imgState !== 'error' && (
          <img
            src={`https://s0.wordpress.com/mshots/v1/${encodeURIComponent(project.liveUrl)}?w=1200&h=675`}
            alt={project.title}
            loading="eager"
            fetchPriority={idx < 2 ? 'high' : 'auto'}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imgState === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImgState('loaded')}
            onError={() => setImgState('error')}
          />
        )}

        {imgState === 'loaded' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        )}

        {imgState === 'error' && (
          <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${project.gradient}`}>
            <Icon icon={project.icon} className="text-5xl text-zinc-500 group-hover:scale-110 group-hover:text-zinc-300 transition-all duration-500" />
          </div>
        )}

        {/* Live preview badge on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
          >
            <Icon icon="solar:arrow-right-up-linear" className="text-sm" />
            Live Demo
          </div>
        </div>
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3
            className="text-lg font-bold text-zinc-100 tracking-tight mb-1.5 transition-colors duration-300 group-hover:text-white"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">{t(project.descKey)}</p>
        </div>

        {/* Action buttons */}
        <div
          className="flex items-center gap-2 ml-3 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 transition-all duration-300 hover:text-white hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            title="GitHub"
          >
            <Icon icon="logos:github-icon" className="text-base" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 transition-all duration-300 hover:text-white hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = project.accentColor.replace('0.4', '0.9');
              (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
            }}
            title="Live Demo"
          >
            <Icon icon="solar:arrow-right-up-linear" className="text-sm" />
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all duration-300 cursor-default"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#71717a',
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#52525b',
            }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/60">
      <motion.div
        className="flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              color: '#c084fc',
            }}
          >
            <Icon icon="solar:folder-2-linear" className="text-sm" />
            Projects
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-100"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('projects_title')}
          </h2>
        </div>

        <button
          onClick={() => setShowAll((v) => !v)}
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#a1a1aa',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = '#e4e4e7';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = '#a1a1aa';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          {showAll ? t('projects_show_less') : t('projects_view_all')}
          <Icon icon={showAll ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-right-linear'} />
        </button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showAll ? 'all' : 'partial'}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {visible.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
