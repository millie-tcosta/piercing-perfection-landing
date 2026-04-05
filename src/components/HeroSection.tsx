import heroImage from "@/assets/portfolio-ear.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Estúdio de Body Piercing
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Arte &{" "}
            <span className="italic text-primary">Precisão</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Perfurações executadas com técnica cirúrgica e joias de grau
            implante. Cada piercing é uma expressão única, feita sob medida
            para a sua anatomia.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#agendamento"
              className="px-6 py-3 text-xs font-semibold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              AGENDAR HORÁRIO
            </a>
            <a
              href="#catalogo"
              className="px-6 py-3 text-xs font-semibold tracking-widest border border-border text-foreground hover:border-primary transition-colors"
            >
              VER CATÁLOGO
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Curadoria de piercings com joias de ouro e titânio"
            className="w-full h-[500px] object-cover"
            width={640}
            height={800}
          />
          <div className="absolute bottom-0 right-0 bg-secondary px-6 py-3">
            <p className="text-sm italic font-heading text-foreground">
              "Precisão é a nossa arte."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
