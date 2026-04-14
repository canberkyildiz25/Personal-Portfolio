import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
    >
      {theme === 'dark' ? (
        <Icon icon="solar:sun-2-linear" className="text-lg animate-spin-slow" />
      ) : (
        <Icon icon="solar:moon-linear" className="text-lg" />
      )}
    </button>
  );
}
