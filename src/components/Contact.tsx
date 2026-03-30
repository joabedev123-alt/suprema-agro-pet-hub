import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => (
  <section id="contato" className="py-14 md:py-20 bg-secondary/50">
    <div className="container px-4 md:px-6 max-w-2xl text-center space-y-6 md:space-y-8">
      <h2 className="font-heading font-bold text-2xl md:text-4xl">
        <span className="text-gradient-gold">Contato</span>
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm md:text-base">
          <MapPin className="w-5 h-5 text-primary shrink-0" />
          <span>Atendimento: Online e Região</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm md:text-base">
          <Phone className="w-5 h-5 text-primary shrink-0" />
          <span>WhatsApp: (32) 99830-2004</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm md:text-base">
          <Mail className="w-5 h-5 text-primary shrink-0" />
          <span>Em desenvolvimento</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
