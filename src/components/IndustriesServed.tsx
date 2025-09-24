import { Building, Home, Factory, Landmark, Construction, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const IndustriesServed = () => {
  const industries = [
    {
      icon: Construction,
      title: "Infrastructure & Roads",
      description: "Highways, drainage systems, culverts, and road infrastructure projects",
      projects: ["Highway drainage", "Road pavers", "Culvert systems", "Kerb stones"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Home,
      title: "Residential Estates",
      description: "Housing developments, private residences, and community projects",
      projects: ["Driveways", "Walkways", "Garden features", "Boundary walls"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building,
      title: "Commercial Buildings",
      description: "Office complexes, retail centers, and commercial developments",
      projects: ["Parking areas", "Facades", "Structural elements", "Architectural features"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Factory,
      title: "Industrial Facilities",
      description: "Factories, warehouses, and industrial infrastructure",
      projects: ["Loading bays", "Industrial flooring", "Drainage systems", "Security features"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Landmark,
      title: "Government Projects",
      description: "Public infrastructure, schools, hospitals, and government buildings",
      projects: ["Public walkways", "Institutional buildings", "Community centers", "Public utilities"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail & Hospitality",
      description: "Shopping centers, hotels, restaurants, and entertainment venues",
      projects: ["Mall exteriors", "Hotel landscapes", "Restaurant patios", "Entertainment venues"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 concrete-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Industries We <span className="text-construction-yellow">Serve</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential projects to major infrastructure developments, 
            our precast concrete solutions serve diverse industries across Kenya.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="industrial-card group hover:shadow-[var(--shadow-bold)] transition-all duration-300 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon & Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mr-4`}>
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-steel-gray group-hover:text-construction-yellow transition-colors">
                    {industry.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Project Types */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-steel-gray text-sm mb-3">Typical Projects:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {industry.projects.map((project, projectIndex) => (
                      <div 
                        key={projectIndex} 
                        className="flex items-center text-xs text-steel-gray"
                      >
                        <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full mr-2 flex-shrink-0"></div>
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-heading text-steel-gray mb-4">Our Industry Impact</h3>
            <p className="text-muted-foreground">Trusted by leading organizations across various sectors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow mb-2">150+</div>
              <div className="text-steel-gray text-sm">Residential Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow mb-2">75+</div>
              <div className="text-steel-gray text-sm">Commercial Buildings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow mb-2">50+</div>
              <div className="text-steel-gray text-sm">Infrastructure Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow mb-2">25+</div>
              <div className="text-steel-gray text-sm">Government Contracts</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Looking for precast concrete solutions for your industry?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <a href="/contact">
              Discuss Your Project with Us
             </a>
            </button>
            <button className="btn-outline">
              <a href="#">
              View Case Studies
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;