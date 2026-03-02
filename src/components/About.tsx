import { motion } from "framer-motion";

const steps = [
  { num: "01", text: "Análise preliminar de ativos ambientais e biodiversidade passíveis de geração de crédito de carbono." },
  { num: "02", text: "Criação e desenvolvimento de ante-projetos passíveis de adicionalidade." },
  { num: "03", text: "Indicação de Registradoras Qualificadas para o processo de certificação." },
  { num: "04", text: "Apoio e acompanhamento das fases de certificação." },
  { num: "05", text: "Negociação dos créditos de carbono certificados junto ao mercado." },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Sobre a Bono ESG
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-foreground">
            O que falta é estrutura{" "}
            <span className="text-gradient">técnica e especializada.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A maioria dos municípios já realiza ações ambientais relevantes. O que falta é
            estrutura técnica para transformar essas iniciativas em ativos climáticos
            certificados. A Bono ESG oferece essa estrutura de ponta a ponta.
          </p>
        </motion.div>

        <div className="space-y-0">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-8">
            A Bono ESG atua em todas as etapas
          </p>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 py-6 border-b border-border last:border-b-0"
            >
              <span className="text-highlight font-display font-bold text-2xl min-w-[3rem]">
                {step.num}
              </span>
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
