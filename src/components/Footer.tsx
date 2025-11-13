import { Plane } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <Plane className="h-6 w-6 md:h-8 md:w-8 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg md:text-xl">ACLIMEPA Brasil</h3>
                <p className="text-xs md:text-sm text-primary-foreground/80">
                  Medicina Aeronáutica de Excelência
                </p>
              </div>
            </div>
            
            <div className="text-center md:text-right w-full md:w-auto">
              <p className="text-xs md:text-sm text-primary-foreground/80">
                © {new Date().getFullYear()} ACLIMEPA Brasil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
