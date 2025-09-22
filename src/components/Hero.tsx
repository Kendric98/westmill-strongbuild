import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import floatingImage from "@/assets/floating-concrete.png"; // Add your floating image to assets

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

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="max-w-4xl flex-1">
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
              <a href="/contact">
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
                <h3 className="font-semibold">10+ Years</h3>
                <p className="text-gray-300 text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Image on the Right */}
        <div className="hidden md:block flex-1 relative">
          {/* Glowing shadow behind the image */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-yellow-400 via-[#f66202] to-yellow-500 blur-3xl opacity-60 z-10"
            aria-hidden="true"
          />
          <img
            src={floatingImage}
            alt="Floating Concrete Product"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] max-w-md drop-shadow-xl animate-float rounded-3xl transition-transform duration-500 hover:scale-105 hover:rotate-3 z-20"
            style={{ zIndex: 20 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;