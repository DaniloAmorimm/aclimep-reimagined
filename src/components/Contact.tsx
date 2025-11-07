import { Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco para mais informações sobre nossas atividades
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">E-mail</h3>
                      <a 
                        href="mailto:aclimepabrasil@gmail.com.br"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        aclimepabrasil@gmail.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Endereço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Rua Tamoios 182, 1º andar<br />
                        CEP 04630-001<br />
                        Jardim Aeroporto - São Paulo, SP
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-foreground">Redes Sociais</h3>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://www.facebook.com/peritosemaviacao/groups"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-5 w-5" />
                          Facebook
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                        asChild
                      >
                        <a 
                          href="https://www.instagram.com/aclimepabrasil/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-5 w-5" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Estamos sempre disponíveis para esclarecer dúvidas e fornecer 
                      informações sobre nossas atividades e serviços na área de 
                      medicina aeronáutica.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
