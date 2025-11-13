import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ as FAQComponent } from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <FAQComponent />
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
