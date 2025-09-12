import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import paversImage from "@/assets/pavers.jpg";
import culvertsImage from "@/assets/culverts.jpg";
import slabsImage from "@/assets/slabs.jpg";
import wallPanelsImage from "@/assets/wall-panels.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: "pavers",
      title: "Concrete Pavers",
      description: "Durable interlocking pavers for driveways, walkways, and commercial spaces.",
      image: paversImage,
      features: ["Weather Resistant", "Easy Installation", "Multiple Designs"],
      applications: "Residential & Commercial Paving"
    },
    {
      id: "culverts",
      title: "Drainage Culverts",
      description: "Heavy-duty culverts for water management and infrastructure projects.",
      image: culvertsImage,
      features: ["High Load Capacity", "Corrosion Resistant", "Custom Sizes"],
      applications: "Roads & Infrastructure"
    },
    {
      id: "slabs",
      title: "Precast Slabs",
      description: "Engineered concrete slabs for rapid construction and superior performance.",
      image: slabsImage,
      features: ["Quick Installation", "Structural Integrity", "Cost Effective"],
      applications: "Building Construction"
    },
    {
      id: "wall-panels",
      title: "Wall Panels",
      description: "Architectural precast panels for modern building facades and structures.",
      image: wallPanelsImage,
      features: ["Aesthetic Appeal", "Energy Efficient", "Fire Resistant"],
      applications: "Commercial Buildings"
    }
  ];

  return (
    <section id="products" className="py-20 concrete-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Our <span className="text-construction-yellow">Product Range</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From foundation to finish, we manufacture premium precast concrete products 
            that meet the highest industry standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="industrial-card overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{product.applications}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-heading text-steel-gray mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-construction-yellow flex-shrink-0" />
                      <span className="text-steel-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-[var(--transition-smooth)]"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Products Preview */}
        <div className="bg-white rounded-2xl shadow-[var(--shadow-industrial)] p-8 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-steel-gray mb-4">
                More Quality Products
              </h3>
              <p className="text-muted-foreground mb-6">
                We also manufacture kerb stones, concrete benches, drainage blocks, 
                and provide professional installation services for all our products.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-construction-yellow" />
                  <span>Kerb Stones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-construction-yellow" />
                  <span>Concrete Benches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-construction-yellow" />
                  <span>Drainage Blocks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-construction-yellow" />
                  <span>Installation Services</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="btn-accent">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;