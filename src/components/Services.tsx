import { Building2, Home, Hammer, Wrench, Paintbrush, TreePine } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Construction neuve',
      description: 'Construction de bâtiments résidentiels et commerciaux clés en main avec les dernières normes.',
      features: ['Maisons individuelles', 'Immeubles collectifs', 'Bâtiments commerciaux']
    },
    {
      icon: Home,
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre habitat pour lui donner une seconde vie.',
      features: ['Rénovation énergétique', 'Restructuration', 'Mise aux normes']
    },
    {
      icon: Hammer,
      title: 'Gros œuvre',
      description: 'Tous travaux de gros œuvre réalisés par des professionnels qualifiés et certifiés.',
      features: ['Maçonnerie', 'Terrassement', 'Fondations']
    },
    {
      icon: Wrench,
      title: 'Second œuvre',
      description: 'Finitions et aménagements intérieurs pour parfaire votre projet de construction.',
      features: ['Plomberie', 'Électricité', 'Menuiserie']
    },
    {
      icon: Paintbrush,
      title: 'Aménagement',
      description: 'Aménagement et décoration pour optimiser et embellir vos espaces de vie.',
      features: ['Peinture', 'Revêtements', 'Agencement']
    },
    {
      icon: TreePine,
      title: 'Extérieurs',
      description: 'Création et aménagement de vos espaces extérieurs pour profiter pleinement de votre jardin.',
      features: ['Terrasses', 'Clôtures', 'Allées']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">Nos Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            Une expertise complète à votre service
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Du projet à la réalisation, nous vous accompagnons avec professionnalisme et savoir-faire
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

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 dark:bg-slate-700 rounded-2xl p-8 md:p-12 text-center text-white transition-colors duration-300">
          <h3 className="text-3xl font-bold mb-4">Un projet sur mesure ?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 font-semibold text-lg transition-all transform hover:scale-105"
          >
            Obtenir un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
}
