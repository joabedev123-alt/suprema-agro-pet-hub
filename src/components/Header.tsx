import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5532998302004";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <PawPrint className="w-8 h-8 text-primary" />
          <span className="font-heading font-bold text-lg md:text-xl text-foreground">
            Suprema <span className="text-gradient-gold">Pet</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-heading font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Fale no WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground font-heading font-semibold px-5 py-2.5 rounded-lg text-center hover:opacity-90 transition-opacity"
            >
              Fale no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
