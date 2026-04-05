import heroImage from "@/assets/hero-aftercare.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Precisão em Recuperação
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Cuidados &{" "}
            <span className="italic text-primary">Integração</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            Um piercing é uma modificação cirúrgica do corpo. A cicatrização
            bem-sucedida exige uma abordagem clínica à higiene e um compromisso
            dedicado ao processo biológico de recuperação.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#agendamento"
              className="px-6 py-3 text-xs font-semibold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              AGENDAR HORÁRIO
            </a>
            <a
              href="#cuidados"
              className="px-6 py-3 text-xs font-semibold tracking-widest border border-border text-foreground hover:border-primary transition-colors"
            >
              VER CUIDADOS
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Produtos de cuidados pós-piercing em ambiente clínico"
            className="w-full h-[500px] object-cover"
            width={1280}
            height={720}
          />
          <div className="absolute bottom-0 right-0 bg-secondary px-6 py-3">
            <p className="text-sm italic font-heading text-foreground">
              "A cura é uma arte."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
