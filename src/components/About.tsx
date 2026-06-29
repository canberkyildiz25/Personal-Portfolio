import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const highlights: {
  icon: string;
  value: string;
  labelKey: TranslationKey;
  gradient: string;
  border: string;
}[] = [
  {
    icon: 'solar:calendar-bold',
    value: '2+',
    labelKey: 'about_exp_label',
    gradient: 'from-rose-500/20 to-pink-500/10',
    border: 'rgba(244,63,94,0.2)',
  },
  {
    icon: 'solar:rocket-bold',
    value: '16+',
    labelKey: 'about_projects_label',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    icon: 'solar:code-bold',
    value: '20+',
    labelKey: 'about_tech_label',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'rgba(16,185,129,0.2)',
  },
];

const tagKeys: TranslationKey[] = ['about_tag1', 'about_tag2', 'about_tag3', 'about_tag4'];

const cardVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-zinc-800/60">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">

        {/* Text side */}
        <motion.div
          className="md:w-3/5"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(225,29,72,0.1)',
              border: '1px solid rgba(225,29,72,0.2)',
              color: '#f87171',
            }}
          >
            <Icon icon="solar:user-rounded-linear" className="text-sm" />
            About
          </div>

          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-100 mb-6"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('about_title')}
          </h2>

          <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {tagKeys.map((key) => (
              <span
                key={key}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-default hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#a1a1aa',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = 'rgba(225,29,72,0.1)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(244,63,94,0.3)';
                  (e.target as HTMLElement).style.color = '#fca5a5';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.target as HTMLElement).style.color = '#a1a1aa';
                }}
              >
                {t(key)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="md:w-2/5 flex flex-col gap-4 justify-center">
          {highlights.map((h, i) => (
            <motion.div
              key={h.labelKey}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              className={`flex items-center gap-4 p-5 rounded-2xl cursor-default bg-gradient-to-r ${h.gradient}`}
              style={{ border: `1px solid ${h.border}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(10,10,15,0.6)',
                  border: `1px solid ${h.border}`,
                }}
              >
                <Icon icon={h.icon} className="text-xl text-zinc-200" />
              </div>
              <div>
                <div
                  className="text-3xl font-black text-zinc-100 leading-none"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {h.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1">{t(h.labelKey)}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
