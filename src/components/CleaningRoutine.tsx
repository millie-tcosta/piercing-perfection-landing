import cleaningImage from "@/assets/cleaning-routine.jpg";

const steps = [
  {
    num: "01",
    title: "IRRIGAÇÃO",
    description:
      "Borrife soro fisiológico estéril diretamente nos pontos de entrada e saída do piercing. Deixe agir por 30 segundos.",
  },
  {
    num: "02",
    title: "REMOÇÃO SUAVE",
    description:
      "Use uma gaze não-tecida embebida em soro para remover delicadamente crostas ou resíduos amolecidos.",
  },
  {
    num: "03",
    title: "SECAGEM",
    description:
      "Seque com papel toalha descartável limpo. A umidade residual na área pode causar problemas fúngicos.",
  },
];

const CleaningRoutine = () => {
  return (
    <section id="cuidados" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Rotina de Limpeza Clínica
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Siga este protocolo duas vezes ao dia — nem mais, nem menos. A
            limpeza excessiva pode irritar o leito da ferida tanto quanto a
            negligência.
          </p>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="text-primary font-heading text-xl font-bold">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          src={cleaningImage}
          alt="Solução salina estéril para limpeza de piercings"
          className="w-full h-[450px] object-cover"
          loading="lazy"
          width={640}
          height={640}
        />
      </div>
    </section>
  );
};

export default CleaningRoutine;
