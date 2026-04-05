import { HandMetal, ShieldAlert, Droplets } from "lucide-react";

const rules = [
  {
    icon: HandMetal,
    title: "HIGIENIZAÇÃO",
    description:
      "Nunca toque no piercing com as mãos sujas. Esta é a principal causa de infecção.",
  },
  {
    icon: ShieldAlert,
    title: "LITHA",
    description:
      "Leave It The Hell Alone. Trauma físico causado por torcer ou deslizar a joia atrasa o reparo celular.",
  },
  {
    icon: Droplets,
    title: "APENAS SORO",
    description:
      "Use apenas soro fisiológico 0,9% estéril. Evite álcool, pomadas ou peróxido a todo custo.",
  },
];

const GoldenRules = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 gold-left-border pl-4">
          As Regras de Ouro
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-card p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <rule.icon className="text-primary mb-4" size={28} />
              <h3 className="font-body text-sm font-semibold tracking-widest mb-3">
                {rule.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenRules;
