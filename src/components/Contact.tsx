import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => (
  <section id="contato" className="py-20 bg-secondary/50">
    <div className="container max-w-2xl text-center space-y-8">
      <h2 className="font-heading font-bold text-3xl md:text-4xl">
        <span className="text-gradient-gold">Contato</span>
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Atendimento: Online e Região</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Phone className="w-5 h-5 text-primary" />
          <span>WhatsApp: (32) 99830-2004</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <Mail className="w-5 h-5 text-primary" />
          <span>Em desenvolvimento</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
