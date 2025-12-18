import { Heart, GraduationCap, Stethoscope, Home } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const programs = [
  {
    icon: Heart,
    title: "Nutrition & Alimentation",
    description: "Nous fournissons des repas nutritifs et des suppléments alimentaires aux enfants souffrant de malnutrition sévère et modérée.",
    features: ["Centres Nutritionnels", "Repas Scolaires", "Suppléments Vitaminés", "Suivi Médical"],
  },
  {
    icon: GraduationCap,
    title: "Éducation & Formation",
    description: "Nous offrons l'accès à l'éducation aux enfants défavorisés et formons les communautés pour un développement durable.",
    features: ["Scolarisation", "Fournitures Scolaires", "Formation des Enseignants", "Alphabétisation"],
  },
  {
    icon: Stethoscope,
    title: "Santé & Soins Médicaux",
    description: "Nous assurons l'accès aux soins de santé primaires, aux vaccinations et au suivi médical pour les enfants vulnérables.",
    features: ["Cliniques Mobiles", "Vaccinations", "Soins Prénataux", "Médicaments"],
  },
  {
    icon: Home,
    title: "Protection & Abri",
    description: "Nous protégeons les enfants orphelins et abandonnés en leur offrant un environnement sûr et familial.",
    features: ["Centres d'Accueil", "Réunification Familiale", "Soutien Psychologique", "Aide Juridique"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Programmes</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Comment Nous Aidons
            </h2>
            <p className="text-muted-foreground">
              Des programmes complets pour répondre aux besoins essentiels 
              des enfants et transformer leurs vies durablement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ScrollReveal key={program.title} direction="up" delay={index * 100}>
              <div className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <program.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
