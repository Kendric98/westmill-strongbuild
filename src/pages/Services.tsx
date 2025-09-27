import { useState } from "react";
import { CheckCircle, Truck, Wrench, Users, Headphones, Shield, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Services = () => {
  const [selectedService, setSelectedService] = useState("All Services");

  const services = [
    {
      id: "custom-manufacturing",
      title: "Custom Manufacturing",
      icon: Factory,
      description: "Tailored precast concrete solutions designed to meet your specific project requirements and specifications.",
      features: [
        "Custom mold design and development",
        "Specialized concrete mix formulations",
        "Precision manufacturing processes",
        "Quality control at every stage",
        "Flexible production schedules"
      ],
      benefits: [
        "Perfect fit for unique projects",
        "Reduced waste and material costs",
        "Faster project completion",
        "Enhanced structural integrity"
      ],
      pricing: "From KSh 2,500 per m²",
      timeline: "2-4 weeks production time"
    },
    {
      id: "installation-services",
      title: "Installation Services",
      icon: Wrench,
      description: "Professional installation services by our certified team ensuring proper placement and long-lasting results.",
      features: [
        "Site preparation and assessment",
        "Professional installation teams",
        "Proper foundation preparation",
        "Precision placement techniques",
        "Post-installation inspection"
      ],
      benefits: [
        "Expert installation expertise",
        "Warranty on workmanship",
        "Reduced project timeline",
        "Professional finish quality"
      ],
      pricing: "From KSh 1,200 per m²",
      timeline: "1-3 days installation"
    },
    {
      id: "project-consultation",
      title: "Project Consultation",
      icon: Users,
      description: "Expert consultation services to help you plan, design, and execute your precast concrete projects successfully.",
      features: [
        "Project planning and design",
        "Material selection guidance",
        "Cost estimation and budgeting",
        "Timeline development",
        "Risk assessment and mitigation"
      ],
      benefits: [
        "Expert project guidance",
        "Cost-effective solutions",
        "Reduced project risks",
        "Optimized project outcomes"
      ],
      pricing: "From KSh 15,000 per consultation",
      timeline: "1-2 weeks consultation"
    },
    {
      id: "technical-support",
      title: "Technical Support",
      icon: Headphones,
      description: "Comprehensive technical support throughout your project lifecycle, from planning to completion and beyond.",
      features: [
        "24/7 technical assistance",
        "On-site technical visits",
        "Problem-solving support",
        "Maintenance guidance",
        "Training and education"
      ],
      benefits: [
        "Round-the-clock support",
        "Expert technical knowledge",
        "Quick issue resolution",
        "Extended product lifespan"
      ],
      pricing: "Included with all projects",
      timeline: "Immediate response"
    },
    {
      id: "nationwide-delivery",
      title: "Nationwide Delivery",
      icon: Truck,
      description: "Reliable delivery services across Kenya, ensuring your precast products reach your site safely and on time.",
      features: [
        "Nationwide coverage",
        "Specialized transport equipment",
        "Careful handling and protection",
        "Delivery scheduling",
        "Site-specific delivery planning"
      ],
      benefits: [
        "Convenient nationwide service",
        "Safe product transportation",
        "Flexible delivery schedules",
        "Reduced logistics complexity"
      ],
      pricing: "From KSh 500 per km",
      timeline: "1-5 days delivery"
    },
    {
      id: "quality-assurance",
      title: "Quality Assurance",
      icon: Shield,
      description: "Comprehensive quality assurance programs ensuring every product meets the highest industry standards.",
      features: [
        "Material testing and certification",
        "Production quality monitoring",
        "Final product inspection",
        "Quality documentation",
        "Continuous improvement processes"
      ],
      benefits: [
        "Guaranteed product quality",
        "Industry-standard compliance",
        "Reduced defects and rework",
        "Long-term product reliability"
      ],
      pricing: "Included in all products",
      timeline: "Throughout production"
    }
  ];

  const serviceCategories = [
    "All Services",
    "Custom Manufacturing",
    "Installation Services", 
    "Project Consultation",
    "Technical Support",
    "Nationwide Delivery",
    "Quality Assurance"
  ];

  const filteredServices = selectedService === "All Services" 
    ? services 
    : services.filter(service => service.title === selectedService);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Professional Services | Custom Manufacturing, Installation & Support | Westmill Concrete"
        description="Comprehensive precast concrete services including custom manufacturing, professional installation, project consultation, technical support, nationwide delivery, and quality assurance across Kenya."
        canonicalUrl="https://www.westmillconcrete.co.ke/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Precast Concrete Services",
          provider: {
            "@type": "Organization",
            name: "Westmill Concrete"
          },
          areaServed: "Kenya",
          serviceType: "Precast Concrete Manufacturing and Installation"
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Professional <span className="text-construction-yellow">Services</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 opacity-90 animate-slide-up">
            From custom manufacturing to nationwide delivery, we provide comprehensive precast concrete services 
            that ensure your project's success from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">6</span>
              <p className="text-sm text-gray-200">Core Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">24/7</span>
              <p className="text-sm text-gray-200">Support Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">100%</span>
              <p className="text-sm text-gray-200">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-steel-gray mb-4">
              Complete <span className="text-construction-yellow">Service Solutions</span>
            </h2>
            <div className="w-20 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive service portfolio covers every aspect of your precast concrete project, 
              ensuring quality, efficiency, and customer satisfaction.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
            {serviceCategories.map((category) => (
              <Button
                key={category}
                variant={category === selectedService ? "default" : "outline"}
                className="rounded-full hover:scale-105 transition-transform"
                onClick={() => setSelectedService(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="industrial-card overflow-hidden group hover:shadow-[var(--shadow-bold)] transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-construction-yellow/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-construction-yellow" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-steel-gray">
                        {service.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {service.pricing}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-steel-gray mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-construction-yellow mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-construction-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-steel-gray mb-3">Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="bg-steel-gray/5 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-steel-gray">Timeline:</span>
                      <span className="text-sm text-construction-yellow font-semibold">
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 btn-primary"
                      onClick={() => window.location.href = `/contact?service=${service.id}`}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = `/contact?consultation=${service.id}`}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-steel-gray text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We combine industry expertise, cutting-edge technology, and customer-focused approach 
              to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-construction-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-construction-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-300">
                Every service is backed by our quality assurance program and satisfaction guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-construction-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-300">
                Our certified professionals bring years of experience to every project.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-construction-yellow/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-construction-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-gray-300">
                We serve clients across Kenya with reliable delivery and installation services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-steel-gray mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how our comprehensive 
            services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Consultation
            </a>
            <a href="/products" className="btn-outline">
              View Our Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;