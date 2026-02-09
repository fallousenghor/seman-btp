import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Testimonial {
  name: string;
  role: string;
  contentKey: string;
  rating: number;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
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
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
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
    setCurrentIndex((prev) => (prev + 1) > maxIndex ? 0 : prev + 1);
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1) < 0 ? maxIndex : prev - 1);
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext, isAutoPlaying]);

  // Calculate total slides
  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1);

  return (
    <section 
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            {t('testimonials.section')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-8 md:px-12">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white dark:bg-slate-700 rounded-xl p-5 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-600 mx-2 md:mx-4">
                    {/* Quote Icon */}
                    <div className="absolute top-3 right-4 opacity-10">
                      <Quote className="text-orange-500" size={32} />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-600 dark:text-gray-200 mb-5 leading-relaxed text-sm md:text-base line-clamp-4">
                      "{t(testimonial.contentKey)}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-600">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm md:text-base truncate">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm text-orange-500 dark:text-orange-400 font-medium truncate">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Arrows - Visible only on mobile */}
          <div className="flex md:hidden justify-center gap-6 mt-6">
            <button
              onClick={goToPrev}
              className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full shadow-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-600"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-orange-500 w-6 md:w-8' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-orange-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-xl p-6 md:p-8 text-center text-white shadow-lg">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-sm md:text-base font-bold">{t('testimonials.rating')}</p>
            </div>
            <div className="w-px h-10 bg-gray-600 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-400">20+</p>
              <p className="text-gray-300 text-sm">{t('testimonials.reviews')}</p>
            </div>
            <div className="w-px h-10 bg-gray-600 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl md:text-4xl font-bold text-green-400">100%</p>
              <p className="text-gray-300 text-sm">{t('testimonials.recommend')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

