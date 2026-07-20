import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24" style={{ borderTop: '1px solid var(--line)' }}>
      {/* section index */}
      <div className="flex items-center gap-4 mb-14">
        <span className="eyebrow">04</span>
        <span className="h-px w-8" style={{ background: 'var(--accent)' }} />
        <span className="eyebrow eyebrow-muted">CONTACT</span>
      </div>

      <motion.div
        className="relative overflow-hidden p-10 sm:p-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease }}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: '3px',
        }}
      >
        {/* blueprint + cyan bloom */}
        <div className="absolute inset-0 blueprint pointer-events-none" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 120%, rgba(53,224,240,0.14) 0%, transparent 65%)',
        }} />

        <div className="relative z-10">
          <span className="mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent)' }}>
            {t('contact_badge')}
          </span>

          <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[3.4rem] font-extrabold leading-[1.03] mt-4 mb-5" style={{ color: 'var(--text)' }}>
            {t('contact_title')}
          </h2>

          <p className="text-[15px] max-w-md leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>
            {t('contact_desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href="mailto:canberkyildiz2@yandex.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[13px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--accent)', color: '#08090C', borderRadius: '2px' }}
            >
              <Icon icon="solar:letter-linear" />
              {t('contact_email')}
            </a>
            <a
              href="https://www.linkedin.com/in/canberk-y/"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[13px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: '1px solid var(--line-2)', color: 'var(--text)', borderRadius: '2px' }}
            >
              <Icon icon="solar:link-linear" />
              {t('contact_linkedin')}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
