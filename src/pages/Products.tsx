import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import paversImage from "@/assets/pavers.jpg";
import culvertsImage from "@/assets/culverts.jpg";
import slabsImage from "@/assets/slabs.jpg";
import wallPanelsImage from "@/assets/wall-panels.jpg";

const Products = () => {
  const products = [
    {
      id: "pavers",
      title: "Concrete Pavers",
      subtitle: "Standard & Colored",
      description: "Durable interlocking pavers for driveways, walkways, and commercial spaces.",
      image: paversImage,
      category: "Paving Solutions"
    },
    {
      id: "culverts",
      title: "Drainage Culverts",
      subtitle: "Heavy-duty Infrastructure",
      description: "Heavy-duty culverts for water management and infrastructure projects.",
      image: culvertsImage,
      category: "Infrastructure"
    },
    {
      id: "slabs",
      title: "Precast Slabs",
      subtitle: "Structural Elements",
      description: "Engineered concrete slabs for rapid construction and superior performance.",
      image: slabsImage,
      category: "Structural"
    },
    {
      id: "wall-panels",
      title: "Wall Panels",
      subtitle: "Architectural Solutions",
      description: "Architectural precast panels for modern building facades and structures.",
      image: wallPanelsImage,
      category: "Architectural"
    },
    {
      id: "kerb-stones",
      title: "Kerb Stones",
      subtitle: "Road Infrastructure",
      description: "Precision-cast kerb stones for roadways, parking lots, and urban development.",
      image: paversImage,
      category: "Infrastructure"
    },
    {
      id: "concrete-benches",
      title: "Concrete Benches",
      subtitle: "Urban Furniture",
      description: "Durable outdoor seating solutions for parks, schools, and public spaces.",
      image: slabsImage,
      category: "Urban Furniture"
    },
    {
      id: "drainage-blocks",
      title: "Drainage Blocks",
      subtitle: "Water Management",
      description: "Specialized blocks for efficient water drainage and management systems.",
      image: culvertsImage,
      category: "Infrastructure"
    },
    {
      id: "installation-services",
      title: "Installation Services",
      subtitle: "Professional Installation",
      description: "Expert installation and contractor services for all our precast products.",
      image: wallPanelsImage,
      category: "Services"
    },
    {
      id: "fencing-posts",
      title: "Fencing Posts",
      subtitle: "Security & Boundaries",
      description: "Strong, weather-resistant concrete posts for fencing and boundary solutions.",
      image: paversImage,
      category: "Security"
    },
    {
      id: "powerline-blocks",
      title: "Powerline Blocks",
      subtitle: "Utility Infrastructure",
      description: "Specialized blocks for powerline infrastructure and utility applications.",
      image: slabsImage,
      category: "Utilities"
    },
    {
      id: "ventilation-blocks",
      title: "Ventilation Blocks",
      subtitle: "Building Ventilation",
      description: "Decorative and functional blocks for building ventilation systems.",
      image: wallPanelsImage,
      category: "Building Systems"
    },
    {
      id: "concrete-waffles",
      title: "Concrete Waffles",
      subtitle: "Decorative Elements",
      description: "Decorative waffle-pattern blocks for architectural and landscaping projects.",
      image: culvertsImage,
      category: "Decorative"
    },
    {
      id: "hollow-blocks",
      title: "Hollow Blocks",
      subtitle: "Construction Blocks",
      description: "Lightweight hollow blocks for efficient construction and insulation.",
      image: paversImage,
      category: "Construction"
    },
    {
      id: "wall-copings",
      title: "Wall Copings",
      subtitle: "Wall Protection",
      description: "Protective coping stones for walls, providing weather protection and aesthetics.",
      image: wallPanelsImage,
      category: "Protection"
    },
    {
      id: "cobble-stones",
      title: "Cobble Stones",
      subtitle: "Traditional Paving",
      description: "Classic cobblestone designs for traditional and decorative paving applications.",
      image: slabsImage,
      category: "Decorative"
    },
    {
      id: "precast-essentials",
      title: "Other Precast Essentials",
      subtitle: "Custom Solutions",
      description: "Custom precast solutions tailored to your specific project requirements.",
      image: culvertsImage,
      category: "Custom"
    }
  ];

  const categories = [
    "All Products",
    "Paving Solutions", 
    "Infrastructure", 
    "Structural", 
    "Architectural",
    "Urban Furniture",
    "Services",
    "Security",
    "Utilities",
    "Building Systems",
    "Decorative",
    "Construction",
    "Protection",
    "Custom"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-white mb-6 animate-fade-in">
            Complete Range of <span className="text-construction-yellow">Precast Products</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-slide-up">
            From foundation to finish, we manufacture premium precast concrete products 
            that meet the highest industry standards for construction, infrastructure, and architectural projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button className="btn-primary">
              <Download className="mr-2 h-5 w-5" />
              Download Full Catalog
            </Button>
            <Button className="btn-outline">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 concrete-texture">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Products" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="industrial-card overflow-hidden group animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-construction-yellow text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full btn-primary text-sm">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-steel-gray mb-2">{product.title}</h3>
                  <p className="text-construction-yellow font-medium text-sm mb-3">{product.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;