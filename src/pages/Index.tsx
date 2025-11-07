import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
