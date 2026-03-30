const WHATSAPP_URL = "https://wa.me/5532998302004";

const CtaSection = () => (
  <section className="py-14 md:py-20">
    <div className="container px-4 md:px-6 max-w-2xl text-center space-y-5 md:space-y-6">
      <h2 className="font-heading font-bold text-2xl md:text-4xl">
        🔥 Precisa de produtos para seu <span className="text-gradient-gold">pet ou agro</span> agora?
      </h2>
      <p className="text-muted-foreground text-base md:text-lg">
        Clique no botão abaixo e fale diretamente conosco:
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full sm:w-auto bg-gradient-gold text-primary-foreground font-heading font-bold px-8 py-4 rounded-xl shadow-gold hover:opacity-90 transition-opacity text-base md:text-lg animate-pulse-glow"
      >
        👉 Chamar no WhatsApp: (32) 99830-2004
      </a>
    </div>
  </section>
);

export default CtaSection;
