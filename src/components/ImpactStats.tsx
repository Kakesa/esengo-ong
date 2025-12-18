import { TrendingUp, Users, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Enfants Aidés",
    description: "Enfants ayant bénéficié de nos programmes",
  },
  {
    icon: MapPin,
    value: "25",
    label: "Provinces Couvertes",
    description: "Zones d'intervention à travers la RDC",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "Taux de Réussite",
    description: "Enfants malnutris rétablis avec succès",
  },
  {
    icon: Calendar,
    value: "8",
    label: "Années d'Action",
    description: "D'engagement continu sur le terrain",
  },
];

const ImpactStats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Notre Impact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
              Des Chiffres qui Parlent
            </h2>
            <p className="text-primary-foreground/80">
              Chaque chiffre représente une vie transformée, une famille aidée, 
              un espoir renouvelé.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={index * 100}>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-primary-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
