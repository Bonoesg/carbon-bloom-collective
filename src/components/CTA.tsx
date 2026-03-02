import { motion } from "framer-motion";
import { useState } from "react";

const CTA = () => {
  const [form, setForm] = useState({ nome: "", cargo: "", prefeitura: "", email: "", telefone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Diagnóstico solicitado com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", cargo: "", prefeitura: "", email: "", telefone: "" });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Próximo passo
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6 text-foreground">
              Descubra o potencial climático{" "}
              <span className="text-gradient">do seu município.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Solicite um diagnóstico preliminar e conheça o potencial de geração de créditos
              de carbono existente no seu território.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-bold hover:bg-primary/90 transition-colors"
            >
              Solicitar Diagnóstico Preliminar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <p className="text-sm text-muted-foreground mb-6">
                Peça um Diagnóstico dos Projetos já existentes em seu município para analisar
                seu Potencial de Créditos de Carbono
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">
                    Nome completo<span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Cargo</label>
                  <input
                    type="text"
                    maxLength={100}
                    value={form.cargo}
                    onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">
                    Prefeitura / Secretaria
                  </label>
                  <input
                    type="text"
                    maxLength={100}
                    value={form.prefeitura}
                    onChange={(e) => setForm({ ...form, prefeitura: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">
                    E-mail institucional<span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold hover:bg-primary/90 transition-colors mt-2"
                >
                  Enviar
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
