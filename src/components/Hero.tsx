import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, HandHeart } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Enfants aidés par Esengo Foundation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6 animate-fade-in-up">
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">ONG Humanitaire</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ensemble, Offrons un{" "}
            <span className="text-accent">Avenir Meilleur</span>{" "}
            aux Enfants
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Esengo Foundation est une ONG dédiée à lutter contre la malnutrition infantile et à offrir 
            un avenir meilleur aux enfants vulnérables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="accent" size="lg" className="group">
              Faire un Don
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="lg">
              Découvrir Nos Actions
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mx-auto mb-2">
                <HandHeart className="h-6 w-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">15,000+</p>
              <p className="text-sm text-primary-foreground/70">Enfants Aidés</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mx-auto mb-2">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Partenaires</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 mx-auto mb-2">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-primary-foreground">8 ans</p>
              <p className="text-sm text-primary-foreground/70">D'Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
