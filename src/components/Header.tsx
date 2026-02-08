import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-slate-900 text-white py-2 px-4 dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+221784307723" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone size={16} />
              <span className="hidden sm:inline">+221 78 430 77 23 / +221 77 452 67 22 </span>
            </a>
            <a href="mailto:semanbtp59@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline">semanbtp59@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm text-gray-300">
            {t('topbar.available')}
          </div>
        </div>
      </div>

      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <Logo />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    SEMAN<span className="text-orange-500">-BTP</span>
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{t('footer.tagline')}</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors">
                {t('header.home')}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors">
                {t('header.services')}
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors">
                {t('header.about')}
              </button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium transition-colors">
                {t('header.projects')}
              </button>
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <ThemeToggle />
                <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium transition-colors">
                  {t('header.contact')}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('accueil')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium text-left py-2">
                  {t('header.home')}
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium text-left py-2">
                  {t('header.services')}
                </button>
                <button onClick={() => scrollToSection('apropos')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium text-left py-2">
                  {t('header.about')}
                </button>
                <button onClick={() => scrollToSection('realisations')} className="text-gray-700 dark:text-gray-200 hover:text-orange-500 font-medium text-left py-2">
                  {t('header.projects')}
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium text-left">
                  {t('header.contact')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
