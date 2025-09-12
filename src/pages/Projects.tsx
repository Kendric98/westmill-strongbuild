import { useState } from "react";
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import paversImage from "@/assets/pavers.jpg";
import culvertsImage from "@/assets/culverts.jpg";
import slabsImage from "@/assets/slabs.jpg";
import wallPanelsImage from "@/assets/wall-panels.jpg";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "nairobi-mall",
      title: "Nairobi Central Shopping Mall",
      location: "Nairobi, Kenya",
      year: "2024",
      image: wallPanelsImage,
      category: "Commercial",
      products: ["Wall Panels", "Precast Slabs", "Pavers"],
      description: "Complete precast solution for a modern 5-story shopping complex featuring architectural wall panels, structural slabs, and decorative paving. The project showcased our ability to deliver large-scale commercial solutions on time and within budget.",
      testimonial: "West Mill Concrete delivered exceptional quality and professionalism. Their precast solutions helped us complete the project 3 months ahead of schedule.",
      client: "Sarah Kimani, Project Manager"
    },
    {
      id: "industrial-park",
      title: "Mombasa Industrial Park Development",
      location: "Mombasa, Kenya", 
      year: "2024",
      image: slabsImage,
      category: "Industrial",
      products: ["Heavy Duty Slabs", "Drainage Culverts", "Fencing Posts"],
      description: "Comprehensive infrastructure development using heavy-duty precast slabs for warehouse flooring, drainage culverts for water management, and security fencing throughout the 50-acre industrial complex.",
      testimonial: "The quality of West Mill's precast products exceeded our expectations. Their technical expertise was invaluable throughout the project.",
      client: "John Mwangi, Site Engineer"
    },
    {
      id: "university-campus",
      title: "Strathmore University Expansion",
      location: "Nairobi, Kenya",
      year: "2023",
      image: paversImage,
      category: "Educational",
      products: ["Concrete Pavers", "Concrete Benches", "Kerb Stones"],
      description: "Campus beautification project featuring colored concrete pavers for walkways, custom concrete benches for outdoor study areas, and precision kerb stones for landscaping definition.",
      testimonial: "West Mill's attention to detail and commitment to sustainability aligned perfectly with our campus development goals.",
      client: "Dr. Mary Ochieng, Facilities Director"
    },
    {
      id: "highway-infrastructure",
      title: "Thika Highway Drainage Upgrade",
      location: "Kiambu County, Kenya",
      year: "2023",
      image: culvertsImage,
      category: "Infrastructure",
      products: ["Drainage Culverts", "Drainage Blocks", "Kerb Stones"],
      description: "Critical infrastructure upgrade involving large-diameter culverts, specialized drainage blocks, and high-quality kerb stones for improved road safety and water management along the busy highway corridor.",
      testimonial: "Their engineering expertise and quality manufacturing ensured our drainage system meets international standards.",
      client: "Eng. Peter Mutua, KENHA"
    },
    {
      id: "residential-estate",
      title: "Kilimani Premium Residences",
      location: "Nairobi, Kenya",
      year: "2023",
      image: wallPanelsImage,
      category: "Residential",
      products: ["Wall Panels", "Pavers", "Wall Copings"],
      description: "Luxury residential development featuring architectural wall panels for modern facade design, premium pavers for driveways and courtyards, and decorative wall copings for boundary walls.",
      testimonial: "The aesthetic quality and durability of West Mill's products added significant value to our premium development.",
      client: "James Kariuki, Developer"
    },
    {
      id: "factory-complex",
      title: "East Africa Cement Plant",
      location: "Machakos, Kenya",
      year: "2022",
      image: slabsImage,
      category: "Industrial",
      products: ["Industrial Slabs", "Powerline Blocks", "Fencing Posts"],
      description: "Heavy industrial application featuring reinforced precast slabs for equipment foundations, specialized powerline blocks for electrical infrastructure, and robust fencing posts for perimeter security.",
      testimonial: "West Mill's industrial-grade products have performed flawlessly under extreme operational conditions.",
      client: "Ahmed Hassan, Plant Manager"
    },
    {
      id: "public-park",
      title: "Uhuru Park Renovation",
      location: "Nairobi, Kenya",
      year: "2022",
      image: paversImage,
      category: "Public",
      products: ["Concrete Benches", "Pavers", "Ventilation Blocks"],
      description: "Public space enhancement project featuring durable concrete benches for seating areas, decorative pavers for walkways, and ventilation blocks for underground utility access.",
      testimonial: "Their products have withstood heavy public use while maintaining their aesthetic appeal.",
      client: "Grace Wanjiku, City Council"
    },
    {
      id: "airport-expansion",
      title: "JKIA Terminal Expansion",
      location: "Nairobi, Kenya",
      year: "2022",
      image: wallPanelsImage,
      category: "Transportation",
      products: ["Architectural Panels", "Heavy Duty Slabs", "Drainage Systems"],
      description: "Airport infrastructure project featuring large-format architectural panels for terminal facades, heavy-duty slabs for aircraft loading areas, and comprehensive drainage solutions.",
      testimonial: "West Mill delivered world-class quality that meets international aviation standards.",
      client: "Capt. David Kimutai, KAA"
    },
    {
      id: "water-treatment",
      title: "Nyeri Water Treatment Plant",
      location: "Nyeri, Kenya",
      year: "2021",
      image: culvertsImage,
      category: "Utilities",
      products: ["Specialized Culverts", "Wall Panels", "Drainage Blocks"],
      description: "Water infrastructure project featuring corrosion-resistant culverts for water conveyance, structural wall panels for treatment facility construction, and specialized drainage blocks.",
      testimonial: "Their expertise in water infrastructure applications saved us significant time and costs.",
      client: "Eng. Ruth Wambui, NYWASCO"
    },
    {
      id: "school-compound",
      title: "Alliance High School Upgrade",
      location: "Kikuyu, Kenya",
      year: "2021",
      image: paversImage,
      category: "Educational",
      products: ["Pavers", "Concrete Benches", "Hollow Blocks"],
      description: "School infrastructure improvement featuring slip-resistant pavers for sports courts, ergonomic concrete benches for outdoor learning spaces, and hollow blocks for new classroom construction.",
      testimonial: "West Mill's products created a safe and inspiring learning environment for our students.",
      client: "Principal Michael Ndung'u"
    }
  ];

  const categories = ["All Projects", "Commercial", "Industrial", "Educational", "Infrastructure", "Residential", "Public", "Transportation", "Utilities"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-white mb-6 animate-fade-in">
            Our <span className="text-construction-yellow">Project Portfolio</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-slide-up">
            Discover how West Mill Concrete has contributed to Kenya's infrastructure development 
            through innovative precast solutions across diverse sectors.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm animate-scale-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow">500+</div>
              <div>Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow">15+</div>
              <div>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-construction-yellow">50+</div>
              <div>Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 concrete-texture">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Projects" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="industrial-card overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-construction-yellow text-charcoal">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-steel-gray border-white">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-steel-gray mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{project.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.products.map((product) => (
                      <Badge key={product} variant="outline" className="text-xs">
                        {product}
                      </Badge>
                    ))}
                  </div>

                  <Collapsible
                    open={expandedProject === project.id}
                    onOpenChange={() => setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <span className="text-sm font-medium">View Details</span>
                        {expandedProject === project.id ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                        }
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-4 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="bg-concrete-gray p-4 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <div className="flex text-construction-yellow">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="text-sm italic text-steel-gray mt-2">
                          "{project.testimonial}"
                        </blockquote>
                        <cite className="text-xs text-muted-foreground mt-2 block">
                          — {project.client}
                        </cite>
                      </div>

                      <Button className="w-full btn-primary">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Case Study
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>
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

export default Projects;