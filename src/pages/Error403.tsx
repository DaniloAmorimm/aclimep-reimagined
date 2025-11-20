import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";

const Error403 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <ShieldAlert className="w-24 h-24 text-destructive mx-auto mb-6" />
          <h1 className="text-9xl font-bold text-destructive mb-4">403</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Acesso Negado
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Você não tem permissão para acessar esta página. Entre em contato com o administrador se achar que isso é um erro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate(-1)} variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </Button>
            <Button onClick={() => navigate("/")} size="lg">
              <Home className="mr-2 h-5 w-5" />
              Página Inicial
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error403;
