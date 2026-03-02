import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import Benefits from "@/components/Benefits";
import Governance from "@/components/Governance";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Projects />
      <Benefits />
      <Governance />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
