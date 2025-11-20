import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw, AlertCircle } from "lucide-react";

const Error503 = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <AlertCircle className="w-24 h-24 text-primary mx-auto mb-6" />
          <h1 className="text-9xl font-bold text-primary mb-4">503</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviço Temporariamente Indisponível
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            O site está temporariamente em manutenção. Por favor, tente novamente em alguns minutos.
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

export default Error503;
