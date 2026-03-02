import { motion } from "framer-motion";
import { Trash2, Zap, Bus, TreePine } from "lucide-react";

const projects = [
  { icon: Trash2, category: "Resíduos Sólidos", title: "Captura de Metano em Aterros" },
  { icon: Zap, category: "Energia", title: "Eficiência Energética em Prédios Públicos" },
  { icon: Bus, category: "Transporte", title: "Eletrificação de Frota Municipal" },
  { icon: TreePine, category: "Natureza", title: "Restauração Ecológica e Biodiversidade" },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-foreground">
            Tipos de projetos
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <proj.icon className="w-10 h-10 text-primary mb-5" />
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                {proj.category}
              </p>
              <h3 className="font-display font-bold text-base text-card-foreground">{proj.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
