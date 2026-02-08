import { CheckCircle2, Shield, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Qualité garantie',
      description: 'Nous utilisons uniquement des matériaux de première qualité et respectons les normes en vigueur.'
    },
    {
      icon: Clock,
      title: 'Respect des délais',
      description: 'Nos équipes s\'engagent à respecter les délais convenus pour la livraison de votre projet.'
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction client',
      description: 'Votre satisfaction est notre priorité. Nous vous accompagnons à chaque étape du projet.'
    },
    {
      icon: CheckCircle2,
      title: 'Certifications',
      description: 'Entreprise certifiée RGE et qualifiée pour tous types de travaux de construction.'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">À propos de nous</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-6">
              SEMAN-BTP, votre partenaire de confiance depuis plus de 2 ans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Fondée en 2024, <strong>SEMEN-BTP</strong> est une entreprise familiale spécialisée dans tous les travaux de construction, rénovation et aménagement. Notre expérience et notre savoir-faire nous permettent de réaliser des projets de toutes envergures avec professionnalisme et rigueur.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Nous mettons un point d'honneur à offrir à nos clients un service personnalisé, des conseils avisés et un suivi rigoureux de chaque chantier. Notre équipe d'artisans qualifiés et passionnés s'engage à transformer vos idées en réalité.
            </p>

            <div className="bg-orange-50 dark:bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-slate-900 dark:text-white font-semibold text-lg italic">
                "Notre mission : bâtir des projets durables et de qualité qui dépassent vos attentes"
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">- Jean SEMEN, Fondateur</p>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300">
                <img
                  src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Chantier SEMEN-BTP"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">2+</p>
                <p className="text-sm">Années d'excellence</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4">
                  <value.icon className="text-orange-500 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
