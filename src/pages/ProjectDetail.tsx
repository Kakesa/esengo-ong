import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Building2, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projet non trouvé</h1>
          <Link to="/#projets">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.mainImage, ...project.gallery];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <Link to="/#projets" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {project.fullDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-5 w-5 text-primary" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{project.year}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={allImages[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-3 rounded-full shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {allImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                    currentImageIndex === index
                      ? "ring-4 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-24 h-16 object-cover"
                  />
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center text-destructive">
                    !
                  </span>
                  Le Défi
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-card p-8 rounded-2xl shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    ✓
                  </span>
                  Notre Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Technologies Utilisées
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <ScrollReveal key={tech} direction="scale" delay={index * 100}>
                <span className="px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {tech}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Résultats Obtenus
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {project.results.map((result, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{result}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
              Témoignages du Projet
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Découvrez ce que les parties prenantes de ce projet ont à dire sur leur expérience.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {project.testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <div className="bg-card p-8 rounded-2xl shadow-card relative">
                  <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">
                    "
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="scale">
            <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Vous avez un projet similaire ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Discutons de votre idée et voyons comment nous pouvons vous aider à la transformer en réalité.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contactez-nous
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
