import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gallery as GalleryComponent } from "@/components/Gallery";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <GalleryComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
