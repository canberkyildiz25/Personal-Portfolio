import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    icon: 'solar:monitor-smartphone-linear',
    title: 'Frontend',
    accent: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-200 dark:border-indigo-900/50',
    iconBg: 'bg-indigo-100 dark:bg-indigo-950',
    techs: [
      { name: 'React', logo: 'logos:react' },
      { name: 'Next.js', logo: 'logos:nextjs-icon' },
      { name: 'Vue', logo: 'logos:vue' },
      { name: 'TypeScript', logo: 'logos:typescript-icon' },
      { name: 'Tailwind', logo: 'logos:tailwindcss-icon' },
    ],
  },
  {
    icon: 'solar:server-square-linear',
    title: 'Backend',
    accent: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    border: 'border-violet-200 dark:border-violet-900/50',
    iconBg: 'bg-violet-100 dark:bg-violet-950',
    techs: [
      { name: 'Node.js', logo: 'logos:nodejs-icon' },
      { name: 'Python', logo: 'logos:python' },
      { name: 'Go', logo: 'logos:go' },
      { name: 'NestJS', logo: 'logos:nestjs' },
      { name: 'GraphQL', logo: 'logos:graphql' },
    ],
  },
  {
    icon: 'solar:database-linear',
    title: 'Database',
    accent: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    border: 'border-emerald-200 dark:border-emerald-900/50',
    iconBg: 'bg-emerald-100 dark:bg-emerald-950',
    techs: [
      { name: 'PostgreSQL', logo: 'logos:postgresql' },
      { name: 'MongoDB', logo: 'logos:mongodb-icon' },
      { name: 'Redis', logo: 'logos:redis' },
      { name: 'Prisma', logo: 'logos:prisma' },
      { name: 'Supabase', logo: 'logos:supabase-icon' },
    ],
  },
  {
    icon: 'solar:cloud-storage-linear',
    title: 'DevOps & Cloud',
    accent: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-200 dark:border-amber-900/50',
    iconBg: 'bg-amber-100 dark:bg-amber-950',
    techs: [
      { name: 'Docker', logo: 'logos:docker-icon' },
      { name: 'AWS', logo: 'logos:aws' },
      { name: 'Vercel', logo: 'logos:vercel-icon' },
      { name: 'GitHub Actions', logo: 'logos:github-actions' },
      { name: 'Linux', logo: 'logos:linux-tux' },
    ],
  },
];

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t('stack_title')}
          </h2>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            {t('stack_desc')}
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.title}
              className={`p-6 rounded-2xl border ${skill.border} ${skill.bg} hover:scale-105 hover:shadow-lg hover:shadow-${skill.accent.split('-')[1]}-500/20 transition-all duration-300 group cursor-pointer`}
              style={{'--skill-delay': `${idx * 60}ms`} as React.CSSProperties}
            >
              <div className={`w-10 h-10 rounded-lg ${skill.iconBg} flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                <Icon icon={skill.icon} className={`${skill.accent} text-xl`} />
              </div>
              <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200 mb-3">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, techIdx) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/60 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:scale-110 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-default"
                    style={{'--tech-delay': `${techIdx * 20}ms`} as React.CSSProperties}
                  >
                    <Icon icon={tech.logo} className="text-base" />
                    <span className="hidden sm:inline">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
