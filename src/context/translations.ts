export type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Header
  'header.contact': { fr: 'Contact', en: 'Contact' },
  'header.services': { fr: 'Services', en: 'Services' },
  'header.about': { fr: 'À propos', en: 'About' },
  'header.projects': { fr: 'Réalisations', en: 'Projects' },
  'header.home': { fr: 'Accueil', en: 'Home' },
  
  // Hero
  'hero.experience': { fr: '+2 ans d\'expérience', en: '+2 years of experience' },
  'hero.subtitle': { fr: 'Votre partenaire de confiance pour tous vos', en: 'Your trusted partner for all your' },
  'hero.title': { fr: 'projets BTP', en: 'construction projects' },
  'hero.description': { fr: 'Construction, rénovation, et aménagement avec expertise et qualité garantie', en: 'Construction, renovation, and fitting with expertise and guaranteed quality' },
  'hero.cta1': { fr: 'Demander un devis gratuit', en: 'Request a free quote' },
  'hero.cta2': { fr: 'Découvrir nos services', en: 'Discover our services' },
  'hero.stats.years': { fr: 'Années d\'expérience', en: 'Years of experience' },
  'hero.stats.projects': { fr: 'Projets réalisés', en: 'Projects completed' },
  'hero.stats.satisfied': { fr: 'Clients satisfaits', en: 'Satisfied clients' },
  'hero.stats.value': { fr: '2+', en: '2+' },
  'hero.stats.projectsValue': { fr: '5+', en: '5+' },
  'hero.stats.percent': { fr: '100%', en: '100%' },
  
  // Services
  'services.title': { fr: 'Une expertise complète à votre service', en: 'Complete expertise at your service' },
  'services.subtitle': { fr: 'Du projet à la réalisation, nous vous accompagnons avec professionnalisme et savoir-faire', en: 'From project to completion, we accompany you with professionalism and expertise' },
  'services.cta.title': { fr: 'Un projet sur mesure ?', en: 'A customized project?' },
  'services.cta.description': { fr: 'Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé', en: 'Contact us to discuss your specific needs and get a personalized quote' },
  'services.cta.button': { fr: 'Obtenir un devis gratuit', en: 'Get a free quote' },
  
  // Service items
  'service.1.title': { fr: 'Construction neuve', en: 'New construction' },
  'service.1.description': { fr: 'Construction de bâtiments résidentiels et commerciaux clés en main avec les dernières normes.', en: 'Turnkey residential and commercial building construction with the latest standards.' },
  'service.1.features.0': { fr: 'Maisons individuelles', en: 'Individual houses' },
  'service.1.features.1': { fr: 'Immeubles collectifs', en: 'Collective buildings' },
  'service.1.features.2': { fr: 'Bâtiments commerciaux', en: 'Commercial buildings' },
  
  'service.2.title': { fr: 'Rénovation', en: 'Renovation' },
  'service.2.description': { fr: 'Rénovation complète ou partielle de votre habitat pour lui donner une seconde vie.', en: 'Complete or partial renovation of your home to give it a new life.' },
  'service.2.features.0': { fr: 'Rénovation énergétique', en: 'Energy renovation' },
  'service.2.features.1': { fr: 'Restructuration', en: 'Restructuring' },
  'service.2.features.2': { fr: 'Mise aux normes', en: 'Standard compliance' },
  
  'service.3.title': { fr: 'Gros œuvre', en: 'Structural work' },
  'service.3.description': { fr: 'Tous travaux de gros œuvre réalisés par des professionnels qualifiés et certifiés.', en: 'All structural work carried out by qualified and certified professionals.' },
  'service.3.features.0': { fr: 'Maçonnerie', en: 'Masonry' },
  'service.3.features.1': { fr: 'Terrassement', en: 'Excavation' },
  'service.3.features.2': { fr: 'Fondations', en: 'Foundations' },
  
  'service.4.title': { fr: 'Second œuvre', en: 'Finishing work' },
  'service.4.description': { fr: 'Finitions et aménagements intérieurs pour parfaire votre projet de construction.', en: 'Interior finishes and fittings to perfect your construction project.' },
  'service.4.features.0': { fr: 'Plomberie', en: 'Plumbing' },
  'service.4.features.1': { fr: 'Électricité', en: 'Electricity' },
  'service.4.features.2': { fr: 'Menuiserie', en: 'Carpentry' },
  
  'service.5.title': { fr: 'Aménagement', en: 'Fitting' },
  'service.5.description': { fr: 'Aménagement et décoration pour optimiser et embellir vos espaces de vie.', en: 'Fitting and decoration to optimize and beautify your living spaces.' },
  'service.5.features.0': { fr: 'Peinture', en: 'Painting' },
  'service.5.features.1': { fr: 'Revêtements', en: 'Floorings' },
  'service.5.features.2': { fr: 'Agencement', en: 'Layout' },
  
  'service.6.title': { fr: 'Extérieurs', en: 'Outdoors' },
  'service.6.description': { fr: 'Création et aménagement de vos espaces extérieurs pour profiter pleinement de votre jardin.', en: 'Creation and development of your outdoor spaces to fully enjoy your garden.' },
  'service.6.features.0': { fr: 'Terrasses', en: 'Terraces' },
  'service.6.features.1': { fr: 'Clôtures', en: 'Fences' },
  'service.6.features.2': { fr: 'Allées', en: 'Driveways' },
  
  // About
  'about.title': { fr: 'SEMAN-BTP, votre partenaire de confiance depuis plus de 2 ans', en: 'SEMAN-BTP, your trusted partner for over 2 years' },
  'about.p1': { fr: 'Fondée en 2024, SEMEN-BTP est une entreprise familiale spécialisée dans tous les travaux de construction, rénovation et aménagement. Notre expérience et notre savoir-faire nous permettent de réaliser des projets de toutes envergures avec professionnalisme et rigueur.', en: 'Founded in 2024, SEMEN-BTP is a family-owned company specializing in all construction, renovation, and fitting work. Our experience and expertise allow us to carry out projects of all sizes with professionalism and rigor.' },
  'about.p2': { fr: 'Nous mettons un point d\'honneur à offrir à nos clients un service personnalisé, des conseils avisés et un suivi rigoureux de chaque chantier. Notre équipe d\'artisans qualifiés et passionnés s\'engage à transformer vos idées en réalité.', en: 'We take pride in offering our clients personalized service, expert advice, and rigorous monitoring of each project. Our team of qualified and passionate craftsmen is committed to turning your ideas into reality.' },
  'about.quote': { fr: '"Notre mission : bâtir des projets durables et de qualité qui dépassent vos attentes"', en: '"Our mission: building durable and quality projects that exceed your expectations"' },
  'about.author': { fr: '- Jean SEMEN, Fondateur', en: '- Jean SEMEN, Founder' },
  'about.years': { fr: 'Années d\'excellence', en: 'Years of excellence' },
  
  // Values
  'values.0.title': { fr: 'Qualité garantie', en: 'Guaranteed quality' },
  'values.0.description': { fr: 'Nous utilisons uniquement des matériaux de première qualité et respectons les normes en vigueur.', en: 'We only use first-quality materials and comply with current standards.' },
  'values.1.title': { fr: 'Respect des délais', en: 'Deadline compliance' },
  'values.1.description': { fr: 'Nos équipes s\'engagent à respecter les délais convenus pour la livraison de votre projet.', en: 'Our teams are committed to meeting the agreed deadlines for your project delivery.' },
  'values.2.title': { fr: 'Satisfaction client', en: 'Customer satisfaction' },
  'values.2.description': { fr: 'Votre satisfaction est notre priorité. Nous vous accompagnons à chaque étape du projet.', en: 'Your satisfaction is our priority. We accompany you at every stage of the project.' },
  'values.3.title': { fr: 'Certifications', en: 'Certifications' },
  'values.3.description': { fr: 'Entreprise certifiée RGE et qualifiée pour tous types de travaux de construction.', en: 'RGE certified company qualified for all types of construction work.' },
  
  // Projects
  'projects.title': { fr: 'Des projets qui parlent pour nous', en: 'Projects that speak for us' },
  'projects.subtitle': { fr: 'Découvrez quelques-unes de nos réalisations récentes et laissez-vous inspirer', en: 'Discover some of our recent achievements and let yourself be inspired' },
  'projects.cta': { fr: 'Contactez-nous', en: 'Contact us' },
  'projects.more': { fr: 'Envie de voir plus de nos réalisations ou de discuter de votre projet ?', en: 'Want to see more of our work or discuss your project?' },
  
  // Testimonials
  'testimonials.title': { fr: 'Ils nous font confiance', en: 'They trust us' },
  'testimonials.subtitle': { fr: 'La satisfaction de nos clients est notre plus belle récompense', en: 'Customer satisfaction is our greatest reward' },
  'testimonials.rating': { fr: 'Note moyenne : 5/5', en: 'Average rating: 5/5' },
  'testimonials.reviews': { fr: 'Basée sur plus de 20 avis clients', en: 'Based on more than 20 customer reviews' },
  'testimonials.recommend': { fr: '100% de nos clients recommandent nos services', en: '100% of our customers recommend our services' },
  
  // Contact
  'contact.title': { fr: 'Parlons de votre projet', en: 'Let\'s talk about your project' },
  'contact.subtitle': { fr: 'Une question ? Un projet ? N\'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais', en: 'A question? A project? Don\'t hesitate to contact us, we will respond as soon as possible' },
  'contact.form.title': { fr: 'Demande de devis gratuit', en: 'Free quote request' },
  'contact.form.name': { fr: 'Nom complet *', en: 'Full name *' },
  'contact.form.phone': { fr: 'Téléphone *', en: 'Phone *' },
  'contact.form.email': { fr: 'Email *', en: 'Email *' },
  'contact.form.subject': { fr: 'Type de projet *', en: 'Project type *' },
  'contact.form.message': { fr: 'Décrivez votre projet *', en: 'Describe your project *' },
  'contact.form.submit': { fr: 'Envoyer ma demande', en: 'Send my request' },
  'contact.form.required': { fr: '* Champs obligatoires - Vos données sont protégées et ne seront pas partagées', en: '* Required fields - Your data is protected and will not be shared' },
  'contact.form.subject.0': { fr: 'Sélectionnez un type de projet', en: 'Select a project type' },
  'contact.form.subject.1': { fr: 'Construction neuve', en: 'New construction' },
  'contact.form.subject.2': { fr: 'Rénovation', en: 'Renovation' },
  'contact.form.subject.3': { fr: 'Extension', en: 'Extension' },
  'contact.form.subject.4': { fr: 'Aménagement', en: 'Fitting' },
  'contact.form.subject.5': { fr: 'Autre', en: 'Other' },
  'contact.form.placeholder.name': { fr: 'Jean Dupont', en: 'John Smith' },
  'contact.form.placeholder.phone': { fr: '+33 6 12 34 56 78', en: '+1 234 567 890' },
  'contact.form.placeholder.email': { fr: 'jean.dupont@email.com', en: 'john.smith@email.com' },
  'contact.form.placeholder.message': { fr: 'Décrivez-nous votre projet en détail...', en: 'Describe your project in detail...' },
  'contact.success': { fr: 'Message envoyé !', en: 'Message sent!' },
  'contact.success.desc': { fr: 'Nous vous répondrons dans les 24 heures.', en: 'We will respond within 24 hours.' },
  'contact.info.address': { fr: 'parcelles assainies unite 9\nDakar, Sénégal', en: 'Assanied plots unit 9\nDakar, Senegal' },
  'contact.info.phone': { fr: '+221 784307723 / +221 774526722', en: '+221 784307723 / +221 774526722' },
  'contact.info.hours': { fr: 'Lun - Ven : 8h - 18h', en: 'Mon - Fri: 8am - 6pm' },
  'contact.info.email': { fr: 'semanbtp59@gmail.com', en: 'semanbtp59@gmail.com' },
  'contact.info.email.desc': { fr: 'Réponse sous 24h', en: 'Response within 24h' },
  'contact.urgent.title': { fr: 'Intervention rapide', en: 'Rapid intervention' },
  'contact.urgent.desc': { fr: 'Besoin d\'une intervention en urgence ? Contactez-nous directement par téléphone.', en: 'Need urgent intervention? Contact us directly by phone.' },
  'contact.call': { fr: 'Appeler maintenant', en: 'Call now' },

  // Testimonials
  'testimonial.1': { fr: 'SEMAN-BTP a réalisé la rénovation complète de notre maison. Le résultat dépasse nos espérances ! Une équipe professionnelle, à l\'écoute et respectueuse des délais. Je recommande vivement.', en: 'SEMAN-BTP completed the full renovation of our house. The result exceeds our expectations! A professional team, attentive and respectful of deadlines. I highly recommend.' },
  'testimonial.2': { fr: 'Nous travaillons avec SEMAN-BTP depuis 5 ans sur plusieurs projets de construction. Leur expertise et leur sérieux font d\'eux un partenaire de confiance. Qualité et respect des délais sont toujours au rendez-vous.', en: 'We have been working with SEMAN-BTP for 5 years on several construction projects. Their expertise and seriousness make them a trusted partner. Quality and deadline compliance are always met.' },
  'testimonial.3': { fr: 'Extension de notre maison réalisée avec brio. L\'équipe a su nous conseiller et nous accompagner tout au long du projet. Le chantier était propre et organisé. Merci pour votre professionnalisme !', en: 'Extension of our house carried out with brio. The team was able to advise and support us throughout the project. The worksite was clean and organized. Thank you for your professionalism!' },
  
  // Client Testimonials
  'testimonial.4': { fr: 'SAHELIA CONSTRUCTION a fait confiance à SEMAN-BTP pour plusieurs projets d\'infrastructure. Leur rigueur professionnelle, le respect des délais et la qualité irréprochable des travaux font d\'eux un partenaire de choix.', en: 'SAHELIA CONSTRUCTION trusted SEMAN-BTP for several infrastructure projects. Their professional rigor, deadline compliance, and impeccable work quality make them a partner of choice.' },
  'testimonial.5': { fr: 'CBAO BANK a collaboré avec SEMAN-BTP pour l\'aménagement de nos agences. Une équipe sérieuse, réactive et disponible. Les travaux ont été livrés dans les temps avec un résultat très satisfaisant.', en: 'CBAO BANK collaborated with SEMAN-BTP for the fitting out of our branches. A serious, responsive, and available team. The work was delivered on time with a very satisfactory result.' },
  'testimonial.6': { fr: 'SUNU BANK témoigne de son entière satisfaction suite aux travaux réalisés par SEMAN-BTP. Professionnalisme, expertise technique et respect du budget sont au rendez-vous. Nous recommandons.', en: 'SUNU BANK expresses its complete satisfaction following the work carried out by SEMAN-BTP. Professionalism, technical expertise, and budget compliance are all present. We recommend.' },
  'testimonial.7': { fr: 'TIS HYDROCARBURES a bénéficié de l\'expertise SEMAN-BTP pour des travaux d\'envergure. Une équipe compétente, des délais respectés et un travail de qualité conformes à nos standards exigeants.', en: 'TIS HYDROCARBURES benefited from SEMAN-BTP expertise for large-scale work. A competent team, met deadlines, and quality work that meets our demanding standards.' },
  'testimonial.8': { fr: 'Prokhan fer a travaillé avec SEMAN-BTP pour l\'extension de nos installations industrielles. Un partenaire fiable qui comprend les enjeux techniques et budgétaires. Livraison conforme et délais respectés.', en: 'Prokhan fer worked with SEMAN-BTP for the extension of our industrial facilities. A reliable partner who understands technical and budgetary challenges. Conforming delivery and met deadlines.' },

  // Projects
  'projects.1.title': { fr: 'Résidence Les Chênes', en: 'Les Chênes Residence' },
  'projects.1.category': { fr: 'Construction neuve', en: 'New construction' },
  'projects.1.description': { fr: 'Construction de 12 appartements de standing avec espaces verts', en: 'Construction of 12 luxury apartments with green spaces' },
  'projects.2.title': { fr: 'Villa Moderne', en: 'Modern Villa' },
  'projects.2.category': { fr: 'Maison individuelle', en: 'Individual house' },
  'projects.2.description': { fr: 'Villa contemporaine de 250m² avec piscine et jardin paysager', en: 'Contemporary 250m² villa with pool and landscaped garden' },
  'projects.3.title': { fr: 'Centre Commercial', en: 'Shopping Center' },
  'projects.3.category': { fr: 'Bâtiment commercial', en: 'Commercial building' },
  'projects.3.description': { fr: 'Rénovation complète d\'un centre commercial de 3000m²', en: 'Complete renovation of a 3000m² shopping center' },
  'projects.4.title': { fr: 'Rénovation Haussmannien', en: 'Haussmannian Renovation' },
  'projects.4.category': { fr: 'Rénovation', en: 'Renovation' },
  'projects.4.description': { fr: 'Rénovation d\'un appartement haussmannien avec conservation du cachet', en: 'Renovation of a Haussmannian apartment while preserving its character' },
  'projects.5.title': { fr: 'Bureaux Eco-Responsables', en: 'Eco-Responsible Offices' },
  'projects.5.category': { fr: 'Construction neuve', en: 'New construction' },
  'projects.5.description': { fr: 'Bâtiment de bureaux RT2020 avec panneaux solaires', en: 'RT2020 office building with solar panels' },
  'projects.6.title': { fr: 'Extension Moderne', en: 'Modern Extension' },
  'projects.6.category': { fr: 'Extension', en: 'Extension' },
  'projects.6.description': { fr: 'Extension de 60m² avec véranda et terrasse sur pilotis', en: '60m² extension with conservatory and raised terrace' },
  
  // Footer
  'footer.tagline': { fr: 'Bâtir vos projets, façonner votre confort, la solidité de nos engagements', en: 'Building your future' },
  'footer.description': { fr: 'Votre partenaire de confiance pour tous vos projets de construction, rénovation et aménagement depuis plus de 2 ans.', en: 'Your trusted partner for all your construction, renovation, and fitting projects for over 2 years.' },
  'footer.nav.home': { fr: 'Accueil', en: 'Home' },
  'footer.nav.services': { fr: 'Services', en: 'Services' },
  'footer.nav.about': { fr: 'À propos', en: 'About' },
  'footer.nav.projects': { fr: 'Réalisations', en: 'Projects' },
  'footer.nav.contact': { fr: 'Contact', en: 'Contact' },
  'footer.services.0': { fr: 'Construction neuve', en: 'New construction' },
  'footer.services.1': { fr: 'Rénovation complète', en: 'Complete renovation' },
  'footer.services.2': { fr: 'Extension & Surélévation', en: 'Extension & Elevation' },
  'footer.services.3': { fr: 'Aménagement intérieur', en: 'Interior fitting' },
  'footer.services.4': { fr: 'Travaux de maçonnerie', en: 'Masonry work' },
  'footer.services.5': { fr: 'Gros œuvre & Second œuvre', en: 'Structural & Finishing' },
  'footer.contact.address': { fr: 'parcelles assainies unite 9\nDakar, Senegal', en: 'Assanied plots unit 9\nDakar, Senegal' },
  'footer.copyright': { fr: `© ${new Date().getFullYear()} SEMAN-BTP. Tous droits réservés.`, en: `© ${new Date().getFullYear()} SEMAN-BTP. All rights reserved.` },
  'footer.legal': { fr: 'Mentions légales', en: 'Legal notices' },
  'footer.privacy': { fr: 'Politique de confidentialité', en: 'Privacy policy' },
  'footer.terms': { fr: 'CGV', en: 'T&Cs' },
  'footer.certifications': { fr: 'Certifications:', en: 'Certifications:' },
  
  // Top bar
  'topbar.available': { fr: 'Disponible du lundi au vendredi : 8h - 18h', en: 'Available Monday to Friday: 8am - 6pm' },
};

export const getTranslation = (key: string, lang: Language): string => {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation missing for key: ${key}`);
    return key;
  }
  return translation[lang];
};

