import { motion } from "framer-motion";
import bonoLogo from "@/assets/bono-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      {/* Decorative leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-primary/10 rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C50 5 20 25 15 55C10 85 40 95 50 95C60 95 90 85 85 55C80 25 50 5 50 5Z" />
          <line x1="50" y1="15" x2="50" y2="90" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
        <svg className="absolute top-40 right-16 w-24 h-24 text-accent/15 -rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C50 5 20 25 15 55C10 85 40 95 50 95C60 95 90 85 85 55C80 25 50 5 50 5Z" />
        </svg>
        <svg className="absolute bottom-32 left-1/4 w-20 h-20 text-primary/8 rotate-[60deg]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C50 5 20 25 15 55C10 85 40 95 50 95C60 95 90 85 85 55C80 25 50 5 50 5Z" />
        </svg>
        <svg className="absolute bottom-48 right-1/3 w-28 h-28 text-accent/10 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C50 5 20 25 15 55C10 85 40 95 50 95C60 95 90 85 85 55C80 25 50 5 50 5Z" />
        </svg>
        <svg className="absolute top-1/3 left-1/2 w-16 h-16 text-primary/5 rotate-[120deg]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5C50 5 20 25 15 55C10 85 40 95 50 95C60 95 90 85 85 55C80 25 50 5 50 5Z" />
        </svg>
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <img src={bonoLogo} alt="Bono ESG - CO₂" className="w-40 md:w-56 mb-10" />

          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-6">
            Tecnologia Climática & ESG
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-foreground max-w-4xl">
            Ative a geração de{" "}
            <span className="text-gradient">crédito de carbono</span>{" "}
            do seu município.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-muted-foreground max-w-2xl">
            Somos uma climate tech que incentiva e auxilia municípios a transformarem seus
            ativos ambientais e biodiversidade em créditos de carbono mensuráveis, verificáveis
            e negociáveis no mercado.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-bold hover:bg-primary/90 transition-all shadow-lg"
          >
            Solicitar Diagnóstico Preliminar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
