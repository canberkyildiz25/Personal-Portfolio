import { useState } from 'react';
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
  previewUrl: string;
}[] = [
  {
    title: 'Psychologist Services',
    descKey: 'project_psychologist',
    tags: ['React 19', 'Vite', 'React Router v7', 'Firebase', 'React Hook Form', 'Yup'],
    gradient: 'from-purple-400',
    hoverColor: 'group-hover:text-purple-400',
    icon: 'solar:heart-linear',
    liveUrl: 'https://resilient-salmiakki-c08a67.netlify.app/',
    githubUrl: 'https://github.com/canberkyildiz25/Psychologist-Services',
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fresilient-salmiakki-c08a67.netlify.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fpet-love-1.onrender.com?w=1200&h=675',
  },
  {
    title: 'E-Pharmacy',
    descKey: 'project_epharmacy',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Geolocation'],
    gradient: 'from-teal-400',
    hoverColor: 'group-hover:text-teal-400',
    icon: 'solar:pills-2-linear',
    liveUrl: 'https://e-pharmacy-1.onrender.com/home',
    githubUrl: 'https://github.com/canberkyildiz25/E-Pharmacy',
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fe-pharmacy-1.onrender.com%2Fhome?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fpurr-pedia.vercel.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Ftravel-trucks-eight-theta.vercel.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fcanberkyildiz25.github.io%2FCinemania%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fbook-shelf-brown.vercel.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Ftasty-treats-six.vercel.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fmoney-guard-pi.vercel.app%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fcanberkyildiz25.github.io%2FFocus-Frame-Project%2F?w=1200&h=675',
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
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Fgreen-harvest-project.vercel.app%2F?w=1200&h=675',
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{t('projects_title')}</h2>
        <button
          onClick={() => setShowAll((v) => !v)}
          className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 transition-all duration-300 hover:gap-2"
        >
          {showAll ? t('projects_show_less') : t('projects_view_all')}
          <Icon icon={showAll ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-right-linear'} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visible.map((project, idx) => (
          <div 
            key={project.title} 
            className="group cursor-pointer" 
            style={{'--stagger': `${idx * 50}ms`} as React.CSSProperties}
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <div className="aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative mb-6 transition-all duration-500 group-hover:border-indigo-500/50 dark:group-hover:border-indigo-500/50">
              {project.previewUrl ? (
                <>
                  <img
                    src={project.previewUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {/* Fallback hidden by default */}
                  <div className="absolute inset-0 items-center justify-center hidden">
                    <Icon icon={project.icon} className="text-4xl text-zinc-400 dark:text-zinc-700" />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${project.gradient} via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={project.icon} className="text-4xl text-zinc-400 dark:text-zinc-700 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </>
              )}
            </div>
            <div className="flex items-start justify-between group/card hover:translate-x-1 transition-transform duration-300">
              <div className="flex-1">
                <h3
                  className={`text-lg font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors duration-300 ${project.hoverColor}`}
                >
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
                  className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-md hover:shadow-indigo-500/50"
                  title="Live Demo"
                >
                  <Icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-950 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-300 cursor-default"
                  style={{'--tag-delay': `${tagIdx * 30}ms`} as React.CSSProperties}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
