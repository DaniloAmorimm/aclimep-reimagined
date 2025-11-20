import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GalleryComponent from "@/components/Gallery";
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

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16 flex-grow">
        <section id="galeria" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Galeria</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça nossos momentos importantes da ACLIMEPA
              </p>
            </div>

            <div className="space-y-12">
              {galleryImages.map((category) => (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.images.map((image, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <category.icon className="w-16 h-16 text-primary/30" />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-foreground mb-1">{image.title}</h4>
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
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;