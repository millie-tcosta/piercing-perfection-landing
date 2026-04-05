import { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";

const ScheduleSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    piercing: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Gostaria de agendar um piercing.%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Piercing:* ${formData.piercing}%0A*Observações:* ${formData.message}`;
    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
  };

  return (
    <section id="agendamento" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Agende sua <span className="italic text-primary">Sessão</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md text-sm leading-relaxed">
              Preencha o formulário e entraremos em contato para confirmar o
              melhor horário. Todas as sessões incluem consulta prévia gratuita.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Calendar,
                  title: "Consulta Inicial",
                  desc: "Avaliação anatômica e planejamento personalizado da perfuração.",
                },
                {
                  icon: Clock,
                  title: "Sessão de 30–60 min",
                  desc: "Procedimento completo incluindo marcação, perfuração e orientações.",
                },
                {
                  icon: MessageSquare,
                  title: "Acompanhamento",
                  desc: "Suporte pós-procedimento durante todo o período de cicatrização.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="text-primary shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border p-8 space-y-5"
          >
            <div>
              <label className="text-xs tracking-widest text-muted-foreground mb-2 block">
                NOME COMPLETO
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-border pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest text-muted-foreground mb-2 block">
                TELEFONE / WHATSAPP
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background border border-border pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest text-muted-foreground mb-2 block">
                TIPO DE PIERCING
              </label>
              <select
                required
                value={formData.piercing}
                onChange={(e) => setFormData({ ...formData, piercing: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
              >
                <option value="">Selecione o piercing</option>
                <option value="Hélix">Hélix / Cartilagem</option>
                <option value="Lóbulo">Lóbulo</option>
                <option value="Constelação">Constelação</option>
                <option value="Nostril">Nostril</option>
                <option value="Septo">Septo</option>
                <option value="Umbigo">Umbigo</option>
                <option value="Labret">Labret / Lábio</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="text-xs tracking-widest text-muted-foreground mb-2 block">
                OBSERVAÇÕES
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Conte-nos sobre o que você deseja..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-semibold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              ENVIAR VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
