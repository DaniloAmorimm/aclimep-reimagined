import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ as FAQComponent } from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FAQComponent />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
