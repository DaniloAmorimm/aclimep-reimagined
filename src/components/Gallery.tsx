import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Plane } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  // {
  //   category: "Equipe",
  //   icon: Users,
  //   images: [
  //     { title: "Equipe Médica", description: "Profissionais especializados" },
  //     { title: "Peritos Aeronáuticos", description: "Experiência e dedicação" },
  //     { title: "Atendimento", description: "Excelência no cuidado" },
  //   ]
  // },
  // {
  //   category: "Instalações",
  //   icon: Building2,
  //   images: [
  //     { title: "Consultórios", description: "Infraestrutura moderna" },
  //     { title: "Sala de Exames", description: "Equipamentos de ponta" },
  //     { title: "Recepção", description: "Ambiente acolhedor" },
  //   ]
  // },
  {
    category: "Eventos",
    icon: Plane,
    images: [
      { title: "Simpósio 2024", description: "Medicina aeronáutica" },
      { title: "Workshop", description: "Capacitação profissional" },
      { title: "Certificações", description: "Reconhecimento técnico" },
    ]
  }
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="galeria" className="py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-in">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos momentos mais importantes da ACLIMEPA Brasil.
          </p>
        </div>

        {/* Category selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {galleryImages.map((category, idx) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(idx)}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background/60 hover:bg-background/80 text-foreground border border-border/60"
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Carousel slider */}
        <div className="max-w-6xl mx-auto">
          {galleryImages.map((category, categoryIdx) => (
            <div
              key={category.category}
              className={`transition-all duration-500 ${
                activeCategory === categoryIdx
                  ? "opacity-100 block animate-fade-in"
                  : "opacity-0 hidden"
              }`}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {category.images.map((image, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="group overflow-hidden border-border/60 bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
                            {/* Icon with animation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <category.icon className="w-20 h-20 text-primary/30 group-hover:scale-110 group-hover:text-primary/50 transition-all duration-500" />
                            </div>
                            
                            {/* Overlay gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Status badge */}
                            <Badge 
                              variant="secondary" 
                              className="absolute top-3 right-3 bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm"
                            >
                              Destaque
                            </Badge>
                          </div>
                          
                          <CardContent className="p-6 space-y-3">
                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {image.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {image.description}
                            </p>
                            
                            {/* Decorative line */}
                            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="relative static translate-y-0 hover:bg-primary hover:text-primary-foreground transition-all" />
                  <CarouselNext className="relative static translate-y-0 hover:bg-primary hover:text-primary-foreground transition-all" />
                </div>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
