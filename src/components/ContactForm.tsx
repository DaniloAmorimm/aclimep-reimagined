import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Criar email com os dados do formulário
    const subject = encodeURIComponent("Contato - ACLIMEPA");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
    );
    
    // Abrir cliente de email
    window.location.href = `mailto:contato@aclimepa.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Abrindo cliente de email",
      description: "Seu cliente de email será aberto com a mensagem preenchida.",
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Fale Conosco</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                    <a href="mailto:contato@aclimepa.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                      contato@aclimepa.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(11) 1111-1111</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">
                        Rua Tamoios 182, 1º andar<br />
                        CEP 04630-001<br />
                        Jardim Aeroporto - São Paulo, SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-foreground">Redes Sociais</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.facebook.com/peritosemaviacao/groups" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.instagram.com/aclimepabrasiloficial/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          Nossa equipe está à disposição para atendê-lo. Entre em contato conosco para esclarecer qualquer dúvida sobre medicina aeronáutica.
        </p>
      </div>
    </section>
  );
};
