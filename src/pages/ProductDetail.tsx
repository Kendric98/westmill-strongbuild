import { useParams } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import paversImage from "@/assets/pavers.jpg";
import culvertsImage from "@/assets/culverts.jpg";
import slabsImage from "@/assets/slabs.jpg";
import wallPanelsImage from "@/assets/wall-panels.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  const productData = {
    "pavers": {
      title: "Concrete Pavers",
      subtitle: "Standard & Colored Options",
      category: "Paving Solutions",
      image: paversImage,
      description: "Our premium concrete pavers combine durability with aesthetic appeal, offering versatile solutions for driveways, walkways, patios, and commercial spaces. Available in various colors, patterns, and finishes to complement any architectural style.",
      benefits: [
        "Superior durability and load-bearing capacity",
        "Weather and freeze-thaw resistant",
        "Easy installation with interlocking design", 
        "Low maintenance and long-lasting",
        "Environmentally friendly and recyclable",
        "Wide range of colors and patterns available"
      ],
      applications: [
        "Residential driveways and walkways",
        "Commercial parking areas",
        "Public plazas and pedestrian areas",
        "Pool decks and patios",
        "Shopping centers and retail spaces",
        "Industrial loading areas"
      ],
      specifications: [
        { property: "Compressive Strength", value: "≥ 40 MPa", standard: "BS EN 1338" },
        { property: "Water Absorption", value: "≤ 6%", standard: "BS EN 1338" },
        { property: "Abrasion Resistance", value: "≤ 23 mm", standard: "BS EN 1338" },
        { property: "Freeze-Thaw Resistance", value: "Class 3", standard: "BS EN 1338" },
        { property: "Slip Resistance", value: "Class 3", standard: "BS EN 1338" },
        { property: "Thickness", value: "60mm, 80mm, 100mm", standard: "Standard" }
      ],
      sizes: [
        { dimension: "200 x 100 x 60mm", description: "Standard rectangular paver" },
        { dimension: "300 x 300 x 60mm", description: "Square format paver" },
        { dimension: "400 x 200 x 80mm", description: "Large format paver" },
        { dimension: "200 x 100 x 80mm", description: "Heavy duty rectangular" }
      ]
    },
    "culverts": {
      title: "Drainage Culverts",
      subtitle: "Heavy-duty Infrastructure",
      category: "Infrastructure",
      image: culvertsImage,
      description: "Heavy-duty precast concrete culverts designed for efficient water management and drainage systems. Built to withstand heavy loads and extreme weather conditions.",
      benefits: [
        "High load-bearing capacity for heavy traffic",
        "Resistant to water damage and erosion",
        "Long-lasting with minimal maintenance",
        "Quick installation reduces project time",
        "Cost-effective solution for drainage",
        "Various sizes available for different applications"
      ],
      applications: [
        "Road and highway drainage",
        "Agricultural water management",
        "Urban stormwater systems",
        "Industrial site drainage",
        "Bridge and underpass construction",
        "Flood control infrastructure"
      ],
      specifications: [
        { property: "Load Class", value: "Class A, B, C", standard: "ASTM C506" },
        { property: "Compressive Strength", value: "≥ 35 MPa", standard: "ASTM C76" },
        { property: "Absorption", value: "≤ 5%", standard: "ASTM C497" },
        { property: "Crack Width", value: "≤ 0.25mm", standard: "ASTM C497" },
        { property: "Joint Type", value: "Tongue & Groove", standard: "Standard" }
      ],
      sizes: [
        { dimension: "600mm diameter", description: "Small residential drainage" },
        { dimension: "900mm diameter", description: "Medium commercial drainage" },
        { dimension: "1200mm diameter", description: "Large infrastructure projects" },
        { dimension: "1500mm diameter", description: "Highway and major roads" }
      ]
    },
    "slabs": {
      title: "Precast Slabs",
      subtitle: "Structural Elements",
      category: "Structural",
      image: slabsImage,
      description: "Engineered precast concrete slabs for rapid construction and superior performance. Ideal for flooring systems, roofing, and structural applications.",
      benefits: [
        "Faster construction compared to cast-in-place",
        "Consistent quality and finish",
        "High structural performance",
        "Reduced labor costs",
        "Weather-independent production",
        "Customizable dimensions and reinforcement"
      ],
      applications: [
        "Multi-story building floors",
        "Parking garage decks",
        "Industrial flooring systems",
        "Bridge deck construction",
        "Roofing applications",
        "Mezzanine floor construction"
      ],
      specifications: [
        { property: "Compressive Strength", value: "≥ 30 MPa", standard: "BS EN 13369" },
        { property: "Flexural Strength", value: "≥ 4.5 MPa", standard: "BS EN 13369" },
        { property: "Fire Resistance", value: "2-4 hours", standard: "BS EN 1992" },
        { property: "Thermal Conductivity", value: "1.7 W/mK", standard: "BS EN 12664" },
        { property: "Thickness Range", value: "150-400mm", standard: "Standard" }
      ],
      sizes: [
        { dimension: "6000 x 1200 x 200mm", description: "Standard floor slab" },
        { dimension: "8000 x 1200 x 250mm", description: "Heavy-duty floor slab" },
        { dimension: "10000 x 1200 x 300mm", description: "Long-span floor slab" },
        { dimension: "Custom dimensions", description: "Project-specific requirements" }
      ]
    },
    "wall-panels": {
      title: "Wall Panels",
      subtitle: "Architectural Solutions",
      category: "Architectural",
      image: wallPanelsImage,
      description: "Architectural precast panels for modern building facades and structures. Combining aesthetic appeal with structural integrity.",
      benefits: [
        "Superior architectural finish options",
        "Excellent thermal performance",
        "Fast installation process",
        "Durable and low maintenance",
        "Wide range of textures and colors",
        "Cost-effective facade solution"
      ],
      applications: [
        "Commercial building facades",
        "Industrial facility walls",
        "Residential complexes",
        "Educational institutions",
        "Healthcare facilities",
        "Retail and office buildings"
      ],
      specifications: [
        { property: "Panel Thickness", value: "150-300mm", standard: "BS EN 13369" },
        { property: "Thermal Resistance", value: "2.5-4.0 m²K/W", standard: "BS EN ISO 6946" },
        { property: "Fire Rating", value: "A1 Non-combustible", standard: "BS EN 13501" },
        { property: "Wind Load Resistance", value: "2.5 kN/m²", standard: "BS EN 1991" },
        { property: "Connection Type", value: "Mechanical fixings", standard: "Standard" }
      ],
      sizes: [
        { dimension: "3000 x 1200 x 200mm", description: "Standard wall panel" },
        { dimension: "6000 x 1200 x 250mm", description: "Large format panel" },
        { dimension: "3000 x 2400 x 200mm", description: "Double-height panel" },
        { dimension: "Custom sizes", description: "Architectural requirements" }
      ]
    }
  };

  const product = productData[id as keyof typeof productData] || productData.pavers;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb & Back */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/products" className="hover:text-primary">Products</a>
              <span>/</span>
              <span className="text-foreground">{product.title}</span>
            </div>
            <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-construction-yellow text-charcoal">
                {product.category}
              </Badge>
              <h1 className="font-display text-steel-gray mb-4">{product.title}</h1>
              <p className="text-xl text-construction-yellow font-semibold mb-6">{product.subtitle}</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  Request Quote
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
                <Button className="btn-accent">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-2xl shadow-[var(--shadow-industrial)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="py-16 concrete-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="industrial-card animate-slide-up">
              <CardHeader>
                <CardTitle className="font-heading text-steel-gray">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-construction-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="industrial-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="font-heading text-steel-gray">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-bold-orange flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-steel-gray mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our products meet or exceed international standards for quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="industrial-card">
              <CardHeader>
                <CardTitle className="font-heading text-steel-gray">Performance Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 font-semibold text-steel-gray">Property</th>
                        <th className="text-left py-3 font-semibold text-steel-gray">Value</th>
                        <th className="text-left py-3 font-semibold text-steel-gray">Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 text-muted-foreground">{spec.property}</td>
                          <td className="py-3 font-medium text-foreground">{spec.value}</td>
                          <td className="py-3 text-sm text-muted-foreground">{spec.standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="industrial-card">
              <CardHeader>
                <CardTitle className="font-heading text-steel-gray">Available Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.sizes.map((size, index) => (
                    <div key={index} className="p-4 bg-concrete-gray rounded-lg">
                      <div className="font-semibold text-steel-gray mb-1">{size.dimension}</div>
                      <div className="text-sm text-muted-foreground">{size.description}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-construction-yellow/10 rounded-lg border border-construction-yellow/20">
                  <p className="text-sm text-steel-gray">
                    <strong>Custom sizes available</strong> - Contact us for specific dimensional requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our team for detailed specifications, pricing, and delivery information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call +254 700 123 456
            </Button>
            <Button className="btn-outline">
              <Mail className="mr-2 h-5 w-5" />
              Email Quote Request
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;