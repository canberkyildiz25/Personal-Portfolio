import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const projects: {
  title: string;
  descKey: TranslationKey;
  tags: string[];
  icon: string;
  liveUrl: string;
  githubUrl: string;
}[] = [
  {
    title: 'FORGE Athletic',
    descKey: 'project_forge',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'GSAP'],
    icon: 'solar:dumbbell-large-linear',
    liveUrl: 'https://forge-athletic.netlify.app',
    githubUrl: 'https://github.com/canberkyildiz25/forge',
  },
  {
    title: 'Fornace',
    descKey: 'project_fornace',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: 'solar:fire-linear',
    liveUrl: 'https://fornace-next.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/fornace-next',
  },
  {
    title: 'Apex Engineering',
    descKey: 'project_apex_engineering',
    tags: ['React 18', 'Three.js', 'React Three Fiber', 'Framer Motion', 'Tailwind CSS'],
    icon: 'solar:3d-square-linear',
    liveUrl: 'https://apex-engineering-two.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/apex-engineering',
  },
  {
    title: 'Mystic',
    descKey: 'project_mystic',
    tags: ['React 19', 'TypeScript', 'Firebase', 'Framer Motion', 'Tailwind CSS 4'],
    icon: 'solar:stars-linear',
    liveUrl: 'https://mystic-app-gules.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/mystic-app',
  },
  {
    title: 'Spectra CRM',
    descKey: 'project_spectra_crm',
    tags: ['Next.js 14', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Zustand'],
    icon: 'solar:chart-square-linear',
    liveUrl: 'https://client-xi-three-50.vercel.app',
    githubUrl: 'https://github.com/canberkyildiz25/Spectra-CRM',
  },
  {
    title: 'PokéDuel',
    descKey: 'project_pokeduel',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion'],
    icon: 'solar:gamepad-linear',
    liveUrl: 'https://pokedueltr.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/PokeDuel',
  },
  {
    title: 'PetLove',
    descKey: 'project_petlove',
    tags: ['React 19', 'React Router 7', 'Node.js', 'Express 5', 'MongoDB'],
    icon: 'solar:paw-linear',
    liveUrl: 'https://pet-love-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/Pet-Love',
  },
  {
    title: 'E-Pharmacy',
    descKey: 'project_epharmacy',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Geolocation'],
    icon: 'solar:pills-2-linear',
    liveUrl: 'https://e-pharmacy-1.onrender.com/',
    githubUrl: 'https://github.com/canberkyildiz25/E-Pharmacy',
  },
  {
    title: 'Purr Pedia',
    descKey: 'project_purr_pedia',
    tags: ['React 18', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'PWA'],
    icon: 'solar:cat-2-linear',
    liveUrl: 'https://purr-pedia.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Purr-Pedia',
  },
  {
    title: 'OVERLAND',
    descKey: 'project_traveltrucks',
    tags: ['React 19', 'Redux Toolkit', 'React Router 7', 'Vite', 'Custom UI'],
    icon: 'solar:map-point-wave-linear',
    liveUrl: 'https://travel-trucks-eight-theta.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/overland',
  },
  {
    title: 'Cinemania',
    descKey: 'project_cinemania',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'solar:clapperboard-play-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Cinemania/',
    githubUrl: 'https://github.com/canberkyildiz25/Cinemania',
  },
  {
    title: 'Book-Shelf',
    descKey: 'project_bookshelf',
    tags: ['React', 'Redux Toolkit', 'React Router', 'Vite'],
    icon: 'solar:book-linear',
    liveUrl: 'https://book-shelf-brown.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Book-Shelf',
  },
  {
    title: 'Tasty Treats',
    descKey: 'project_tastytreats',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'solar:dish-linear',
    liveUrl: 'https://tasty-treats-six.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Tasty-Treats',
  },
  {
    title: 'Money Guard',
    descKey: 'project_moneyguard',
    tags: ['React', 'Redux Toolkit', 'Chart.js', 'Vite'],
    icon: 'solar:wallet-linear',
    liveUrl: 'https://money-guard-pi.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Money-Guard',
  },
  {
    title: 'Focus Frame',
    descKey: 'project_focusframe',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'solar:camera-linear',
    liveUrl: 'https://canberkyildiz25.github.io/Focus-Frame-Project/',
    githubUrl: 'https://github.com/canberkyildiz25/Focus-Frame-Project',
  },
  {
    title: 'Green Harvest',
    descKey: 'project_greenharvest',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'solar:leaf-linear',
    liveUrl: 'https://green-harvest-project.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/green-harvest-project',
  },
  {
    title: 'Psychologist Services',
    descKey: 'project_psychologist',
    tags: ['React 19', 'Vite', 'Firebase', 'React Hook Form', 'Yup'],
    icon: 'solar:heart-linear',
    liveUrl: 'https://resilient-salmiakki-c08a67.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Psychologist-Services',
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const { t } = useLanguage();
  const [imgState, setImgState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (idx % 2) * 0.1, ease }}
      onClick={() => window.open(project.liveUrl, '_blank')}
    >
      {/* Screenshot card */}
      <div
        className="aspect-video w-full overflow-hidden relative mb-5 transition-all duration-500"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '3px',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'var(--accent)';
          el.style.boxShadow = '0 0 24px rgba(53,224,240,0.15)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = 'var(--line)';
          el.style.boxShadow = 'none';
        }}
      >
        {imgState === 'loading' && (
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: 'linear-gradient(90deg, var(--surface2) 25%, var(--surface) 50%, var(--surface2) 75%)',
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
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'var(--surface)' }}>
            <Icon icon={project.icon} className="text-5xl transition-all duration-500" style={{ color: 'var(--muted)' }} />
          </div>
        )}

        {/* Live preview badge on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', color: 'var(--accent)', borderRadius: '2px' }}
          >
            <Icon icon="solar:arrow-right-up-linear" className="text-sm" />
            Live Demo
          </div>
        </div>
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
            className="text-base font-extrabold tracking-tight mb-2 transition-colors duration-300"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h3>
          <p className="text-[13px] max-w-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            {t(project.descKey)}
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex items-center gap-2 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300"
            style={{ background: 'var(--surface2)', border: '1px solid var(--line)', color: 'var(--muted)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--accent)';
              el.style.color = 'var(--accent)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--line)';
              el.style.color = 'var(--muted)';
            }}
            title="GitHub"
          >
            <Icon icon="logos:github-icon" className="text-base" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300"
            style={{ background: 'var(--surface2)', border: '1px solid var(--line)', color: 'var(--muted)' }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--accent)';
              el.style.borderColor = 'var(--accent)';
              el.style.color = '#08090C';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--surface2)';
              el.style.borderColor = 'var(--line)';
              el.style.color = 'var(--muted)';
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
            className="text-[11px] font-medium px-2.5 py-1 transition-all duration-300 cursor-default"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--line)',
              color: 'var(--muted)',
              borderRadius: '2px',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--accent)';
              el.style.color = 'var(--accent)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--line)';
              el.style.color = 'var(--muted)';
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="text-[11px] font-medium px-2.5 py-1"
            style={{
              background: 'var(--surface2)',
              border: '1px solid var(--line)',
              color: 'var(--muted-2)',
              borderRadius: '2px',
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
    <section id="projects" className="py-24" style={{ borderTop: '1px solid var(--line)' }}>
      {/* section index */}
      <div className="flex items-center gap-4 mb-14">
        <span className="eyebrow">03</span>
        <span className="h-px w-8" style={{ background: 'var(--accent)' }} />
        <span className="eyebrow eyebrow-muted">PROJECTS</span>
      </div>

      <motion.div
        className="flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease }}
      >
        <h2
          className="text-[1.9rem] sm:text-[2.5rem] font-extrabold leading-[1.05]"
          style={{ color: 'var(--text)' }}
        >
          {t('projects_title')}
        </h2>

        <button
          onClick={() => setShowAll((v) => !v)}
          className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 px-4 py-2 mono"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            color: 'var(--muted)',
            borderRadius: '2px',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = 'var(--text)';
            el.style.borderColor = 'var(--accent)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = 'var(--muted)';
            el.style.borderColor = 'var(--line)';
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
