import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "Accueil", href: "#accueil", isAnchor: true },
    { label: "À Propos", href: "/a-propos", isAnchor: false },
    { label: "Nos Programmes", href: "#services", isAnchor: true },
    { label: "Nos Actions", href: "#projets", isAnchor: true },
    { label: "Partenaires", href: "#partenaires", isAnchor: true },
    { label: "Contact", href: "#contact", isAnchor: true },
  ];

  const programs = [
    "Nutrition & Alimentation",
    "Éducation & Formation",
    "Santé & Soins Médicaux",
    "Protection & Abri",
  ];

  const legal = [
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions d'utilisation", href: "#" },
    { label: "Mentions légales", href: "#" },
  ];

  const social = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#accueil" className="font-display text-2xl font-bold flex items-center gap-2">
              <img src={logo} alt="Logo Esengo Foundation" className="h-8 w-8 border border-primary rounded-full" />
              Esengo Foundation
            </a>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              ONG humanitaire dédiée à lutter contre la malnutrition infantile 
              et offrir un avenir meilleur aux enfants vulnérables.
            </p>
            <div className="flex gap-3 mt-6">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isAnchor ? (
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold mb-4">Nos Programmes</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-sm text-primary-foreground/70">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold mb-4">Informations</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
            © {new Date().getFullYear()} Esengo Foundation. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/70">
            By <a href="https://espoir-kakesa.netlify.app/" className="underline hover:text-accent transition-colors">Espoir Kakesa</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
