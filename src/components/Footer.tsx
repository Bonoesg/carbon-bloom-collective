const Footer = () => {
  return (
    <footer className="py-10 section-dark border-t border-section-dark-foreground/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          Bono <span className="text-section-dark-foreground/50 font-medium">ESG</span>
        </a>
        <p className="text-section-dark-foreground/50 text-sm text-center">
          © 2026 Bono ESG. Tecnologia Climática & ESG. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
