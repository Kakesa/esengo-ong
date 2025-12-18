import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImpactStats from "@/components/ImpactStats";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ImpactStats />
        <Gallery />
        <Projects />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
