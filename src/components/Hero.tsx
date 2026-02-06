import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              +2 ans d'expérience
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Votre partenaire de confiance pour tous vos
            <span className="text-orange-500"> projets BTP</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
            Construction, rénovation, et aménagement avec expertise et qualité garantie
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Demander un devis gratuit
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-slate-900 px-8 py-4 rounded-md hover:bg-gray-100 font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Découvrir nos services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Award className="text-orange-500 mx-auto mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-2">2+</h3>
              <p className="text-gray-300">Années d'expérience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Briefcase className="text-orange-500 mx-auto mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-2">5+</h3>
              <p className="text-gray-300">Projets réalisés</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-transform">
              <Users className="text-orange-500 mx-auto mb-3" size={40} />
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-gray-300">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
