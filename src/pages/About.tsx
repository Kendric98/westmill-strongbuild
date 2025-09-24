import { Shield, Award, Users, Factory, Target, Eye, Heart, Lightbulb, Handshake, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-industrial.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We maintain the highest standards in manufacturing, ensuring every product meets international specifications and exceeds customer expectations."
    },
    {
      icon: Handshake,
      title: "Reliability", 
      description: "Our commitment to consistent delivery, transparent communication, and dependable service has built lasting partnerships across Kenya."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously invest in modern technology and processes to develop cutting-edge precast solutions for tomorrow's construction challenges."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Built on decades of integrity, we honor our commitments and maintain transparent relationships with clients, suppliers, and communities."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to environmental responsibility through efficient production processes and sustainable material sourcing."
    }
  ];

  const milestones = [
    {
      year: "2017",
      title: "Company Founded",
      description: "West Mill Concrete established with a vision to revolutionize Kenya's precast industry."
    },
    {
      year: "2018", 
      title: "First Major Project",
      description: "Completed our first large-scale infrastructure project, setting the standard for quality."
    },
    {
      year: "2020",
      title: "KEBS Certification",
      description: "Achieved Kenya Bureau of Standards certification, validating our quality management systems."
    },
    {
      year: "2021",
      title: "Facility Expansion",
      description: "Doubled our production capacity with state-of-the-art manufacturing equipment."
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Launched eco-friendly production processes and waste reduction programs."
    },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Recognized as Kenya's leading precast concrete manufacturer with 500+ completed projects."
    }
  ];

  const certifications = [
    { name: "KEBS Quality Certification", standard: "" },
    { name: "Construction Industry Standards", standard: "" },
    { name: "Environmental Management", standard: "" },
    { name: "Occupational Health & Safety", standard: "" }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Unmatched Durability",
      description: "Our precast products are engineered to withstand Kenya's diverse climate conditions, ensuring decades of reliable performance."
    },
    {
      icon: Award,
      title: "Proven Reliability",
      description: "With over 500 completed projects and 15+ years of experience, we deliver consistent quality and on-time project completion."
    },
    {
      icon: Target,
      title: "Regulatory Compliance",
      description: "All products meet KEBS standards and international specifications, ensuring your projects comply with building codes and regulations."
    },
    {
      icon: Factory,
      title: "Cost Effectiveness",
      description: "Our efficient manufacturing processes and local production reduce costs while maintaining premium quality standards."
    },
    {
      icon: Lightbulb,
      title: "Technical Innovation",
      description: "We leverage cutting-edge technology and continuous R&D to provide advanced precast solutions for modern construction challenges."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our experienced engineering team provides comprehensive technical support from design consultation to installation guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-white text-center">
          <h1 className="font-display text-white mb-6 animate-fade-in">
            Building Kenya's <span className="text-construction-yellow">Future</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            For over 15 years, West Mill Concrete has been at the forefront of Kenya's construction industry, 
            delivering innovative precast solutions that shape our nation's infrastructure.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-steel-gray mb-6">About West Mill Concrete</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                West Mill Concrete stands as Kenya's premier manufacturer of precast concrete products, 
                combining traditional craftsmanship with modern technology to deliver superior construction solutions. 
                Our commitment to excellence has made us the trusted partner for architects, engineers, and contractors 
                across East Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our state-of-the-art facility, we produce a comprehensive range of precast products that serve 
                diverse sectors including residential, commercial, industrial, and infrastructure development. 
                Every product is manufactured to meet international standards while being adapted for local conditions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-construction-yellow">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-construction-yellow">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={heroImage}
                alt="West Mill Concrete Facility"
                className="w-full rounded-2xl shadow-[var(--shadow-industrial)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 concrete-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="industrial-card animate-slide-up">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                <CardTitle className="font-heading text-steel-gray">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, high-quality precast concrete solutions that enable sustainable construction 
                  and infrastructure development across Kenya and East Africa, while maintaining the highest standards 
                  of safety, quality, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="industrial-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-bold-orange mx-auto mb-4" />
                <CardTitle className="font-heading text-steel-gray">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading manufacturer of precast concrete products in East Africa, recognized for our 
                  innovation, quality, and contribution to building resilient infrastructure that supports 
                  sustainable economic growth and improved quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-steel-gray mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every product we manufacture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="industrial-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <value.icon className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <CardTitle className="font-heading text-steel-gray">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 concrete-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-steel-gray mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership - the milestones that shaped West Mill Concrete.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-construction-yellow"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="industrial-card">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-construction-yellow text-charcoal">{milestone.year}</Badge>
                        <h3 className="font-heading text-steel-gray mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-construction-yellow rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-steel-gray mb-4">Certifications & Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality is validated by rigorous certification processes and adherence to international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert.name} className="industrial-card text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <h3 className="font-semibold text-steel-gray mb-2">{cert.name}</h3>
                  <Badge variant="outline" className="text-xs">{cert.standard}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-white mb-4">Why Choose West Mill Concrete</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our unique combination of experience, innovation, and commitment sets us apart in the precast industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={item.title} className="bg-white/10 border-white/20 text-white animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <item.icon className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                  <CardTitle className="font-heading text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90 leading-relaxed">{item.description}</p>
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

export default About;