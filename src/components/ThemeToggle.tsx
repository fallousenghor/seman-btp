import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label={`Passer en mode ${theme === 'light' ? 'sombre' : 'clair'}`}
      title={`Mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
        <Sun
          className={`text-orange-500 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-50'
          }`}
          size={22}
        />
        <Moon
          className={`text-orange-400 absolute transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-90 scale-50'
          }`}
          size={22}
        />
      </span>
    </button>
  );
}

