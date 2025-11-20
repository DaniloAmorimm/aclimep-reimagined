import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gallery as GalleryComponent } from "@/components/Gallery";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <GalleryComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

