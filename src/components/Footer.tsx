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
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/bono.esg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-section-dark-foreground/50 hover:text-section-dark-foreground transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/company/bonoesg/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-section-dark-foreground/50 hover:text-section-dark-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
