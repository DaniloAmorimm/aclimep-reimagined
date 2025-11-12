import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const newsItems = [
  {
    title: "Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia.",
    content: `A Agência Nacional de Aviação Civil (ANAC) publicou uma série de atualizações cruciais nos requisitos para certificação médica aeronáutica que entrarão em vigor em 2024. Estas mudanças representam um marco importante na modernização dos procedimentos de perícia médica no Brasil.

As principais alterações incluem:

1. Novos critérios para avaliação cardiovascular: Foram estabelecidos protocolos mais rigorosos para a detecção precoce de condições cardíacas que possam comprometer a segurança de voo.

2. Atualização nos requisitos psicológicos: A avaliação da saúde mental dos aviadores ganhou destaque, com a inclusão de novos testes e protocolos de acompanhamento.

3. Digitalização dos processos: Implementação de um sistema digital para registro e acompanhamento das certificações médicas, facilitando o acesso tanto para médicos credenciados quanto para profissionais da aviação.

4. Periodicidade de exames: Ajustes nas frequências de renovação de certificados médicos para diferentes categorias de profissionais.

Estes procedimentos visam alinhar o Brasil aos mais altos padrões internacionais de segurança aeronáutica, mantendo a competitividade e excelência do setor no cenário global.`
  },
  {
    title: "Importância da Saúde Mental na Aviação",
    category: "Artigo Técnico",
    date: "08 de Janeiro, 2024",
    readTime: "8 min",
    excerpt: "Exploramos a crescente importância da avaliação psicológica na medicina aeronáutica e como isso contribui para a segurança de voo.",
    content: `A saúde mental dos profissionais da aviação tem ganhado crescente atenção nos últimos anos, especialmente após incidentes que destacaram a necessidade de uma avaliação mais abrangente e contínua.

O ambiente da aviação apresenta desafios únicos que podem impactar o bem-estar psicológico dos profissionais:

- Longas jornadas de trabalho e mudanças constantes de fuso horário
- Responsabilidade pela segurança de centenas de vidas
- Pressão operacional e tomada de decisões críticas
- Afastamento prolongado da família e vida social

A medicina aeronáutica moderna reconhece que a aptidão para o voo vai além da saúde física. Os programas de avaliação psicológica incluem:

1. Triagem inicial durante a certificação
2. Avaliações periódicas regulares
3. Suporte psicológico contínuo e confidencial
4. Programas de prevenção de burnout e fadiga

É fundamental criar um ambiente onde os profissionais se sintam confortáveis para buscar ajuda sem medo de consequências em suas carreiras. A abordagem preventiva e o acompanhamento regular são essenciais para manter os mais altos padrões de segurança operacional.`
  },
  {
    title: "Workshop: Atualizações em Cardiologia Aeronáutica",
    category: "Eventos",
    date: "02 de Janeiro, 2024",
    readTime: "3 min",
    excerpt: "Participe do nosso próximo workshop sobre os mais recentes avanços em avaliação cardiológica para aviadores. Inscrições abertas.",
    content: `Estamos organizando um workshop exclusivo sobre Cardiologia Aeronáutica, reunindo os principais especialistas da área para discutir os avanços mais recentes em diagnóstico e avaliação cardiovascular de profissionais da aviação.

Programação:
- Data: 15 de Fevereiro, 2024
- Horário: 8h às 17h
- Local: Centro de Convenções ACLIMEPA, São Paulo

Temas que serão abordados:

1. Novas tecnologias em diagnóstico cardiovascular
2. Interpretação de exames em contexto aeronáutico
3. Casos clínicos e discussões práticas
4. Atualizações das diretrizes ANAC e ICAO
5. Manejo de condições cardíacas em aviadores

O evento será ministrado por cardiologistas especializados em medicina aeronáutica, com vasta experiência em perícias e acompanhamento de profissionais da aviação.

Público-alvo: Médicos credenciados, cardiologistas, e profissionais da área de medicina aeronáutica.

Inscrições limitadas. Certificado de participação incluso.

Para mais informações e inscrições, entre em contato através dos nossos canais oficiais.`
  },
  {
    title: "Telemedicina e Perícias Aeronáuticas",
    category: "Tecnologia",
    date: "20 de Dezembro, 2023",
    readTime: "6 min",
    excerpt: "Como a tecnologia está transformando o acompanhamento médico de profissionais da aviação, mantendo os altos padrões de segurança.",
    content: `A integração da telemedicina nas práticas de medicina aeronáutica representa uma evolução significativa na forma como acompanhamos e cuidamos da saúde dos profissionais da aviação.

Aplicações da telemedicina na aviação:

1. Consultas de acompanhamento remoto: Profissionais podem manter contato regular com seus médicos aeronáuticos, facilitando o monitoramento contínuo de condições crônicas ou em recuperação.

2. Segunda opinião especializada: Médicos credenciados podem consultar rapidamente especialistas em casos complexos, garantindo decisões mais informadas.

3. Acesso a histórico médico digital: Sistemas integrados permitem acesso rápido e seguro ao histórico completo do profissional, independentemente de sua localização.

4. Educação continuada: Plataformas online facilitam a atualização constante de médicos e profissionais sobre novas diretrizes e procedimentos.

Desafios e considerações:

É importante ressaltar que a telemedicina complementa, mas não substitui, os exames presenciais obrigatórios. Certos procedimentos, como avaliações físicas detalhadas e alguns testes específicos, continuam requerendo presença física.

A ACLIMEPA Brasil tem investido em infraestrutura tecnológica para oferecer estes serviços mantendo os mais altos padrões de segurança e confidencialidade, seguindo todas as regulamentações da ANAC e do Conselho Federal de Medicina.`
  },
  {
    title: "Prevenção de Fadiga em Tripulações",
    category: "Segurança",
    date: "15 de Dezembro, 2023",
    readTime: "7 min",
    excerpt: "Estudos recentes sobre gerenciamento de fadiga e sua relação com a aptidão médica para voo. Recomendações práticas para aviadores.",
    content: `A fadiga é um dos fatores mais críticos que afetam o desempenho e a segurança na aviação. Compreender, prevenir e gerenciar a fadiga é essencial para manter a aptidão médica para o voo.

O que é fadiga aeronáutica?

A fadiga na aviação vai além do simples cansaço. É um estado de esgotamento físico e/ou mental que reduz a capacidade de realizar funções com segurança e eficiência. Pode resultar de:

- Sono inadequado ou interrompido
- Ritmos circadianos desregulados
- Carga de trabalho excessiva
- Estresse prolongado

Impactos na segurança:

Estudos mostram que a fadiga pode afetar:
- Tempo de reação
- Tomada de decisões
- Vigilância e atenção
- Coordenação motora
- Comunicação efetiva

Estratégias de prevenção:

1. Higiene do sono: Estabelecer rotinas consistentes, mesmo com escalas irregulares
2. Gerenciamento de descanso: Otimizar períodos de folga para recuperação efetiva
3. Nutrição adequada: Alimentação balanceada para manter energia estável
4. Exercícios regulares: Atividade física moderada melhora a qualidade do sono
5. Reconhecimento dos sinais: Identificar precocemente sintomas de fadiga

Recomendações práticas:

- Nunca subestime os sinais de fadiga
- Utilize períodos de descanso eficientemente
- Comunique preocupações com a equipe e gestão
- Busque avaliação médica se a fadiga persistir

A ACLIMEPA Brasil oferece programas de orientação sobre gerenciamento de fadiga como parte integral da avaliação de aptidão médica.`
  },
  {
    title: "Certificação para Drones: Novos Requisitos",
    category: "Novidades",
    date: "10 de Dezembro, 2023",
    readTime: "4 min",
    excerpt: "As novas exigências médicas para operadores de aeronaves remotamente pilotadas (drones) e o papel da medicina aeronáutica neste setor.",
    content: `O crescimento exponencial da indústria de drones trouxe novos desafios e oportunidades para a medicina aeronáutica. A ANAC estabeleceu requisitos específicos de certificação médica para operadores de aeronaves remotamente pilotadas (RPA).

Quem precisa de certificação médica?

Operadores de drones que:
- Realizam operações comerciais
- Operam aeronaves acima de determinado peso
- Executam voos BVLOS (Beyond Visual Line of Sight)
- Trabalham em áreas urbanas densamente povoadas

Requisitos médicos específicos:

1. Exame oftalmológico: Avaliação da acuidade visual e percepção de cores
2. Avaliação auditiva: Capacidade de comunicação adequada
3. Coordenação motora: Testes específicos para operação de controles
4. Avaliação cognitiva: Capacidade de tomada de decisões rápidas

Diferenças em relação à aviação tripulada:

Embora menos rigorosos que para pilotos de aeronaves tripuladas, os requisitos para operadores de RPA ainda são significativos, considerando:
- A responsabilidade sobre áreas povoadas
- Possíveis impactos em caso de falhas
- Necessidade de resposta rápida a emergências

Processo de certificação:

A ACLIMEPA Brasil está credenciada para realizar exames médicos para operadores de drones, oferecendo um processo simplificado mas completo que atende todas as exigências da ANAC.

O futuro da aviação inclui a integração crescente de operações tripuladas e não tripuladas, e a medicina aeronáutica evolui para acompanhar esta transformação.`
  }
{
    title: "2Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia.",
    content: `A Agência Nacional de Aviação Civil (ANAC) publicou uma série de atualizações cruciais nos requisitos para certificação médica aeronáutica que entrarão em vigor em 2024. Estas mudanças representam um marco importante na modernização dos procedimentos de perícia médica no Brasil.

As principais alterações incluem:

1. Novos critérios para avaliação cardiovascular: Foram estabelecidos protocolos mais rigorosos para a detecção precoce de condições cardíacas que possam comprometer a segurança de voo.

2. Atualização nos requisitos psicológicos: A avaliação da saúde mental dos aviadores ganhou destaque, com a inclusão de novos testes e protocolos de acompanhamento.

3. Digitalização dos processos: Implementação de um sistema digital para registro e acompanhamento das certificações médicas, facilitando o acesso tanto para médicos credenciados quanto para profissionais da aviação.

4. Periodicidade de exames: Ajustes nas frequências de renovação de certificados médicos para diferentes categorias de profissionais.

Estes procedimentos visam alinhar o Brasil aos mais altos padrões internacionais de segurança aeronáutica, mantendo a competitividade e excelência do setor no cenário global.`
  },
{
    title: "3Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia.",
    content: `A Agência Nacional de Aviação Civil (ANAC) publicou uma série de atualizações cruciais nos requisitos para certificação médica aeronáutica que entrarão em vigor em 2024. Estas mudanças representam um marco importante na modernização dos procedimentos de perícia médica no Brasil.

As principais alterações incluem:

1. Novos critérios para avaliação cardiovascular: Foram estabelecidos protocolos mais rigorosos para a detecção precoce de condições cardíacas que possam comprometer a segurança de voo.

2. Atualização nos requisitos psicológicos: A avaliação da saúde mental dos aviadores ganhou destaque, com a inclusão de novos testes e protocolos de acompanhamento.

3. Digitalização dos processos: Implementação de um sistema digital para registro e acompanhamento das certificações médicas, facilitando o acesso tanto para médicos credenciados quanto para profissionais da aviação.

4. Periodicidade de exames: Ajustes nas frequências de renovação de certificados médicos para diferentes categorias de profissionais.

Estes procedimentos visam alinhar o Brasil aos mais altos padrões internacionais de segurança aeronáutica, mantendo a competitividade e excelência do setor no cenário global.`
  },
{
    title: "4Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia.",
    content: `A Agência Nacional de Aviação Civil (ANAC) publicou uma série de atualizações cruciais nos requisitos para certificação médica aeronáutica que entrarão em vigor em 2024. Estas mudanças representam um marco importante na modernização dos procedimentos de perícia médica no Brasil.

As principais alterações incluem:

1. Novos critérios para avaliação cardiovascular: Foram estabelecidos protocolos mais rigorosos para a detecção precoce de condições cardíacas que possam comprometer a segurança de voo.

2. Atualização nos requisitos psicológicos: A avaliação da saúde mental dos aviadores ganhou destaque, com a inclusão de novos testes e protocolos de acompanhamento.

3. Digitalização dos processos: Implementação de um sistema digital para registro e acompanhamento das certificações médicas, facilitando o acesso tanto para médicos credenciados quanto para profissionais da aviação.

4. Periodicidade de exames: Ajustes nas frequências de renovação de certificados médicos para diferentes categorias de profissionais.

Estes procedimentos visam alinhar o Brasil aos mais altos padrões internacionais de segurança aeronáutica, mantendo a competitividade e excelência do setor no cenário global.`
  },
{
    title: "5Novas Diretrizes da ANAC para 2024",
    category: "Regulamentação",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    excerpt: "A ANAC publicou atualizações importantes nos requisitos para certificação médica aeronáutica. Conheça as principais mudanças e como elas afetam os procedimentos de perícia.",
    content: `A Agência Nacional de Aviação Civil (ANAC) publicou uma série de atualizações cruciais nos requisitos para certificação médica aeronáutica que entrarão em vigor em 2024. Estas mudanças representam um marco importante na modernização dos procedimentos de perícia médica no Brasil.

As principais alterações incluem:

1. Novos critérios para avaliação cardiovascular: Foram estabelecidos protocolos mais rigorosos para a detecção precoce de condições cardíacas que possam comprometer a segurança de voo.

2. Atualização nos requisitos psicológicos: A avaliação da saúde mental dos aviadores ganhou destaque, com a inclusão de novos testes e protocolos de acompanhamento.

3. Digitalização dos processos: Implementação de um sistema digital para registro e acompanhamento das certificações médicas, facilitando o acesso tanto para médicos credenciados quanto para profissionais da aviação.

4. Periodicidade de exames: Ajustes nas frequências de renovação de certificados médicos para diferentes categorias de profissionais.

Estes procedimentos visam alinhar o Brasil aos mais altos padrões internacionais de segurança aeronáutica, mantendo a competitividade e excelência do setor no cenário global.`
  },
];

export const News = () => {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <>
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
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
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

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
              {selectedNews?.category}
            </Badge>
            <DialogTitle className="text-2xl">{selectedNews?.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{selectedNews?.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{selectedNews?.readTime}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-foreground whitespace-pre-line">
            {selectedNews?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
