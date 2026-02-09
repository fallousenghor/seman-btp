
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <div>
                <h3 className="text-2xl font-bold">SEMAN<span className="text-orange-500">-BTP</span></h3>
                <p className="text-xs text-gray-400">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-md transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-md transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-orange-500 p-2 rounded-md transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">{t('header.services')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.nav.services')}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('realisations')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.nav.projects')}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">{t('header.services')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.services.0')}</li>
              <li>{t('footer.services.1')}</li>
              <li>{t('footer.services.2')}</li>
              <li>{t('footer.services.3')}</li>
              <li>{t('footer.services.4')}</li>
              <li>{t('footer.services.5')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">{t('header.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  {t('footer.contact.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-500 flex-shrink-0" size={18} />
                <a href="tel:+221784307723" className="text-gray-400 hover:text-white transition-colors">
                  +221 78 430 77 23 / +221 77 452 67 22
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-500 flex-shrink-0" size={18} />
                <a href="mailto:semanbtp59@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  semanbtp59@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-md">
            <div className="flex gap-1">
              <span className="text-xs text-gray-400">{t('footer.certifications')}</span>
            </div>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="bg-orange-500 px-2 py-1 rounded">RGE</span>
              <span className="bg-orange-500 px-2 py-1 rounded">QUALIBAT</span>
              <span className="bg-orange-500 px-2 py-1 rounded">DECENNALE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

