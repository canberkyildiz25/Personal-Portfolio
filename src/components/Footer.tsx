import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-300">{t('footer_rights')}</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 hover:scale-110 transition-all duration-300 flex items-center gap-1 group">
            <Icon icon="solar:brand-github-linear" className="text-base group-hover:rotate-6" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/canberk-y/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 flex items-center gap-1 group">
            <Icon icon="solar:brand-linkedin-linear" className="text-base group-hover:rotate-6" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
