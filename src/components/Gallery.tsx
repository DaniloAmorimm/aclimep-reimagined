import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Plane } from "lucide-react";

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
  return (
    <section id="galeria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Galeria
          </h2>
          <p className="text-muted-foreground">
            Conheça alguns dos momentos mais importantes da ACLIMEPA Brasil.
          </p>
        </div>

        <div className="space-y-12">
          {galleryImages.map((category) => (
            <div key={category.category} className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-7 h-7 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {category.images.map((image, idx) => (
                  <Card
                    key={idx}
                    className="overflow-hidden hover-scale bg-background/80 border-border/60 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center">
                      <category.icon className="w-12 h-12 text-primary/40" />
                    </div>
                    <CardContent className="p-5 space-y-2">
                      <h4 className="font-semibold text-foreground">{image.title}</h4>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
