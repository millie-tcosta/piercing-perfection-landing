const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold text-primary mb-2">
            THE CLINICAL ATELIER
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            PRECISÃO EM ARTE.
            <br />
            ESTÉRIL NA PRÁTICA.
            <br />
            INIGUALÁVEL EM OFÍCIO.
          </p>
        </div>
        <div className="space-y-2">
          {[
            "POLÍTICA DE PRIVACIDADE",
            "PADRÕES DE ESTERILIZAÇÃO",
            "TERMOS DE SERVIÇO",
            "LOCALIZAÇÃO",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="block text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="md:text-right">
          <p className="text-xs text-muted-foreground">
            © 2024 THE CLINICAL ATELIER. PRECISÃO EM ARTE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
