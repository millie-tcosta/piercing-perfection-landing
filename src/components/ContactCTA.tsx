import { MapPin, Phone, Instagram, Clock } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contato" className="py-20 bg-primary">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
            Fale Conosco
          </h2>
          <div className="space-y-4">
            {[
              { icon: MapPin, text: "Rua Exemplo, 123 – Centro, São Paulo – SP" },
              { icon: Phone, text: "(11) 99999-9999" },
              { icon: Instagram, text: "@clinicalatelier" },
              { icon: Clock, text: "Seg – Sáb: 10h às 20h" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="text-primary-foreground/70 shrink-0" size={18} />
                <span className="text-sm text-primary-foreground/90">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-primary-foreground/80 text-sm mb-6 max-w-sm md:ml-auto leading-relaxed">
            Dúvidas sobre materiais, cicatrização ou agendamento? Estamos
            disponíveis por WhatsApp para atendimento rápido.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-xs font-semibold tracking-widest border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
