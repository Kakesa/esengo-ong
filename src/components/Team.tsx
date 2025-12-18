import { Linkedin, Twitter, Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Corneille Lofoyi",
    role: "Directeur Général & Co-fondateur",
    bio: "15 ans d'expérience en développement logiciel et gestion de projets tech en Afrique.",
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U06DGRB364R-a0e3fc69ea7e-512",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Macha",
    role: "Directrice Technique",
    bio: "Experte en architecture logicielle et passionnée par l'innovation technologique.",
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U06GC6PBTQU-g0862d1c4523-512",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Christian Mwanya",
    role: "Lead Developer",
    bio: "Spécialiste Full-Stack avec une passion pour les solutions web et mobiles.",
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U05695K70KS-563c8408ebac-512",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Yasmine Nkima",
    role: "Responsable Formation",
    bio: "Éducatrice tech dédiée à former la prochaine génération de développeurs africains.",
    image: "https://ca.slack-edge.com/T011KUB7Y3Y-U057T39DVPX-c17a742db2e0-512",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Équipe</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-muted-foreground">
              Des professionnels passionnés dédiés à créer un impact positif 
              à travers la technologie.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} direction="up" delay={index * 100}>
              <div className="group text-center">
                {/* Image */}
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
