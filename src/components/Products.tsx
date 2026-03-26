import { Dog, Home, Pill, Wheat } from "lucide-react";

const products = [
  { icon: Dog, title: "Rações Premium", desc: "Alimentação de qualidade para todas as fases" },
  { icon: Home, title: "Casinhas & Acessórios", desc: "Conforto e proteção para seu pet" },
  { icon: Pill, title: "Medicamentos Veterinários", desc: "Saúde e cuidado garantidos" },
  { icon: Wheat, title: "Linha Agro", desc: "Produtos essenciais para o campo" },
];

const Products = () => (
  <section id="produtos" className="py-20 bg-secondary/50">
    <div className="container">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
        Nossos <span className="text-gradient-gold">Produtos</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-colors shadow-card group"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <p.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
