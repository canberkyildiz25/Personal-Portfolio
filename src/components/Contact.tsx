import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/60">
      <motion.div
        className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(10,10,15,0.9) 50%, rgba(225,29,72,0.08) 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: '0 0 80px rgba(124,58,237,0.08)',
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(225,29,72,0.1)',
              border: '1px solid rgba(225,29,72,0.2)',
              color: '#f87171',
            }}
          >
            <Icon icon="solar:chat-round-line-linear" />
            {t('contact_badge')}
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-100 mb-5"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {t('contact_title')}
          </h2>

          <p className="text-base text-zinc-400 max-w-md mx-auto leading-relaxed mb-10">
            {t('contact_desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:canberkyildiz2@yandex.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #e11d48, #f43f5e)',
                boxShadow: '0 4px 24px rgba(225,29,72,0.25)',
                fontFamily: "'Barlow', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(225,29,72,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(225,29,72,0.25)';
              }}
            >
              <Icon icon="solar:letter-linear" />
              {t('contact_email')}
            </a>

            <a
              href="https://www.linkedin.com/in/canberk-y/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0A66C2, #0077b5)',
                boxShadow: '0 4px 24px rgba(10,102,194,0.25)',
                fontFamily: "'Barlow', sans-serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(10,102,194,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(10,102,194,0.25)';
              }}
            >
              <Icon icon="logos:linkedin-icon" className="text-base" />
              {t('contact_linkedin')}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
