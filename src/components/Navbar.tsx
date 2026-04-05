import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Materiais", href: "#materiais" },
  { label: "Joalheria", href: "#joalheria" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold tracking-widest text-primary">
          CLINICAL ATELIER
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#agendamento"
          className="hidden md:inline-block px-5 py-2 text-xs font-semibold tracking-widest border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          AGENDAR
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm tracking-wider text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#agendamento"
            className="block px-5 py-2 text-xs font-semibold tracking-widest border border-primary text-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            AGENDAR
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
