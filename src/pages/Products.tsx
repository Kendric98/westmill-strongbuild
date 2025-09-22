import { useState } from "react";
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

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleProductExpansion = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

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
            <h2 className="font-display text-steel-gray mb-8">Explore Our Product Categories</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  className="rounded-full hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showing {filteredProducts.length} {selectedCategory === "All Products" ? "products" : `${selectedCategory.toLowerCase()} products`}
            </p>
          </div>

          {/* Products Grid with Expandable Views */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="industrial-card overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-construction-yellow text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  {product.id === "pavers" && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-bold-orange text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-steel-gray mb-2">{product.title}</h3>
                  <p className="text-construction-yellow font-medium text-sm mb-3">{product.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Expandable Product Details */}
                  {expandedProduct === product.id && (
                    <div className="border-t border-border pt-4 mt-4 animate-fade-in">
                      {product.id === "pavers" ? (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-steel-gray mb-2">Available Options:</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-construction-yellow rounded mr-2"></div>
                                Standard Gray
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded mr-2"></div>
                                Red Clay
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-600 rounded mr-2"></div>
                                Ochre
                              </div>
                              <div className="flex items-center">
                                <div className="w-2 h-2 bg-green-600 rounded mr-2"></div>
                                Forest Green
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-steel-gray mb-2">Pricing Range:</h4>
                            <p className="text-sm text-muted-foreground">KSh 150 - 350 per m² (varies by design)</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-steel-gray mb-2">Sizes Available:</h4>
                            <p className="text-sm text-muted-foreground">200x100x60mm, 200x200x60mm, Custom sizes</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-steel-gray mb-2">Key Features:</h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              <li>• High strength concrete</li>
                              <li>• Weather resistant</li>
                              <li>• Easy installation</li>
                              <li>• Long-lasting durability</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-steel-gray mb-2">Applications:</h4>
                            <p className="text-sm text-muted-foreground">
                              Suitable for residential, commercial, and industrial projects
                            </p>
                          </div>
                        </div>
                      )}
                      <Button 
                        className="w-full mt-4 btn-outline text-sm"
                        onClick={() => window.location.href = `/products/${product.id}`}
                      >
                        View Full Specifications
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => toggleProductExpansion(product.id)}
                    >
                      {expandedProduct === product.id ? 'Show Less' : 'Quick View'}
                    </Button>
                    <Button 
                      size="sm"
                      className="btn-primary flex-1"
                      onClick={() => window.location.href = `/contact?product=${product.id}`}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No products found message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory("All Products")}
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;