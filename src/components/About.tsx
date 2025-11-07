import { Target, Flag, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fomentar e valorizar os profissionais de Saúde envolvidos tanto na perícia 
                quanto na prevenção e investigação de Acidentes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-md">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reunir Clínicas Médicas e Médicos para formatar o mesmo discurso e garantir 
                excelência nas perícias aeronáuticas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                <Flag className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Compromisso</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicação total à segurança da aviação através de perícias médicas rigorosas 
                e imparciais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
