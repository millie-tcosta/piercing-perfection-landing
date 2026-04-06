import piercingHelix from "@/assets/piercing-helix.jpg";
import piercingNostril from "@/assets/piercing-nostril.jpg";
import piercingSeptum from "@/assets/piercing-septum.jpg";
import piercingNavel from "@/assets/piercing-navel.jpg";
import piercingLabret from "@/assets/piercing-labret.jpg";
import portfolioEar from "@/assets/portfolio-ear.jpg";

const piercings = [
  {
    name: "Hélix & Cartilagem",
    image: piercingHelix,
    description: "Perfurações na parte superior da orelha com posicionamento anatômico preciso.",
    healing: "6 – 12 meses",
    materials: ["Titânio F136", "Ouro 18K"],
  },
  {
    name: "Nostril",
    image: piercingNostril,
    description: "Stud ou argola delicada no nariz, posicionada para valorizar os traços faciais.",
    healing: "4 – 6 meses",
    materials: ["Ouro 18K", "Titânio F136"],
  },
  {
    name: "Septo",
    image: piercingSeptum,
    description: "Perfuração no sweet spot do septo com clickers e argolas de grau implante.",
    healing: "2 – 3 meses",
    materials: ["Titânio F136", "Nióbio"],
  },
  {
    name: "Umbigo",
    image: piercingNavel,
    description: "Curved barbell posicionado anatomicamente para cicatrização segura.",
    healing: "6 – 9 meses",
    materials: ["Ouro 18K", "Titânio F136"],
  },
  {
    name: "Labret & Lábio",
    image: piercingLabret,
    description: "Perfurações labiais com flatback em titânio para máximo conforto.",
    healing: "2 – 3 meses",
    materials: ["Titânio F136", "Ouro 14K"],
  },
  {
    name: "Lóbulo & Constelação",
    image: portfolioEar,
    description: "Composições personalizadas no lóbulo com mapeamento anatômico exclusivo.",
    healing: "6 – 8 semanas",
    materials: ["Ouro 18K", "Diamantes VS1"],
  },
];

const PiercingCatalog = () => {
  return (
    <section id="catalogo" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold italic mb-4">
            Catálogo de <span className="text-primary">Perfurações</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Cada perfuração é planejada individualmente respeitando a anatomia
            do cliente. Trabalhamos exclusivamente com materiais de grau implante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {piercings.map((item) => (
            <div key={item.name} className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`Piercing ${item.name}`}
                  className="w-full h-[280px] object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute top-3 right-3 bg-secondary/90 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] tracking-widest text-primary font-semibold">
                    {item.healing}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {item.materials.map((mat) => (
                    <span
                      key={mat}
                      className="text-[10px] tracking-wider px-2 py-1 border border-border text-muted-foreground"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PiercingCatalog;
