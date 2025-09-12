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
      description: "15+ years of combined experience in precast manufacturing. Our engineers and technicians deliver excellence in every product.",
      stats: "15+ Years Experience"
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Why Choose <span className="text-construction-yellow">West Mill Concrete</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just manufacture concrete products – we engineer solutions that build Kenya's future. 
            Here's what sets us apart in the precast concrete industry.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title} 
              className="industrial-card h-full group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-heading text-steel-gray mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {advantage.description}
                </p>
                
                <div className="text-construction-yellow font-bold text-lg">
                  {advantage.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-steel-gray rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="font-display text-white mb-4">
            Ready to Build Something <span className="text-construction-yellow">Amazing?</span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust West Mill Concrete for their most important projects. 
            Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Free Consultation
            </button>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-steel-gray">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;