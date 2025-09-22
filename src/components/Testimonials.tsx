import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "Project Manager",
      company: "Nairobi Metropolitan Services",
      content: "West Mill Concrete delivered exceptional quality pavers for our road improvement project. The products exceeded our expectations and were delivered right on schedule.",
      rating: 5,
      project: "Eastlands Road Project"
    },
    {
      name: "Sarah Njoki",
      role: "Construction Manager", 
      company: "Equity Bank Building Project",
      content: "Their precast slabs significantly reduced our construction timeline by 40%. Professional service from consultation to installation. Highly recommended for commercial projects.",
      rating: 5,
      project: "Equity Bank Branch"
    },
    {
      name: "Michael Ochieng",
      role: "Infrastructure Director",
      company: "Mombasa County",
      content: "Outstanding drainage culverts that have withstood heavy rains without any issues. West Mill's products are built to last and their team provides excellent technical support.",
      rating: 5,
      project: "Coastal Drainage System"
    }
  ];

  return (
    <section className="py-20 concrete-texture">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            What Our <span className="text-construction-yellow">Clients Say</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what construction professionals 
            and project managers say about our products and services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="industrial-card bg-white relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-construction-yellow fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Project Badge */}
                <div className="inline-block bg-construction-yellow/10 text-construction-yellow px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {testimonial.project}
                </div>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-steel-gray">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-bold-orange font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div>
            <div className="text-4xl font-bold text-construction-yellow mb-2">100+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-construction-yellow mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-construction-yellow mb-2">100%</div>
            <div className="text-muted-foreground">KEBS Certified</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-construction-yellow mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;