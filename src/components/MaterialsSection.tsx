import { Shield, Gem, Atom } from "lucide-react";

const materials = [
  {
    icon: Atom,
    name: "Titânio ASTM F-136",
    tag: "GRAU IMPLANTE",
    description:
      "O padrão ouro em biocompatibilidade. Livre de níquel, hipoalergênico e aprovado para uso em implantes cirúrgicos. Polido à mão para acabamento espelhado.",
    specs: ["Livre de Níquel", "Hipoalergênico", "Autoclavável"],
  },
  {
    icon: Gem,
    name: "Ouro Sólido 18K",
    tag: "PREMIUM",
    description:
      "Ouro reciclado de alta pureza, ideal para piercings cicatrizados. Disponível em amarelo, rosé e branco. Cada peça é fabricada sob encomenda.",
    specs: ["750 Pureza", "Reciclado", "Sob Encomenda"],
  },
  {
    icon: Shield,
    name: "Nióbio & Aço Cirúrgico",
    tag: "ALTERNATIVA",
    description:
      "Nióbio anodizável em cores vibrantes. Aço cirúrgico ASTM F-138 para opções acessíveis sem comprometer a segurança.",
    specs: ["Anodizável", "Biocompatível", "Econômico"],
  },
];

const MaterialsSection = () => {
  return (
    <section id="materiais" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Materiais de <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Utilizamos apenas materiais que excedem os padrões internacionais de
            saúde. A biocompatibilidade nunca é comprometida.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {materials.map((item) => (
            <div
              key={item.name}
              className="bg-card p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <span className="inline-block text-[10px] tracking-widest px-2 py-1 bg-primary text-primary-foreground mb-4">
                {item.tag}
              </span>
              <item.icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading text-lg font-bold mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {item.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-[10px] tracking-wider px-2 py-1 border border-border text-muted-foreground"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
