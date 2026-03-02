import { motion } from "framer-motion";
import { Leaf, BookOpen, Heart, Cpu, DollarSign, GraduationCap } from "lucide-react";

const services = [
  { icon: Leaf, title: "Apoio ao Setor Privado", desc: "Apoio à descarbonização e geração de créditos de carbono para as Indústrias e Setor Privado dos municípios." },
  { icon: BookOpen, title: "Educação Ambiental", desc: "Programas educacionais sobre descarbonização, sustentabilidade e consumo consciente para a sociedade civil e privada." },
  { icon: Heart, title: "Projetos Voluntários", desc: "Implementação de projetos de descarbonização voluntária nos municípios." },
  { icon: Cpu, title: "Tecnologias de Descarbonização", desc: "Implementação de tecnologias de descarbonização utilizando startups especializadas." },
  { icon: DollarSign, title: "Captação de Recursos", desc: "Apoio na captação de convênios e verbas de programas de entidades nacionais e internacionais." },
  { icon: GraduationCap, title: "Parcerias Acadêmicas", desc: "Apoio no diálogo, parcerias e convênios com pesquisadores, Universidades e ICTs." },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-highlight font-semibold text-sm tracking-widest uppercase mb-4">
            O que fazemos
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Serviços especializados
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-section-dark-foreground/10 p-8 hover:border-highlight/30 transition-colors group"
            >
              <svc.icon className="w-10 h-10 text-highlight mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg mb-3">{svc.title}</h3>
              <p className="text-section-dark-foreground/70 text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
