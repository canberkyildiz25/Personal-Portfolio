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
  {
    title: 'Fornace',
    descKey: 'project_fornace',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-amber-400',
    hoverColor: 'group-hover:text-amber-400',
    icon: 'solar:fire-linear',
    liveUrl: 'https://fornace-next.vercel.app/',
    githubUrl: 'https://github.com/canberkyildiz25/fornace-next',
    previewUrl: 'https://s0.wordpress.com/mshots/v1/https%3A%2F%2Ffornace-next.vercel.app%2F?w=1200&h=675',
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
          className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 transition-colors"
        >
          {showAll ? t('projects_show_less') : t('projects_view_all')}
          <Icon icon={showAll ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-right-linear'} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visible.map((project) => (
          <div key={project.title} className="group">
            <div className="aspect-video w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 overflow-hidden relative mb-6">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            <div className="flex items-start justify-between">
              <div>
                <h3
                  className={`text-lg font-medium text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors ${project.hoverColor}`}
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 max-w-sm">{t(project.descKey)}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-transparent transition-all"
                  title="GitHub"
                >
                  <Icon icon="solar:brand-github-linear" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all"
                  title="Live Demo"
                >
                  <Icon icon="solar:arrow-right-up-linear" />
                </a>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-md"
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
