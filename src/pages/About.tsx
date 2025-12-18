import { Link } from "react-router-dom";
import { ArrowLeft, Target, Heart, Users, Lightbulb, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Nous agissons avec amour et empathie envers chaque enfant que nous aidons.",
  },
  {
    icon: Users,
    title: "Solidarité",
    description: "Nous croyons que c'est ensemble que nous pouvons créer un changement durable.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous développons des solutions créatives pour répondre aux défis humanitaires.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Chaque action est orientée vers des résultats mesurables et durables.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous agissons avec transparence et responsabilité dans toutes nos actions.",
  },
  {
    icon: Globe,
    title: "Engagement Local",
    description: "Nous travaillons main dans la main avec les communautés locales.",
  },
];

const milestones = [
  {
    year: "2016",
    title: "Fondation",
    description: "Création d'Esengo Foundation à Kinshasa par un groupe de bénévoles passionnés.",
  },
  {
    year: "2017",
    title: "Premier Centre Nutritionnel",
    description: "Ouverture de notre premier centre de nutrition à Kinshasa.",
  },
  {
    year: "2019",
    title: "Expansion Régionale",
    description: "Extension de nos programmes au Kasaï et au Nord-Kivu.",
  },
  {
    year: "2020",
    title: "5,000 Enfants Aidés",
    description: "Franchissement du cap des 5,000 enfants bénéficiaires de nos programmes.",
  },
  {
    year: "2022",
    title: "Partenariats Internationaux",
    description: "Signature de partenariats avec l'UNICEF et le PAM.",
  },
  {
    year: "2024",
    title: "15,000+ Enfants",
    description: "Plus de 15,000 enfants aidés et 25 provinces couvertes.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <ScrollReveal direction="up">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Notre Histoire
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
              À Propos d'Esengo Foundation
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Une ONG humanitaire née de la volonté de transformer la vie des enfants 
              les plus vulnérables et de leur offrir un avenir meilleur.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Notre Mission
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Chaque Enfant Mérite de Vivre et de S'épanouir
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esengo Foundation est née de la conviction que chaque enfant a le droit 
                  de vivre, de grandir en bonne santé et de réaliser son plein potentiel. 
                  Notre nom, "Esengo", signifie "joie" en lingala, reflétant notre engagement 
                  à apporter espoir et bonheur aux enfants que nous servons.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fondée en 2016 à Kinshasa, notre organisation a commencé comme un petit 
                  groupe de bénévoles déterminés à lutter contre la malnutrition infantile. 
                  Aujourd'hui, nous sommes devenus une ONG reconnue, opérant dans 25 provinces 
                  de la République Démocratique du Congo.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre équipe pluridisciplinaire réunit des médecins, nutritionnistes, 
                  éducateurs et travailleurs sociaux partageant une vision commune : 
                  un monde où aucun enfant ne souffre de la faim ou du manque de soins.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                  alt="Enfants aidés par Esengo Foundation"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold">8+</p>
                  <p className="text-sm">Années d'Engagement</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Ce qui nous guide
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-muted-foreground">
                Les principes fondamentaux qui guident chacune de nos actions sur le terrain.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} direction="up" delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Notre Parcours
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Les Étapes Clés
              </h2>
              <p className="text-muted-foreground">
                Un voyage de croissance, de défis surmontés et de vies transformées.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal
                  key={milestone.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card p-6 rounded-2xl shadow-card inline-block">
                        <span className="text-accent font-bold text-2xl">{milestone.year}</span>
                        <h3 className="font-display text-xl font-bold text-foreground mt-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Rejoignez Notre Mission
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Ensemble, nous pouvons offrir un avenir meilleur à des milliers d'enfants. 
              Chaque don, chaque action compte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Faire un Don
              </Button>
              <Link to="/#contact">
                <Button variant="hero" size="lg">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Link */}
      <footer className="py-8 bg-secondary text-center">
        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
          ← Retour à l'accueil
        </Link>
      </footer>
    </div>
  );
};

export default About;
