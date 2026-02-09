import { CheckCircle2, Shield, Clock, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      key: 'values.0'
    },
    {
      icon: Clock,
      key: 'values.1'
    },
    {
      icon: ThumbsUp,
      key: 'values.2'
    },
    {
      icon: CheckCircle2,
      key: 'values.3'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">{t('about.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t('about.p2')}
            </p>

            <div className="bg-orange-50 dark:bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-slate-900 dark:text-white font-semibold text-lg italic">
                {t('about.quote')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{t('about.author')}</p>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300">
                <img
                  src="/cons2.jpeg"
                  alt="Chantier SEMEN-BTP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">1+</p>
                <p className="text-sm">{t('about.years')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4">
                  <value.icon className="text-orange-500 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t(`${value.key}.title`)}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t(`${value.key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
