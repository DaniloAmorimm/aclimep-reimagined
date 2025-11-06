import { Shield, Scale, Users, Award, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Ética Profissional",
      description: "Compromisso com os mais altos padrões éticos na prática médica aeronáutica"
    },
    {
      icon: Scale,
      title: "Isenção",
      description: "Avaliações técnicas independentes e baseadas em evidências científicas"
    },
    {
      icon: Users,
      title: "Independência",
      description: "Autonomia total nas decisões médicas e periciais"
    },
    {
      icon: Award,
      title: "Imparcialidade",
      description: "Tratamento equitativo e justo em todas as perícias realizadas"
    },
    {
      icon: Check,
      title: "Ausência de Conflitos",
      description: "Transparência total e ausência de conflitos de interesse"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Valores
          </h2>
          <p className="text-lg text-muted-foreground">
            Princípios fundamentais que norteiam nossa atuação na medicina aeronáutica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
