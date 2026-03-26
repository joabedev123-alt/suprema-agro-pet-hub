const WHATSAPP_URL = "https://wa.me/5532998302004";

const CtaSection = () => (
  <section className="py-20">
    <div className="container max-w-2xl text-center space-y-6">
      <h2 className="font-heading font-bold text-3xl md:text-4xl">
        🔥 Precisa de produtos para seu <span className="text-gradient-gold">pet ou agro</span> agora?
      </h2>
      <p className="text-muted-foreground text-lg">
        Clique no botão abaixo e fale diretamente conosco:
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-gold text-primary-foreground font-heading font-bold px-10 py-4 rounded-xl shadow-gold hover:opacity-90 transition-opacity text-lg animate-pulse-glow"
      >
        👉 Chamar no WhatsApp: (32) 99830-2004
      </a>
    </div>
  </section>
);

export default CtaSection;
