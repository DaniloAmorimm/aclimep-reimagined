import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Gallery } from "@/components/Gallery";
import { News } from "@/components/News";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Gallery />
      <News />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
