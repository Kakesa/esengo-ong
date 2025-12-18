import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Contactez-Nous
            </h2>
            <p className="text-muted-foreground">
              Vous souhaitez nous soutenir, devenir partenaire ou en savoir plus sur nos actions ? 
              Nous serions ravis d'échanger avec vous.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Informations de Contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:contact@esengofoundation.org" className="text-muted-foreground hover:text-accent transition-colors">
                        contact@esengofoundation.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Téléphone</p>
                      <a href="tel:+243858726825" className="text-muted-foreground hover:text-accent transition-colors">
                        +243 858 726 825
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Adresse</p>
                      <p className="text-muted-foreground">
                        38 Avenue de la Paix<br />
                        Kinshasa, RDC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-secondary border-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-secondary border-0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                    className="bg-secondary border-0"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    required
                    className="bg-secondary border-0 resize-none"
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full group">
                  <Send className="h-5 w-5" />
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
