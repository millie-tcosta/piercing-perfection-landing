const timelines = [
  { area: "LÓBULO", time: "6 – 8 Semanas" },
  { area: "HÉLIX / CARTILAGEM", time: "6 – 12 Meses" },
  { area: "NOSTRIL", time: "4 – 6 Meses" },
  { area: "UMBIGO", time: "6 – 9 Meses" },
  { area: "SEPTO", time: "2 – 3 Meses" },
];

const BiologicalTimelines = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center tracking-widest uppercase mb-12">
          Cronogramas Biológicos
        </h2>
        <div className="space-y-0">
          {timelines.map((item, i) => (
            <div
              key={item.area}
              className={`flex justify-between items-center py-4 px-4 ${
                i !== timelines.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-sm font-semibold tracking-wider">
                {item.area}
              </span>
              <span className="text-sm text-primary font-medium">
                {item.time}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Nota: Estes são estimativas. Saúde individual e estrutura influenciam o
          tempo de cicatrização.
        </p>
      </div>
    </section>
  );
};

export default BiologicalTimelines;
