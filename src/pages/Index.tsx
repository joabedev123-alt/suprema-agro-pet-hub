import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Products />
    <Differentials />
    <About />
    <CtaSection />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
