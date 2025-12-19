import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  {
    name: "UNICEF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/UNICEF_Logo_%28cropped%29.png/250px-UNICEF_Logo_%28cropped%29.png",
  },
  {
    name: "OMS",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Croix-Rouge",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX////+AAK0tLSxsbHyAAD5AQr32tr3AAD32dbnrqfrmpP7AwP+AQn8//3//vv9//jnd3rph4nxaGj0Zmb/+/96enr3//vjAADsAAD0///15eXfcHToc3rdb3f23tvuu7XnkI7oqanqqqTtvcDlYVryV2boaWr/+O3dY2TuiIPzfn3vlpnpmYzor7P31cf02s702cHqL7HOAAACQ0lEQVR4nO3c7W7bIBiGYcggbAXs1aUO6bI2+8ratd12/kc3mKb9KZjXRhme9NxVpUiNnSuQSjayw643q+uabdjq2rBXrQkvA4oaUNSAogYUNaCoAUUNKGrnQdm6zetQNhdzrhmqy8Q6O45jI1RmqJgLf6jYax3KZWJx/pZPYB2qz2btft8GdfPu8Dbd4fD+tmuD2nqdTinuXy/fbx1K8HRScwEUUEABBRRQQAEFFFBAAQUUUEABBRRQQJ0XZeMy+N2bckedQXFu/LG4+YePn9KLtSnUGFGfRTmVIwWs9LvJbb3w3n+hj1RvO8eG7CAQ+r0aW3gKV0pczUIxdlXYaeEl86P4J8ON0TNQo+0sG2qmL6oKSW2kGugoa3tr66Yv/k4PtdbGqBkjFf/76lAUd1DNmb6Iqvugk1AKKKCAAgoooIACCqgaVGTNOBweXTggPlWcOOh48C5N8XnilL4eJjlS4Wi4H1R8M/FI++/Pi4eTrsL23HvOTz0ZxboxoJYPVBwmWRxoIWahXDeyr/cqvNnJ9MQZljRa7Arbh5PRYQaqt84+X5R7yLHC9Ihvpa0fL56e0xfJpT9TndtTLl67za26hLnbEVZd+syL/DdLQUABBRRQQAEFFFBAAQUUUEABBRRQ/xSlpAyoRvf3bb1MpzkX35fv9zzTx7Xe/WiGMsmkF1xsm6Ey46Q09z+X319bd8/oZa7j8fKmESpfAO1Xh6oLKGpAUQOKGlDUgKIGFDWgqAFFDShqQFHbsFV+yegav471Fw3XTkMC0rwRAAAAAElFTkSuQmCC",
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
