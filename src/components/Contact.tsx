import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subjectOptions = [
    { value: '', label: 'contact.form.subject.0' },
    { value: 'construction', label: 'contact.form.subject.1' },
    { value: 'renovation', label: 'contact.form.subject.2' },
    { value: 'extension', label: 'contact.form.subject.3' },
    { value: 'amenagement', label: 'contact.form.subject.4' },
    { value: 'autre', label: 'contact.form.subject.5' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('contact.form.title')}</h3>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">{t('contact.success')}</h4>
                  <p className="text-green-700 dark:text-green-300">{t('contact.success.desc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white dark:bg-slate-600 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.placeholder.name')}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white dark:bg-slate-600 text-gray-900 dark:text-white"
                        placeholder={t('contact.form.placeholder.phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white dark:bg-slate-600 text-gray-900 dark:text-white"
                      placeholder={t('contact.form.placeholder.email')}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white dark:bg-slate-600 text-gray-900 dark:text-white"
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {t(option.label)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-500 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none bg-white dark:bg-slate-600 text-gray-900 dark:text-white"
                      placeholder={t('contact.form.placeholder.message')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {t('contact.form.submit')}
                    <Send size={20} />
                  </button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {t('contact.form.required')}
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-lg">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Adresse</h4>
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {language === 'fr' ? 'parcelles assainies unite 9\nDakar, Sénégal' : 'Assanied plots unit 9\nDakar, Senegal'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-lg">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t('contact.form.phone')}</h4>
                  <p className="text-gray-600 dark:text-gray-300">+221 784307723 / +221 774526722</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.hours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-lg">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">semanbtp59@gmail.com</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact.info.email.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-lg">
                  <Clock className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{language === 'fr' ? 'Horaires' : 'Hours'}</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'fr' ? 'Lundi - Vendredi\n8h00 - 13h00 / 14h00 - 18h00' : 'Monday - Friday\n8am - 1pm / 2pm - 6pm'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-700 rounded-xl shadow-lg p-6 text-white transition-colors duration-300">
              <h4 className="font-bold text-xl mb-3">{t('contact.urgent.title')}</h4>
              <p className="text-gray-300 dark:text-gray-300 mb-4">
                {t('contact.urgent.desc')}
              </p>
              <a
                href="tel:+221784307723"
                className="block w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-semibold text-center transition-all"
              >
                {t('contact.call')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

