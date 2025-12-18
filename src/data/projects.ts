export interface ProjectTestimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  impact: string;
  duration: string;
  client: string;
  year: string;
  mainImage: string;
  gallery: string[];
  color: string;
  testimonials: ProjectTestimonial[];
}

export const projects: Project[] = [
  {
    id: "nutrition-kasai",
    title: "Programme Nutrition Kasaï",
    shortDescription: "Programme de lutte contre la malnutrition infantile dans la région du Kasaï touchant plus de 5,000 enfants.",
    fullDescription: "Face à la crise nutritionnelle dans la région du Kasaï, nous avons déployé un programme complet de lutte contre la malnutrition. Ce projet a permis de créer 12 centres nutritionnels, de former 200 agents de santé communautaires et de distribuer des suppléments alimentaires thérapeutiques à des milliers d'enfants souffrant de malnutrition aiguë.",
    challenge: "La région du Kasaï faisait face à une crise nutritionnelle aiguë avec des taux de malnutrition infantile parmi les plus élevés du pays. L'accès aux zones rurales isolées et le manque de personnel médical qualifié rendaient l'intervention complexe.",
    solution: "Mise en place de cliniques mobiles, formation intensive d'agents locaux, partenariat avec le PAM pour l'approvisionnement en suppléments alimentaires, et programmes d'éducation nutritionnelle communautaire pour sensibiliser les familles.",
    results: [
      "5,200 enfants traités pour malnutrition",
      "Taux de guérison de 92%",
      "12 centres nutritionnels créés",
      "200 agents de santé formés",
      "Réduction de 60% du taux de malnutrition dans les zones couvertes"
    ],
    technologies: ["Nutrition Thérapeutique", "Santé Communautaire", "Formation", "Suivi Médical"],
    impact: "5,200 enfants sauvés",
    duration: "18 mois",
    client: "Région du Kasaï",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594708767771-a7502f4e7f70?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1597576659563-e67e3db21482?w=800&h=600&fit=crop"
    ],
    color: "from-rose-500/20 to-pink-500/20",
    testimonials: [
      {
        name: "Marie Kabongo",
        role: "Mère bénéficiaire",
        company: "Kasaï",
        content: "Grâce à Esengo Foundation, mon fils a retrouvé la santé. Il était très malade, mais après le traitement, il joue et rit à nouveau. Je suis éternellement reconnaissante.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop"
      },
      {
        name: "Dr. Jean-Pierre Mukendi",
        role: "Médecin Coordinateur",
        company: "Centre Nutritionnel Kasaï",
        content: "Le programme d'Esengo Foundation a transformé notre capacité à traiter la malnutrition. Les résultats sont remarquables et durables.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "ecoles-kinshasa",
    title: "Écoles pour Tous - Kinshasa",
    shortDescription: "Programme de scolarisation des enfants des rues et orphelins dans les quartiers défavorisés de Kinshasa.",
    fullDescription: "Ce projet vise à offrir une éducation de qualité aux enfants vulnérables de Kinshasa. Nous avons construit 3 écoles, fourni des uniformes et fournitures scolaires à 2,000 enfants, et mis en place un programme de cantine scolaire pour assurer au moins un repas nutritif par jour.",
    challenge: "Des milliers d'enfants à Kinshasa n'avaient pas accès à l'éducation en raison de la pauvreté, de l'abandon ou du statut d'orphelin. Beaucoup vivaient dans la rue et avaient subi des traumatismes importants.",
    solution: "Nous avons créé des classes de rattrapage adaptées, mis en place un accompagnement psychosocial, construit de nouvelles écoles dans les quartiers défavorisés, et établi un programme de bourses et d'aide aux familles.",
    results: [
      "2,000 enfants scolarisés",
      "3 écoles construites",
      "85% de taux de réussite scolaire",
      "500 repas servis quotidiennement",
      "150 enfants réunifiés avec leurs familles"
    ],
    technologies: ["Éducation", "Infrastructure", "Cantine Scolaire", "Soutien Psychologique"],
    impact: "2,000 enfants scolarisés",
    duration: "24 mois",
    client: "Kinshasa",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    testimonials: [
      {
        name: "Patrick Mbala",
        role: "Élève, 12 ans",
        company: "École Esengo Kinshasa",
        content: "Avant, je vivais dans la rue sans espoir. Maintenant je vais à l'école et je rêve de devenir médecin pour aider les autres enfants comme moi.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      {
        name: "Sœur Françoise",
        role: "Directrice",
        company: "École Esengo Kinshasa",
        content: "Voir ces enfants passer de la rue à la salle de classe est un miracle quotidien. Esengo Foundation donne une seconde chance à ces enfants.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
      }
    ]
  },
  {
    id: "sante-nord-kivu",
    title: "Cliniques Mobiles Nord-Kivu",
    shortDescription: "Déploiement de cliniques mobiles pour fournir des soins médicaux aux enfants dans les zones de conflit.",
    fullDescription: "Dans les zones affectées par les conflits du Nord-Kivu, l'accès aux soins de santé est extrêmement limité. Nos cliniques mobiles parcourent les villages reculés pour offrir des consultations médicales, des vaccinations et des soins d'urgence aux enfants et leurs familles.",
    challenge: "Les zones de conflit du Nord-Kivu présentent des défis majeurs : insécurité, routes impraticables, manque de médicaments, et populations déplacées difficiles à atteindre.",
    solution: "Coordination avec les autorités locales pour la sécurité, utilisation de véhicules tout-terrain équipés, maintien d'un stock de médicaments d'urgence, et création d'un réseau d'agents communautaires pour localiser les déplacés.",
    results: [
      "8,000 consultations médicales réalisées",
      "3,500 enfants vaccinés",
      "15 villages couverts régulièrement",
      "Réduction de 40% de la mortalité infantile",
      "Formation de 50 agents de santé locaux"
    ],
    technologies: ["Cliniques Mobiles", "Vaccination", "Soins d'Urgence", "Médicaments Essentiels"],
    impact: "8,000 consultations",
    duration: "12 mois",
    client: "Nord-Kivu",
    year: "2024",
    mainImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551601651-bc60f254d532?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=600&fit=crop"
    ],
    color: "from-emerald-500/20 to-green-500/20",
    testimonials: [
      {
        name: "Chef Mumbere",
        role: "Chef de village",
        company: "Nord-Kivu",
        content: "Les cliniques mobiles d'Esengo sont notre seul accès aux soins. Sans eux, beaucoup d'enfants de notre village seraient morts de maladies évitables.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
      },
      {
        name: "Dr. Amani Byamungu",
        role: "Médecin Chef",
        company: "Clinique Mobile Esengo",
        content: "Travailler dans ces conditions est difficile, mais voir le sourire des enfants guéris nous donne la force de continuer. Chaque vie sauvée compte.",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop"
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
