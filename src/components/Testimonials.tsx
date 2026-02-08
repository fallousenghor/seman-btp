import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Fallou Senghor',
      role: 'Particulier',
      contentKey: 'testimonial.1',
      rating: 5
    },
    {
      name: 'Wagane Senghor',
      role: 'Promoteur immobilier',
      contentKey: 'testimonial.2',
      rating: 5
    },
    {
      name: 'Patrick',
      role: 'Particulier',
      contentKey: 'testimonial.3',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Témoignages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="text-orange-500 absolute top-6 right-6 opacity-20" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{t(testimonial.contentKey)}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 md:p-12 text-center text-white transition-colors duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-orange-400 fill-current" size={24} />
              ))}
            </div>
            <h3 className="text-3xl font-bold mb-4">{t('testimonials.rating')}</h3>
            <p className="text-xl text-gray-300 mb-2">
              {t('testimonials.reviews')}
            </p>
            <p className="text-gray-400">
              {t('testimonials.recommend')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
