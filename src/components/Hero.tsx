import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-highlight font-semibold text-sm tracking-widest uppercase mb-6">
            Tecnologia Climática & ESG
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-section-dark-foreground">
            Ative a geração de{" "}
            <span className="text-gradient">crédito de carbono</span>{" "}
            do seu município.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-section-dark-foreground/80 max-w-2xl">
            Somos uma climate tech que incentiva e auxilia municípios a transformarem seus
            ativos ambientais e biodiversidade em créditos de carbono mensuráveis, verificáveis
            e negociáveis no mercado.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-highlight text-accent-foreground px-8 py-4 text-base font-bold hover:brightness-110 transition-all shadow-lg"
          >
            Solicitar Diagnóstico Preliminar
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
