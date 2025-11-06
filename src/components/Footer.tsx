import { Plane } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Plane className="h-8 w-8" />
              <div>
                <h3 className="font-bold text-xl">ACLIMEPA Brasil</h3>
                <p className="text-sm text-primary-foreground/80">
                  Medicina Aeronáutica de Excelência
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} ACLIMEPA Brasil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
