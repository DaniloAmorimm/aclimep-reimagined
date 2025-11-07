import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-aviation.jpg";

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
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            ACLIMEPA Brasil
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light italic">
            Associação de Clínicas e Médicos Peritos em Aviação
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Entidade associativa destinada a congregar clínicas médicas e médicos credenciados 
            que realizam perícias de saúde em aeronautas junto à Agência Reguladora de Aviação 
            Brasileira e Estrangeira
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
