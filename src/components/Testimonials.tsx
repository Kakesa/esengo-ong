import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Aaron Muhindo",
    role: "Directeur, Centre Médical Kinshasa",
    content: "Grâce à Esengo Fondation, nous avons pu digitaliser notre système de gestion des patients. L'équipe a été exceptionnelle dans la compréhension de nos besoins spécifiques.",
    rating: 5,
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U08869QT7B8-d7f3ed476a1e-512",
  },
  {
    name: "Evy Ngoyi",
    role: "Fondateur, AgriCoop RDC",
    content: "La solution AgriTech développée par Esengo Fondation a révolutionné notre coopérative. Nos agriculteurs ont augmenté leurs rendements de manière significative.",
    rating: 5,
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U088A5J78KF-10a096933108-512",
  },
  {
    name: "Chrestien Kalala",
    role: "Responsable IT, ONG Avenir",
    content: "Les formations dispensées par Esengo Fondation ont permis à notre équipe de devenir autonome dans la maintenance de nos outils. Un investissement qui continue de porter ses fruits.",
    rating: 5,
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U08A1GQMA8G-28ee3b7acccd-512",
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-primary-foreground/80">
              Des partenaires satisfaits témoignent de l'impact de notre collaboration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} direction="up" delay={index * 150}>
              <div className="relative bg-card rounded-2xl p-8 shadow-card h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                    <Quote className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
