import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    icon: 'solar:monitor-smartphone-linear',
    title: 'Frontend',
    accentColor: 'rgba(244,63,94,0.8)',
    borderColor: 'rgba(244,63,94,0.2)',
    gradient: 'from-rose-500/15 to-transparent',
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
    accentColor: 'rgba(124,58,237,0.8)',
    borderColor: 'rgba(124,58,237,0.2)',
    gradient: 'from-violet-500/15 to-transparent',
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
    accentColor: 'rgba(16,185,129,0.8)',
    borderColor: 'rgba(16,185,129,0.2)',
    gradient: 'from-emerald-500/15 to-transparent',
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
    accentColor: 'rgba(245,158,11,0.8)',
    borderColor: 'rgba(245,158,11,0.2)',
    gradient: 'from-amber-500/15 to-transparent',
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
    <section id="stack" className="py-20 border-t border-zinc-800/60">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">

        {/* Label */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(124,58,237,0.1)',
              border: '1px solid rgba(124,58,237,0.2)',
              color: '#c084fc',
            }}
          >
            <Icon icon="solar:code-bold" className="text-sm" />
            Stack
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-100 mb-4"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('stack_title')}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
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
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl cursor-pointer group bg-gradient-to-br ${skill.gradient}`}
              style={{
                background: `linear-gradient(135deg, ${skill.accentColor.replace('0.8', '0.06')} 0%, rgba(10,10,15,0.5) 100%)`,
                border: `1px solid ${skill.borderColor}`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                style={{
                  background: `rgba(10,10,15,0.7)`,
                  border: `1px solid ${skill.borderColor}`,
                }}
              >
                <Icon icon={skill.icon} className="text-xl text-zinc-200" />
              </div>
              <h3
                className="text-base font-bold text-zinc-200 mb-4"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{
                      background: 'rgba(10,10,15,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Icon icon={tech.logo} className="text-base flex-shrink-0" />
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
