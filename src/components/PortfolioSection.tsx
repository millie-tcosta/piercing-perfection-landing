import portfolioEar from "@/assets/4e051e0a-7bf4-4ea3-b810-44f1a0777767.webp";
import jewelryCollection from "@/assets/946c5c7f-cd68-4278-b9e3-85288e7f825d.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfólio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold italic mb-4">
            Precisões <span className="text-primary">Curadas</span>
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Uma perspectiva editorial sobre modificação corporal de alto padrão.
            Cada procedimento é um diálogo entre anatomia e estética.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <img
            src={portfolioEar}
            alt="Curadoria de piercings na orelha com joias de ouro"
            className="w-full h-[400px] object-cover"
            loading="lazy"
            width={640}
            height={800}
          />
          <img
            src={jewelryCollection}
            alt="Coleção de joias para piercing"
            className="w-full h-[400px] object-cover"
            loading="lazy"
            width={1280}
            height={640}
          />
        </div>

        <div id="joalheria">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                O Padrão de Material
              </h3>
              <p className="text-muted-foreground text-sm max-w-lg">
                Utilizamos apenas materiais de grau de implante que excedem os
                padrões de saúde. A biocompatibilidade nunca é comprometida pela
                beleza.
              </p>
            </div>
            <a
              href="#"
              className="text-xs tracking-widest text-primary hover:underline hidden md:block"
            >
              VER COLEÇÃO COMPLETA
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "A Pera Marquise",
                desc: "Diamante VS1 cravejado em ouro reciclado 18k. Garantia vitalícia contra defeitos.",
                tags: ["BIOCOMPATÍVEL", "SEM ROSCA"],
                material: "OURO SÓLIDO 18K",
              },
              {
                name: "Clicker Anodizado",
                desc: "Titânio grau implante ASTM F-136, polido à mão para acabamento espelhado.",
                tags: ["LIVRE DE NÍQUEL", "SEGURO P/ CICATRIZAÇÃO"],
                material: "TITÂNIO F136",
              },
              {
                name: "Constelação de Esmeralda",
                desc: "Esmeraldas de origem ética dispostas em arco anatômico para mapeamento único.",
                tags: ["NATURAL", "SOB MEDIDA"],
                material: "ESMERALDAS NATURAIS",
              },
            ].map((item) => (
              <div key={item.name} className="bg-card border border-border p-6">
                <span className="inline-block text-[10px] tracking-widest px-2 py-1 bg-primary text-primary-foreground mb-4">
                  {item.material}
                </span>
                <h4 className="font-heading text-lg font-bold mb-2">
                  {item.name}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wider px-2 py-1 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
