import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="West Mill Concrete industrial facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-steel-gray/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="font-hero text-white mb-6">
              Strong. Reliable.{" "}
              <span className="text-construction-yellow">Built to Last</span>
            </h1>
            <div className="w-24 h-2 accent-gradient rounded-full mb-8"></div>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up">
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Kenya's premier precast concrete manufacturer. From pavers to culverts, 
              we deliver industrial-strength solutions that stand the test of time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-scale-in">
            <Button asChild className="btn-primary text-lg px-8 py-4">
              <a href="/products">
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild className="btn-outline text-lg px-8 py-4">
              <a href="/#contact">
              Get Quote Today
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 concrete-texture rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold">KEBS Certified</h3>
                <p className="text-gray-300 text-sm">Quality Guaranteed</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 concrete-texture rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Nationwide Coverage</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 concrete-texture rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold">15+ Years</h3>
                <p className="text-gray-300 text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;