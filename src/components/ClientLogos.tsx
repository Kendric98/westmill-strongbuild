import { Card, CardContent } from "@/components/ui/card";

const ClientLogos = () => {
  const clients = [
    { name: "Constant Motors & Investment Limited", categories: ["Building", "Civil Works"] },
    { name: "Fahari Residence", categories: ["Civil Works"] },
    { name: "Madisson Life Insurance", categories: ["Road Works", "Drainage Works"] },
    { name: "Rehani House", categories: ["Civil Works"] },
    { name: "Komarock Heights", categories: ["Wall Works", "Paving Works"] },
    { name: "ACK Nyeri Cathedral", categories: ["Paving Works"] },
    { name: "Meru County Govenment", categories: ["Civil Works"] },
    { name: "St. Peters Cravers", categories: ["Paving Works"] },
    { name: "Nyeri County Government", categories: ["Paving Works"] },
    { name: "Kiambu County Government", categories: ["Paving Works"] },
    { name: "Kilimambogo Teachers' College", categories: ["Paving Works"] },
    { name: "Kibiricha Market", categories: ["Paving Works"] },
    { name: "Sogea Saton Kenya", categories: ["Paving & Drainage"] },
    { name: "Giant Millers Limited", categories: ["Paving Works"] },
    { name: "Mt. Kenya University", categories: ["Paving Works"] },
    { name: "PCEA Kahawa Sukari", categories: ["Paving Works"] },
    { name: "Kahawa Barracks", categories: ["Paving Works"] },
    { name: "Thika Water & Sewerage Company", categories: ["Paving Works"] },
    { name: "Jubilee Feeds Limited", categories: ["Paving Works"] },
    { name: "China Railway Seventh Group", categories: ["Paving Works"] },
    { name: "Strabag International - Thiba Dam", categories: ["Paving Works", "Materials Supply"] },
    { name: "Albizia Limited", categories: ["Road Works", "Drainage Works"] }
  ];

  const categories = ["Paving Works", "Civil Works", "Building", "Road Works", "Civil Works", "Drainage Works", "Materials Supply", "Wall Works"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Trusted by <span className="text-construction-yellow">Leading Organizations</span>
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to partner with prestigious organizations across Kenya, 
            delivering quality precast concrete solutions for their projects.
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="text-center p-3 rounded-lg bg-concrete-gray hover:bg-construction-yellow hover:text-charcoal transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-sm font-medium">{category}</span>
            </div>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="industrial-card group hover:shadow-[var(--shadow-concrete)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Logo Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-concrete-gray to-steel-gray/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-construction-yellow/20 group-hover:to-bold-orange/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-steel-gray group-hover:text-construction-yellow transition-colors">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </div>
                </div>
                
                {/* Client Info */}
                <h4 className="font-semibold text-steel-gray text-sm mb-2 group-hover:text-construction-yellow transition-colors">
                  {client.name}
                </h4>
                <span className="inline-block bg-construction-yellow/10 text-construction-yellow px-2 py-1 rounded-full text-xs font-medium">
                  {client.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          <Card className="industrial-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h4 className="font-semibold text-steel-gray mb-3">Client Satisfaction</h4>
              <p className="text-muted-foreground text-sm">
                Consistently exceeding expectations with quality products and reliable service
              </p>
            </CardContent>
          </Card>

          <Card className="industrial-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1h</span>
              </div>
              <h4 className="font-semibold text-steel-gray mb-3">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                Fast turnaround times from quote to delivery for all project sizes
              </p>
            </CardContent>
          </Card>

          <Card className="industrial-card text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">8+</span>
              </div>
              <h4 className="font-semibold text-steel-gray mb-3">Years Experience</h4>
              <p className="text-muted-foreground text-sm">
                Proven track record of successful partnerships and project delivery
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Join our list of satisfied clients and experience the West Mill difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Your Partnership
            </button>
            <button className="btn-outline">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;