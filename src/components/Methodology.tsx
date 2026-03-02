import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Levantamento dos ativos ambientais e iniciativas climáticas do município." },
  { num: "02", title: "Mapeamento de Ativos", desc: "Identificação e categorização dos projetos com potencial de geração de créditos." },
  { num: "03", title: "Estruturação Técnica", desc: "Desenvolvimento dos anteprojetos com documentação, metodologia e linha de base." },
  { num: "04", title: "Certificação", desc: "Validação, monitoramento e verificação por auditores credenciados (MRV)." },
  { num: "05", title: "Monetização", desc: "Emissão e negociação dos créditos de carbono no mercado voluntário ou regulado." },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Metodologia
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-foreground">
            Como funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center md:text-left"
            >
              <span className="text-5xl font-display font-bold text-primary/15 block mb-3">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
