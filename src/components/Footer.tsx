import { PawPrint } from "lucide-react";

const Footer = () => (
  <footer className="py-8 md:py-12 border-t border-border">
    <div className="container px-4 md:px-6 flex flex-col items-center gap-5 md:gap-6 text-center">
      <div className="flex items-center gap-2">
        <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        <span className="font-heading font-bold text-sm md:text-base text-foreground">
          Suprema <span className="text-gradient-gold">Pet</span> Distribuidora
        </span>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 text-sm">
        <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
        <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">Produtos</a>
        <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
      </nav>
      <div className="text-center text-xs text-muted-foreground space-y-1.5">
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        <p>
          <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">
            Produzida com 💛 por CAMALY
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
