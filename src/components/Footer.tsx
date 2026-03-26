import { PawPrint } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <PawPrint className="w-6 h-6 text-primary" />
        <span className="font-heading font-bold text-foreground">
          Suprema <span className="text-gradient-gold">Pet</span> Distribuidora
        </span>
      </div>
      <nav className="flex gap-6 text-sm">
        <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
        <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">Produtos</a>
        <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
      </nav>
      <div className="text-center md:text-right text-xs text-muted-foreground space-y-1">
        <p>© {new Date().getFullYear()} Todos os direitos reservados</p>
        <p>Desenvolvido por Fabiano Jr Distribuidora</p>
      </div>
    </div>
  </footer>
);

export default Footer;
