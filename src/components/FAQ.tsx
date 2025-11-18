import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é uma perícia aeronáutica?",
    answer: "A perícia aeronáutica é um exame médico especializado realizado por profissionais credenciados pela ANAC para avaliar a aptidão física e mental de aviadores, comissários de voo e outros profissionais da aviação civil."
  },
  {
    question: "Qual a validade do Certificado Médico Aeronáutico (CMA)?",
    answer: "A validade varia conforme a classe do certificado e a idade do examinado. Para pilotos comerciais com menos de 40 anos, geralmente é de 12 meses. Para pilotos com mais de 40 anos, 6 meses. Pilotos privados têm validade de até 5 anos, dependendo da idade."
  },
  {
    question: "Quais exames são necessários para a perícia?",
    answer: "Pré determinados por categoria e determinados pelo Regulamento Brasileiro da Aviação Civil (RBAC) nº 67"
  },
  {
    question: "Preciso agendar com antecedência?",
    answer: "Sim, recomendamos agendar sua perícia com antecedência para garantir disponibilidade de horário e permitir que você prepare toda a documentação necessária."
  },
  {
    question: "Que documentos devo levar?",
    answer: "Você deve levar documento de identidade (RG ou CNH), CPF, comprovante de residência, carteira de piloto (se houver), e resultados de exames anteriores, caso possua."
  },
  {
    question: "O que acontece se eu for reprovado na perícia?",
    answer: "Em caso de Não apto, você receberá orientações sobre os motivos e, quando possível, sobre tratamentos ou procedimentos necessários para uma nova avaliação. Dependendo do caso, você pode solicitar junta médica para recurso."
  },
  {
    question: "ACLIMEPA realiza perícias para todas as classes?",
    answer: "Não, Somente os Associados a Aclimepa que realizam"
  },
  {
    question: "Quanto tempo demora o resultado?",
    answer: "Geralmente, o resultado da perícia e a emissão do CMA são disponibilizados no mesmo dia ou em até 48 horas, dependendo da necessidade de análise de exames complementares."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Perguntas Frequentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre perícias aeronáuticas e certificação médica
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
