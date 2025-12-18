import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#accueil", label: "Accueil", isAnchor: true },
    { href: "/a-propos", label: "À Propos", isAnchor: false },
    { href: "#services", label: "Programmes", isAnchor: true },
    { href: "#galerie", label: "Galerie", isAnchor: true },
    { href: "#projets", label: "Nos Actions", isAnchor: true },
    { href: "#partenaires", label: "Partenaires", isAnchor: true },
    { href: "#contact", label: "Contact", isAnchor: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#accueil" className="font-display text-2xl font-bold text-primary flex items-center gap-2">
            <Heart className="h-6 w-6 text-accent" />
            Esengo Foundation
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button variant="accent" size="sm">
              Faire un Don
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button variant="accent" size="sm" className="w-fit">
                Faire un Don
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
