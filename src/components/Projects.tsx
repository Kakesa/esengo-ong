import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

const Projects = () => {
  return (
    <section id="projets" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Actions</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Nos Projets sur le Terrain
            </h2>
            <p className="text-muted-foreground">
              Découvrez comment nous transformons la vie de milliers d'enfants 
              à travers nos programmes de nutrition, éducation et santé.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 150}>
              <Link to={`/projet/${project.id}`} className="block h-full">
                <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent`} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Impact */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-accent">
                        {project.impact}
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <span>Voir plus</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
