import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

const Error500 = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <h1 className="text-9xl font-bold text-destructive mb-4">500</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Erro Interno do Servidor
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Algo deu errado no nosso servidor. Estamos trabalhando para resolver o problema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRefresh} variant="outline" size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Tentar Novamente
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

export default Error500;
