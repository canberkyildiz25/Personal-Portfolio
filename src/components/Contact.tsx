import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-950/30 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6">
          <Icon icon="solar:chat-round-line-linear" />
          {t('contact_badge')}
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {t('contact_title')}
        </h2>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          {t('contact_desc')}
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="mailto:canberkyildiz2@yandex.com"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 shadow-lg shadow-indigo-500/20 group hover:scale-105"
        >
          <Icon icon="solar:letter-linear" className="group-hover:animate-bounce" />
          {t('contact_email')}
        </a>
        <a
          href="https://www.linkedin.com/in/canberk-y/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A66C2] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#004182] hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 shadow-lg shadow-blue-600/20 group hover:scale-105"
        >
          <Icon icon="logos:linkedin-icon" className="text-base" />
          {t('contact_linkedin')}
        </a>
      </motion.div>
    </section>
  );
}
