import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  {
    name: "UNICEF",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop",
  },
  {
    name: "OMS",
    logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=200&h=100&fit=crop",
  },
  {
    name: "Croix-Rouge",
    logo: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&h=100&fit=crop",
  },
  {
    name: "PAM",
    logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=100&fit=crop",
  },
  {
    name: "USAID",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=200&h=100&fit=crop",
  },
  {
    name: "Union Européenne",
    logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=100&fit=crop",
  },
];

const Clients = () => {
  return (
    <section id="partenaires" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nos Partenaires
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Ils Soutiennent Notre Mission
            </h2>
            <p className="text-muted-foreground">
              Grâce à nos partenaires, nous pouvons étendre notre impact et aider 
              plus d'enfants chaque année.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} direction="up" delay={index * 50}>
              <div className="group flex items-center justify-center p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full h-16 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2 font-medium">
                {partner.name}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <ScrollReveal direction="up">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Handshake className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Devenez Notre Partenaire
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Rejoignez notre réseau de partenaires et contribuez à changer la vie de milliers d'enfants. 
              Ensemble, nous pouvons faire une différence durable.
            </p>
            <Button variant="accent" size="lg" className="group">
              Devenir Partenaire
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Clients;
