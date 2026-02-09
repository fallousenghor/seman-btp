import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'SAHELIA CONSTRUCTION',
      role: 'Partenaire Construction',
      contentKey: 'testimonial.4',
      rating: 5
    },
    {
      name: 'CBAO bank',
      role: 'Institution Bancaire',
      contentKey: 'testimonial.5',
      rating: 5
    },
    {
      name: 'SUNU BANK',
      role: 'Institution Bancaire',
      contentKey: 'testimonial.6',
      rating: 5
    },
    {
      name: 'TIS HYDROCARBURES',
      role: 'Secteur Pétrolier',
      contentKey: 'testimonial.7',
      rating: 5
    },
    {
      name: 'Prokhan fer',
      role: 'Secteur Industriel',
      contentKey: 'testimonial.8',
      rating: 5
    }
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (currentIndex >= maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isAutoPlaying]);

  // Calculate total dots
  const totalDots = Math.max(1, testimonials.length - itemsPerView + 1);

  return (
    <section 
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden mx-8 md:mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(testimonials.length * 100) / itemsPerView}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 relative hover:shadow-xl transition-shadow duration-300 h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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

