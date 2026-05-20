import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const highlights: {
  icon: string;
  value: string;
  labelKey: TranslationKey;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    icon: 'solar:calendar-bold',
    value: '2+',
    labelKey: 'about_exp_label',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    border: 'border-indigo-200/80 dark:border-indigo-900/50',
  },
  {
    icon: 'solar:rocket-bold',
    value: '14+',
    labelKey: 'about_projects_label',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/40',
    border: 'border-violet-200/80 dark:border-violet-900/50',
  },
  {
    icon: 'solar:code-bold',
    value: '20+',
    labelKey: 'about_tech_label',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200/80 dark:border-emerald-900/50',
  },
];

const tagKeys: TranslationKey[] = ['about_tag1', 'about_tag2', 'about_tag3', 'about_tag4'];

const cardVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Text side */}
        <motion.div
          className="md:w-3/5"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            {t('about_title')}
          </h2>
          <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {tagKeys.map((key) => (
              <span
                key={key}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300 cursor-default"
              >
                {t(key)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats side */}
        <div className="md:w-2/5 flex flex-col gap-3 justify-center">
          {highlights.map((h, i) => (
            <motion.div
              key={h.labelKey}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`flex items-center gap-4 p-4 rounded-2xl ${h.bg} border ${h.border} hover:scale-[1.03] transition-transform duration-300 group`}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/70 dark:bg-zinc-900/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Icon icon={h.icon} className={`${h.color} text-xl`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-none">
                  {h.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {t(h.labelKey)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
