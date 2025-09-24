import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      icon: Shield,
      title: "KEBS Certified",
      description: "Kenya Bureau of Standards certification for all our precast concrete products",
      standard: "KS 02-1070:2010"
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "International quality management system certification",
      standard: "Quality Management"
    },
    {
      icon: CheckCircle,
      title: "Safety Standards",
      description: "Compliant with occupational health and safety regulations",
      standard: "Safety Compliant"
    },
    {
      icon: FileCheck,
      title: "Building Standards",
      description: "Meets all local and international building code requirements",
      standard: "Building Code Compliant"
    }
  ];

  const industryStandards = [
    "Concrete Strength Testing",
    "Durability Assessment", 
    "Weather Resistance",
    "Load Bearing Capacity",
    "Environmental Compliance",
    "Fire Safety Standards"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            <span className="text-construction-yellow">Certified Quality</span> & Standards
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry certifications and 
            compliance with the highest standards for safety, quality, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications Grid */}
          <div>
            <h3 className="font-heading text-steel-gray mb-8">Our Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="industrial-card group hover:shadow-[var(--shadow-bold)] transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-steel-gray mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                    <span className="inline-block bg-construction-yellow text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                      {cert.standard}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry Standards */}
          <div className="animate-fade-in">
            <h3 className="font-heading text-steel-gray mb-8">Industry Standards We Meet</h3>
            <Card className="industrial-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {industryStandards.map((standard, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-3 rounded-lg hover:bg-concrete-gray transition-colors"
                    >
                      <div className="w-6 h-6 bg-construction-yellow rounded-full flex items-center justify-center mr-4">
                        <CheckCircle className="h-4 w-4 text-charcoal" />
                      </div>
                      <span className="text-steel-gray font-medium">{standard}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-construction-yellow/10 to-bold-orange/10 rounded-lg">
                  <h4 className="font-semibold text-steel-gray mb-3">Quality Assurance Promise</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every product we manufacture undergoes rigorous testing and quality checks. 
                    We provide certificates of compliance and test reports for all our precast concrete products.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-construction-yellow mb-2">15+</div>
              <div className="text-steel-gray font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-construction-yellow mb-2">100+</div>
              <div className="text-steel-gray font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-construction-yellow mb-2">99%</div>
              <div className="text-steel-gray font-medium">Quality Pass Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;