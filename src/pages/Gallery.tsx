import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import SEO from "@/components/SEO";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Project Gallery | Westmill Concrete | Completed Projects"
        description="View our completed precast concrete projects including pavers, culverts, slabs, wall panels, and infrastructure solutions across Kenya."
        canonicalUrl="https://www.westmillconcrete.co.ke/gallery"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Westmill Concrete Project Gallery",
          url: "https://westmillconcrete.co.ke/gallery",
          about: "Showcase of completed precast concrete projects by Westmill Concrete",
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            Our <span className="text-construction-yellow">Project Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 opacity-90 animate-slide-up">
            Discover the quality and versatility of our precast concrete solutions through our completed projects across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">100+</span>
              <p className="text-sm text-gray-200">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">8+</span>
              <p className="text-sm text-gray-200">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-construction-yellow">99%</span>
              <p className="text-sm text-gray-200">Quality Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      
      {/* Call to Action */}
      <section className="py-16 bg-steel-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our premium precast concrete solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Free Quote
            </a>
            <a href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-steel-gray">
              View Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
