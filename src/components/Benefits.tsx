import { motion } from "framer-motion";
import { Banknote, Target, Building, Handshake, Landmark, BarChart3 } from "lucide-react";

const benefits = [
  { icon: Banknote, title: "Nova fonte de receita", desc: "Geração de ativos climáticos certificados e negociáveis." },
  { icon: Target, title: "Metas climáticas", desc: "Cumprimento de compromissos ambientais e climáticos municipais." },
  { icon: Building, title: "Fortalecimento institucional", desc: "Posicionamento estratégico em agenda ESG e clima." },
  { icon: Handshake, title: "Integração do setor privado", desc: "Conexão com empresas e investidores climáticos locais." },
  { icon: Landmark, title: "Financiamento climático", desc: "Acesso a fundos nacionais e internacionais de clima." },
  { icon: BarChart3, title: "Indicadores ESG", desc: "Métricas claras de impacto ambiental e social." },
];

const Benefits = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Valor gerado
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-foreground">
            Benefícios para{" "}
            <span className="text-gradient">o município</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base mb-1 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
