import { motion } from "framer-motion";
import { ShieldCheck, Globe, Eye } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Rigor técnico e metodológico" },
  { icon: Globe, text: "Padrões internacionais de carbono" },
  { icon: Eye, text: "Transparência e compliance público" },
];

const Governance = () => {
  return (
    <section className="py-24 md:py-32 section-dark">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-highlight font-semibold text-sm tracking-widest uppercase mb-4">
              Governança
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              Transparência e{" "}
              <span className="text-highlight">segurança técnica.</span>
            </h2>
            <p className="text-section-dark-foreground/70 text-lg leading-relaxed">
              Atuação com rigor técnico, alinhamento a padrões internacionais, transparência
              e respeito às regras de contratação pública.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-4 py-4 border-b border-section-dark-foreground/10 last:border-b-0">
                <item.icon className="w-6 h-6 text-highlight flex-shrink-0" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
