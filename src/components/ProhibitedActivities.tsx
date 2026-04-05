import { Waves, Gauge, Sparkles } from "lucide-react";

const items = [
  {
    icon: Waves,
    title: "Corpos d'Água",
    description:
      "Lagos, piscinas e oceanos são focos de bactérias. Evite submersão por pelo menos 8 semanas.",
  },
  {
    icon: Gauge,
    title: "Pressão",
    description:
      "Dormir sobre um piercing em cicatrização causa migração e inchaço.",
  },
  {
    icon: Sparkles,
    title: "Cosméticos",
    description:
      "Mantenha maquiagem e spray de cabelo longe da área do piercing.",
  },
];

const ProhibitedActivities = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Atividades Proibidas
          </h2>
          <span className="text-xs tracking-widest text-muted-foreground uppercase hidden md:block">
            Protocolo de Gestão de Risco
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card p-8 border border-border"
            >
              <item.icon className="text-primary mb-4" size={24} />
              <h3 className="font-body text-base font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProhibitedActivities;
