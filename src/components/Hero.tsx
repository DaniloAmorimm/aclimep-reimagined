import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-aviation.jpg";
import logo from "@/assets/logo_branco.png"; // <= AQUI: sua imagem do logo																			 

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
        {/* LOGO CENTRAL */}
          <img
            src={logo}
            alt="ACLIMEPA Brasil"
            className="mx-auto w-[260px] md:w-[340px] lg:w-[420px] drop-shadow-2xl"
          />
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light italic">
            Associação de Clínicas e Médicos Peritos em Aviação
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Entidade associativa destinada a congregar clínicas médicas e médicos credenciados 
            que realizam perícias de saúde em aeronautas junto à Agência Reguladora de Aviação 
            Brasileira e Estrangeira
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              onClick={() => scrollToSection('contato')}
            >
              Entre em Contato
            </Button>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => scrollToSection('sobre')}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('sobre')}
          className="animate-bounce text-white/80 hover:text-white transition-colors flex justify-center"
        >
          <ChevronDown className="h-12 w-12" />
       </button>
      </div>
    </section>
  );
};
