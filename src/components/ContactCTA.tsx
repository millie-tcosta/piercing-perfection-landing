const ContactCTA = () => {
  return (
    <section id="contato" className="py-20 bg-primary">
      <div className="container mx-auto px-6 md:flex items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
            Quando Contatar o Atelier
          </h2>
          <p className="text-primary-foreground/80 text-sm mb-4 max-w-md">
            Embora inchaço e secreção leve sejam normais, entre em contato
            imediatamente se notar:
          </p>
          <ul className="space-y-2">
            {[
              "Calor excessivo ou vermelhidão irradiante no local.",
              "Secreção espessa, esverdeada ou com mau cheiro.",
              "Joia que parece apertada demais ou está embutindo na pele.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                <span className="w-2 h-2 rounded-full bg-destructive mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="inline-block px-8 py-3 text-xs font-semibold tracking-widest border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          SUPORTE DE EMERGÊNCIA
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
