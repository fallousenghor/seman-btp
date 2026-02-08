import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center w-16 h-10 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
      title={`Passer en ${language === 'fr' ? 'Anglais' : 'Français'}`}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300">
        <span
          className={`absolute flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
            language === 'fr'
              ? 'opacity-100 translate-x-0 text-slate-900 dark:text-white'
              : 'opacity-0 translate-x-4'
          }`}
        >
          FR
        </span>
        <span
          className={`absolute flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
            language === 'en'
              ? 'opacity-100 translate-x-0 text-slate-900 dark:text-white'
              : 'opacity-0 -translate-x-4'
          }`}
        >
          EN
        </span>
      </span>
      <span
        className={`absolute w-8 h-6 bg-orange-500 rounded-full shadow-md transition-all duration-300 ${
          language === 'fr' ? 'left-1' : 'left-7'
        }`}
      >
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xs transition-all duration-300 ${
            language === 'fr' ? 'text-white' : 'text-white'
          }`}
        >
          {language.toUpperCase()}
        </span>
      </span>
    </button>
  );
}

