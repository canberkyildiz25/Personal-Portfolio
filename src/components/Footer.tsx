import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-[#080809] transition-colors">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>{t('footer_rights')}</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1.5">
            <Icon icon="solar:brand-github-linear" className="text-base" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/canberk-y/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 dark:hover:text-rose-500 transition-colors flex items-center gap-1.5">
            <Icon icon="solar:brand-linkedin-linear" className="text-base" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
