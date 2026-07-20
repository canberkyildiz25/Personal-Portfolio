import { Icon } from '@iconify/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: 'var(--bg)' }}>
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="mono text-[11px] tracking-wide" style={{ color: 'var(--muted-2)' }}>
          {t('footer_rights')}
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/canberkyildiz25" target="_blank" rel="noopener noreferrer"
            className="mono text-[11px] tracking-wide uppercase transition-colors flex items-center gap-1.5"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            <Icon icon="solar:code-square-linear" className="text-base" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/canberk-y/" target="_blank" rel="noopener noreferrer"
            className="mono text-[11px] tracking-wide uppercase transition-colors flex items-center gap-1.5"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
            <Icon icon="solar:link-linear" className="text-base" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
