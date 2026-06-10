import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
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
      { name: 'TypeScript', logo: 'logos:typescript-icon' },
      { name: 'Tailwind', logo: 'logos:tailwindcss-icon' },
      { name: 'Redux Toolkit', logo: 'logos:redux' },
      { name: 'Three.js', logo: 'logos:threejs' },
      { name: 'React Three Fiber', logo: 'simple-icons:threedotjs' },
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
      { name: 'Express', logo: 'simple-icons:express' },
      { name: 'Firebase', logo: 'logos:firebase' },
      { name: 'GraphQL', logo: 'logos:graphql' },
      { name: 'JWT', logo: 'simple-icons:jsonwebtokens' },
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
      { name: 'Vercel', logo: 'logos:vercel-icon' },
      { name: 'Netlify', logo: 'logos:netlify-icon' },
      { name: 'GitHub Actions', logo: 'logos:github-actions' },
      { name: 'Linux', logo: 'logos:linux-tux' },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Label */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t('stack_title')}
          </h2>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            {t('stack_desc')}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl border ${skill.border} ${skill.bg} group cursor-pointer`}
            >
              <div className={`w-10 h-10 rounded-lg ${skill.iconBg} flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                <Icon icon={skill.icon} className={`${skill.accent} text-xl`} />
              </div>
              <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-200 mb-3">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/60 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:scale-110 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-default"
                  >
                    <Icon icon={tech.logo} className="text-base" />
                    <span className="hidden sm:inline">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
