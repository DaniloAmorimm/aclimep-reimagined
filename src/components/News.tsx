import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const newsItems = [
  {
    title: "Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia."
  },
  {
    title: "Importância da Saúde Mental na Aviação",
    category: "Artigo Técnico",
    date: "08 de Janeiro, 2024",
    readTime: "8 min",
    excerpt: "Exploramos a crescente importância da avaliação psicológica na medicina aeronáutica e como isso contribui para a segurança de voo."
  },
  {
    title: "Workshop: Atualizações em Cardiologia Aeronáutica",
    category: "Eventos",
    date: "02 de Janeiro, 2024",
    readTime: "3 min",
    excerpt: "Participe do nosso próximo workshop sobre os mais recentes avanços em avaliação cardiológica para aviadores. Inscrições abertas."
  },
  {
    title: "Telemedicina e Perícias Aeronáuticas",
    category: "Tecnologia",
    date: "20 de Dezembro, 2023",
    readTime: "6 min",
    excerpt: "Como a tecnologia está transformando o acompanhamento médico de profissionais da aviação, mantendo os altos padrões de segurança."
  },
  {
    title: "Prevenção de Fadiga em Tripulações",
    category: "Segurança",
    date: "15 de Dezembro, 2023",
    readTime: "7 min",
    excerpt: "Estudos recentes sobre gerenciamento de fadiga e sua relação com a aptidão médica para voo. Recomendações práticas para aviadores."
  },
  {
    title: "Certificação para Drones: Novos Requisitos",
    category: "Novidades",
    date: "10 de Dezembro, 2023",
    readTime: "4 min",
    excerpt: "As novas exigências médicas para operadores de aeronaves remotamente pilotadas (drones) e o papel da medicina aeronáutica neste setor."
  }
];

export const News = () => {
  return (
    <section id="noticias" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Notícias e Artigos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das novidades em medicina aeronáutica e perícias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                  {item.category}
                </Badge>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
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
