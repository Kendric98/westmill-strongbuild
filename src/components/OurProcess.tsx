import { CheckCircle, Truck, Wrench, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurProcess = () => {
  const processSteps = [
    {
      icon: FileCheck,
      title: "Design & Consultation",
      description: "We work with you to understand your requirements and provide expert recommendations for your project.",
      features: ["Site assessment", "Custom design", "Material selection", "Cost estimation"]
    },
    {
      icon: CheckCircle,
      title: "Precision Casting",
      description: "Using state-of-the-art equipment and quality materials, we cast your products to exact specifications.",
      features: ["Quality control", "Precision molds", "Strength testing", "Finish verification"]
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Our specialized vehicles ensure your precast products arrive safely and on schedule.",
      features: ["Timely delivery", "Secure transport", "Damage protection", "Site coordination"]
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Our certified team provides expert installation services to ensure optimal performance.",
      features: ["Expert installation", "Quality assurance", "Safety compliance", "Project completion"]
    }
  ];

  return (
    <section className="py-20 concrete-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Our <span className="text-construction-yellow">Proven Process</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to final installation, we follow a systematic approach 
            to ensure every project meets our high standards of quality and reliability.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="industrial-card relative overflow-hidden group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-construction-yellow text-charcoal rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-steel-gray mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-steel-gray">
                      <div className="w-1.5 h-1.5 bg-construction-yellow rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience our proven process for your next project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Project
            </button>
            <button className="btn-outline">
              Learn More About Our Process
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;