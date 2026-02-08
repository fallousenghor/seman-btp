import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      titleKey: 'projects.1.title',
      categoryKey: 'projects.1.category',
      descriptionKey: 'projects.1.description',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      titleKey: 'projects.2.title',
      categoryKey: 'projects.2.category',
      descriptionKey: 'projects.2.description',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      titleKey: 'projects.3.title',
      categoryKey: 'projects.3.category',
      descriptionKey: 'projects.3.description',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      titleKey: 'projects.4.title',
      categoryKey: 'projects.4.category',
      descriptionKey: 'projects.4.description',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      titleKey: 'projects.5.title',
      categoryKey: 'projects.5.category',
      descriptionKey: 'projects.5.description',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      titleKey: 'projects.6.title',
      categoryKey: 'projects.6.category',
      descriptionKey: 'projects.6.description',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Nos Réalisations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-orange-400 text-sm font-semibold mb-2">{t(project.categoryKey)}</p>
                  <h3 className="text-2xl font-bold mb-2">{t(project.titleKey)}</h3>
                  <p className="text-gray-200 text-sm">{t(project.descriptionKey)}</p>
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {t(project.categoryKey)}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t(project.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t('projects.more')}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-900 dark:bg-slate-700 text-white px-8 py-4 rounded-md hover:bg-slate-800 dark:hover:bg-slate-600 font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('projects.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
