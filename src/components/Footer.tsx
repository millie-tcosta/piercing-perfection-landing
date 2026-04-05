const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold text-primary mb-2">
            CLINICAL ATELIER
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            PRECISÃO EM ARTE.
            <br />
            MATERIAIS DE EXCELÊNCIA.
            <br />
            PERFURAÇÕES SOB MEDIDA.
          </p>
        </div>
        <div className="space-y-2">
          {[
            { label: "CATÁLOGO", href: "#catalogo" },
            { label: "MATERIAIS", href: "#materiais" },
            { label: "AGENDAMENTO", href: "#agendamento" },
            { label: "CONTATO", href: "#contato" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:text-right">
          <p className="text-xs text-muted-foreground">
            © 2024 CLINICAL ATELIER. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
