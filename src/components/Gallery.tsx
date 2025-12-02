import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import aclimepaVerde from "@/assets/gallery/aclimepa-verde.jpeg";
import aclimepaLaranja from "@/assets/gallery/aclimepa-laranja.jpeg";
import aclimepaAzul from "@/assets/gallery/aclimepa-azul.jpeg";
import aclimepaAviaoSunset from "@/assets/gallery/aclimepa-aviao-sunset.jpeg";
import aclimepaAviaoVoo from "@/assets/gallery/aclimepa-aviao-voo.jpeg";

const galleryImages = [
  { src: aclimepaAviaoSunset, alt: "ACLIMEPA - Avião ao pôr do sol" },
  { src: aclimepaAviaoVoo, alt: "ACLIMEPA Brasil - Avião em voo" },
  { src: aclimepaVerde, alt: "ACLIMEPA Brasil - Logo verde" },
  { src: aclimepaLaranja, alt: "ACLIMEPA Brasil - Logo laranja" },
  { src: aclimepaAzul, alt: "ACLIMEPA Brasil - Logo azul" },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Galeria</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça a identidade visual da ACLIMEPA Brasil
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square md:aspect-video">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-105"
                }`}
              />
            ))}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border/50"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-border/50"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-3 mt-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex 
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
