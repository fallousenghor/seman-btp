import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-slate-900 text-white py-2 px-4">
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
            Disponible du lundi au vendredi : 8h - 18h
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <Logo />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    SEMAN<span className="text-orange-500">-BTP</span>
                  </h1>
                  <p className="text-xs text-gray-600 mt-1">Bâtir votre avenir</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 font-medium transition-colors">
                Contact
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-orange-500 font-medium text-left py-2">
                  Accueil
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 font-medium text-left py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-orange-500 font-medium text-left py-2">
                  À propos
                </button>
                <button onClick={() => scrollToSection('realisations')} className="text-gray-700 hover:text-orange-500 font-medium text-left py-2">
                  Réalisations
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
