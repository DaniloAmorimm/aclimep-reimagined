import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { News as NewsComponent } from "@/components/News";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <NewsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default News;
