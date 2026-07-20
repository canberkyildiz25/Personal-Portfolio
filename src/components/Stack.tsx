import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    icon: 'solar:monitor-smartphone-linear',
    title: 'Frontend',
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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24" style={{ borderTop: '1px solid var(--line)' }}>
      {/* section index */}
      <div className="flex items-center gap-4 mb-14">
        <span className="eyebrow">02</span>
        <span className="h-px w-8" style={{ background: 'var(--accent)' }} />
        <span className="eyebrow eyebrow-muted">STACK</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="p-8 sm:p-10 transition-all duration-300"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: '3px',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--accent)';
              el.style.boxShadow = '0 0 24px rgba(53,224,240,0.1)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--line)';
              el.style.boxShadow = 'none';
            }}
          >
            <div
              className="w-10 h-10 rounded-sm flex items-center justify-center mb-6 transition-all duration-300"
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--line)',
                color: 'var(--accent)',
              }}
            >
              <Icon icon={skill.icon} className="text-xl" />
            </div>

            <h3 className="text-[15px] font-extrabold mb-6" style={{ color: 'var(--text)' }}>
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-1.5 px-3 py-2 transition-all duration-300 cursor-default"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--line)',
                    borderRadius: '2px',
                    color: 'var(--muted)',
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
                  <Icon icon={tech.logo} className="text-base flex-shrink-0" />
                  <span className="hidden sm:inline text-[11px] font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
