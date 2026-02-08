import { Building2, Home, Hammer, Wrench, Paintbrush, TreePine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      key: 'service.1',
      features: ['service.1.features.0', 'service.1.features.1', 'service.1.features.2']
    },
    {
      icon: Home,
      key: 'service.2',
      features: ['service.2.features.0', 'service.2.features.1', 'service.2.features.2']
    },
    {
      icon: Hammer,
      key: 'service.3',
      features: ['service.3.features.0', 'service.3.features.1', 'service.3.features.2']
    },
    {
      icon: Wrench,
      key: 'service.4',
      features: ['service.4.features.0', 'service.4.features.1', 'service.4.features.2']
    },
    {
      icon: Paintbrush,
      key: 'service.5',
      features: ['service.5.features.0', 'service.5.features.1', 'service.5.features.2']
    },
    {
      icon: TreePine,
      key: 'service.6',
      features: ['service.6.features.0', 'service.6.features.1', 'service.6.features.2']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2"
            >
              <div className="bg-orange-100 dark:bg-orange-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <service.icon className="text-orange-500 dark:text-orange-400 group-hover:text-white transition-colors" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t(`${service.key}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{t(`${service.key}.description`)}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {t(feature)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 dark:bg-slate-700 rounded-2xl p-8 md:p-12 text-center text-white transition-colors duration-300">
          <h3 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h3>
          <p className="text-xl text-gray-300 mb-8">
            {t('services.cta.description')}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('services.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
