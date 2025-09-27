import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/project-1.jpg",
    alt: "Concrete Pavers Installation",
    category: "Paving",
    title: "Modern Driveway Project"
  },
  {
    id: 2,
    src: "/images/gallery/project-2.jpg",
    alt: "Drainage System",
    category: "Infrastructure",
    title: "Urban Drainage Solution"
  },
  {
    id: 3,
    src: "/images/gallery/project-3.jpg",
    alt: "Wall Panels",
    category: "Architectural",
    title: "Commercial Building Facade"
  },
  {
    id: 4,
    src: "/images/gallery/project-4.jpg",
    alt: "Culvert Installation",
    category: "Infrastructure",
    title: "Highway Culvert Project"
  },
  {
    id: 5,
    src: "/images/gallery/project-5.jpg",
    alt: "Decorative Paving",
    category: "Paving",
    title: "Park Walkway Design"
  },
  {
    id: 6,
    src: "/images/gallery/project-6.jpg",
    alt: "Concrete Benches",
    category: "Urban Furniture",
    title: "Public Space Enhancement"
  },
  {
    id: 7,
    src: "/images/gallery/project-7.jpg",
    alt: "Industrial Slabs",
    category: "Structural",
    title: "Warehouse Floor System"
  },
  {
    id: 8,
    src: "/images/gallery/project-8.jpg",
    alt: "Road Infrastructure",
    category: "Infrastructure",
    title: "Highway Construction"
  }
];

const categories = ["All", "Paving", "Infrastructure", "Architectural", "Urban Furniture", "Structural"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-steel-gray mb-4">
            Our <span className="text-construction-yellow">Project Gallery</span>
          </h2>
          <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our completed projects and see the quality of our precast concrete solutions in action.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full hover:scale-105 transition-transform"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer overflow-hidden industrial-card hover:shadow-[var(--shadow-bold)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-construction-yellow text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-6" />
              </Button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90">{selectedImage.category} Project</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
