import { Plane } from "lucide-react";
import logo from "@/assets/aclimepa_logo_branco_90x90.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ACLIMEPA Logo"
                className="h-[90px] w-[90px] object-contain"
              />
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
