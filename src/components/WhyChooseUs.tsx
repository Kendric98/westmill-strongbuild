import { Shield, DollarSign, Award, Users, Clock, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Unmatched Durability",
      description: "Our precast concrete products are engineered to withstand Kenya's harsh weather conditions and heavy usage for decades.",
      stats: "50+ Year Lifespan"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Reduce construction time and labor costs with our ready-to-install precast products. Faster installation, lower total project cost.",
      stats: "30% Cost Savings"
    },
    {
      icon: Award,
      title: "KEBS Compliance",
      description: "All our products meet or exceed Kenya Bureau of Standards specifications. Quality you can trust for critical infrastructure projects.",
      stats: "100% Certified"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "8+ years of proven experience in precast manufacturing. Our engineers and technicians deliver excellence in every product.",
      stats: "8+ Years Experience"
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Nationwide delivery network ensures your projects stay on schedule. From Nairobi to Mombasa, we deliver on time, every time.",
      stats: "Nationwide Coverage"
    },
    {
      icon: Wrench,
      title: "Full Service Support",
      description: "From consultation to installation, we provide comprehensive support throughout your project lifecycle.",
      stats: "End-to-End Service"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-steel-gray mb-3 sm:mb-4">
            Why Choose <span className="text-construction-yellow">West Mill Concrete</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 accent-gradient rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            We don't just manufacture concrete products – we engineer solutions that build Kenya's future. 
            Here's what sets us apart in the precast concrete industry.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="industrial-card h-full group animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 accent-gradient rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-steel-gray mb-3 sm:mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
                  {advantage.description}
                </p>
                
                <div className="text-construction-yellow font-bold text-base sm:text-lg">
                  {advantage.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-steel-gray rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 sm:mb-4">
            Ready to Build Something <span className="text-construction-yellow">Amazing?</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust West Mill Concrete for their most important projects. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="/contact" className="btn-primary w-full sm:w-auto">
              Get Free Quote
            </a>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-steel-gray w-full sm:w-auto">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;