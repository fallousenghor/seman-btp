import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Demande de devis gratuit</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h4>
                  <p className="text-green-700">Nous vous répondrons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="construction">Construction neuve</option>
                      <option value="renovation">Rénovation</option>
                      <option value="extension">Extension</option>
                      <option value="amenagement">Aménagement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez-nous votre projet en détail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Envoyer ma demande
                    <Send size={20} />
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires - Vos données sont protégées et ne seront pas partagées
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Adresse</h4>
                  <p className="text-gray-600">
                    parcelles assainies unite 9<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+221 784307723 / +221 774526722 </p>
                  <p className="text-sm text-gray-500">Lun - Ven : 8h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-gray-600">semanbtp59@gmail.com</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Horaires</h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi<br />
                    8h00 - 13h00 / 14h00 - 18h00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl shadow-lg p-6 text-white">
              <h4 className="font-bold text-xl mb-3">Intervention rapide</h4>
              <p className="text-gray-300 mb-4">
                Besoin d'une intervention en urgence ? Contactez-nous directement par téléphone.
              </p>
              <a
                href="tel:+221784307723"
                className="block w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-semibold text-center transition-all"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
