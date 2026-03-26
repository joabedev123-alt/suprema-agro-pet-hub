import { Check } from "lucide-react";

const items = [
  "Atendimento rápido e direto",
  "Produtos selecionados",
  "Preços acessíveis",
  "Entrega na região",
  "Compra fácil pelo WhatsApp",
];

const Differentials = () => (
  <section className="py-20">
    <div className="container max-w-2xl text-center">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-10">
        Por que escolher a <span className="text-gradient-gold">Suprema Pet</span>?
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-left bg-card border border-border rounded-lg px-6 py-4">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span className="text-foreground font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Differentials;
