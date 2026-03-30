import { Truck, DollarSign, Dog, Wheat } from "lucide-react";
import heroPet from "@/assets/hero-pet.png";

const WHATSAPP_URL = "https://wa.me/5532998302004";

const highlights = [
  { icon: Truck, label: "Entrega rápida" },
  { icon: DollarSign, label: "Preço competitivo" },
  { icon: Dog, label: "Linha completa pet" },
  { icon: Wheat, label: "Produtos agro" },
];

const Hero = () => (
  <section id="inicio" className="pt-20 md:pt-32 pb-12 md:pb-24">
    <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
      <div className="space-y-5 md:space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
          <span className="text-gradient-gold">🐾 Tudo para seu Pet</span>
          <br />
          <span className="text-foreground">e para o Agro em um só lugar</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto md:mx-0">
          Rações, casinhas, medicamentos e produtos essenciais com qualidade e preço justo. Atendemos online e na sua região.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 md:gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-heading font-bold px-6 py-3.5 rounded-lg shadow-gold hover:opacity-90 transition-opacity animate-pulse-glow text-sm md:text-base w-full sm:w-auto"
          >
            🟢 Comprar pelo WhatsApp
          </a>
          <a
            href="#produtos"
            className="border border-primary text-primary font-heading font-semibold px-6 py-3.5 rounded-lg hover:bg-primary/10 transition-colors text-sm md:text-base w-full sm:w-auto text-center"
          >
            Ver Produtos
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <h.icon className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center order-1 md:order-2">
        <img
          src={heroPet}
          alt="Pet e produtos agro"
          width={1024}
          height={768}
          className="w-full max-w-[260px] sm:max-w-sm md:max-w-md drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
