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
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-white/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 py-24 flex flex-col items-center max-w-5xl">
        
        {/* LOGO CENTRAL */}
        <img
          src={logo}
          alt="ACLIMEPA Brasil"
          className="w-[260px] md:w-[340px] mx-auto drop-shadow-2xl"
        />

        <p className="text-lg md:text-xl text-white/90 font-light mt-6 italic">
          Associação de Clínicas e Médicos Peritos em Aviação
        </p>

        <p className="text-base md:text-lg text-white/80 max-w-3xl mt-3 leading-relaxed">
          Entidade associativa destinada a congregar clínicas médicas e médicos credenciados 
          que realizam perícias de saúde em aeronautas junto à Agência Reguladora de Aviação 
          Brasileira e Estrangeira.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 shadow-lg"
            onClick={() => scrollToSection('contato')}
          >
            Entre em Contato
          </Button>

          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8"
            onClick={() => scrollToSection('sobre')}
          >
            Saiba Mais
          </Button>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={() => scrollToSection('sobre')}
          className="absolute bottom-10 text-white/70 hover:text-white transition"
        >
          <ChevronDown className="h-10 w-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
