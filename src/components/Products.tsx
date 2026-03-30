import { Dog, Home, Pill, Wheat } from "lucide-react";

const products = [
  { icon: Dog, title: "Rações Premium", desc: "Alimentação de qualidade para todas as fases" },
  { icon: Home, title: "Casinhas & Acessórios", desc: "Conforto e proteção para seu pet" },
  { icon: Pill, title: "Medicamentos Veterinários", desc: "Saúde e cuidado garantidos" },
  { icon: Wheat, title: "Linha Agro", desc: "Produtos essenciais para o campo" },
];

const Products = () => (
  <section id="produtos" className="py-14 md:py-20 bg-secondary/50">
    <div className="container px-4 md:px-6">
      <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-8 md:mb-12">
        Nossos <span className="text-gradient-gold">Produtos</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-xl p-5 md:p-8 text-center border border-border hover:border-primary/50 transition-colors shadow-card group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <p.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-sm md:text-lg mb-1 md:mb-2 text-foreground leading-tight">{p.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
