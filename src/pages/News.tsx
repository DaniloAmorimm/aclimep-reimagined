import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { News as NewsComponent } from "@/components/News";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <NewsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default News;
