import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

const stats: { value: string; labelKey: TranslationKey }[] = [
  { value: '2+', labelKey: 'about_exp_label' },
  { value: '16+', labelKey: 'about_projects_label' },
  { value: '20+', labelKey: 'about_tech_label' },
];

const tagKeys: TranslationKey[] = ['about_tag1', 'about_tag2', 'about_tag3', 'about_tag4'];
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24" style={{ borderTop: '1px solid var(--line)' }}>
      {/* section index */}
      <div className="flex items-center gap-4 mb-14">
        <span className="eyebrow">01</span>
        <span className="h-px w-8" style={{ background: 'var(--accent)' }} />
        <span className="eyebrow eyebrow-muted">ABOUT</span>
      </div>

      <div className="flex flex-col md:flex-row gap-14 md:gap-20">
        {/* Text side */}
        <motion.div
          className="md:w-[62%]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease }}
        >
          <h2 className="text-[1.9rem] sm:text-[2.5rem] font-extrabold leading-[1.05] mb-7" style={{ color: 'var(--text)' }}>
            {t('about_title')}
          </h2>

          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
          </div>

          {/* Tags — mono */}
          <div className="mt-9 flex flex-wrap gap-2.5">
            {tagKeys.map((key) => (
              <span
                key={key}
                className="mono text-[11px] px-3 py-2 transition-all duration-300 cursor-default"
                style={{ border: '1px solid var(--line)', color: 'var(--muted)', borderRadius: '2px' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                }}
              >
                {t(key)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats — typographic, no cards */}
        <div className="md:w-[38%] flex flex-col justify-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              className="flex items-baseline gap-5 py-6"
              style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
            >
              <span className="text-[3rem] sm:text-[3.6rem] font-extrabold leading-none tabular-nums" style={{ color: 'var(--text)' }}>
                {s.value}
              </span>
              <span className="mono text-[11px] tracking-[0.12em] uppercase pb-2" style={{ color: 'var(--muted)' }}>
                {t(s.labelKey)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
