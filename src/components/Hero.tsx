import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import floatingImage from "@/assets/floating-concrete.png"; // Add your floating image to assets

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="West Mill Concrete industrial facility"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-steel-gray/70 sm:from-charcoal/80 sm:to-steel-gray/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="max-w-4xl flex-1 text-center md:text-left">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Strong. Reliable.{" "}
              <span className="text-construction-yellow block sm:inline">Built to Last</span>
            </h1>
            <div className="w-16 sm:w-24 h-1.5 sm:h-2 accent-gradient rounded-full mx-auto md:mx-0 mb-6 sm:mb-8"></div>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Kenya's premier precast concrete manufacturer. From pavers to culverts, 
              we deliver industrial-strength solutions that stand the test of time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-scale-in justify-center md:justify-start">
            <Button asChild className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <a href="/products">
                View Products
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <Button asChild className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <a href="/contact">
                Get Quote Today
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16 animate-fade-in">
            <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 sm:bg-transparent sm:backdrop-blur-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 concrete-texture rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">KEBS Certified</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Quality Guaranteed</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 sm:bg-transparent sm:backdrop-blur-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 concrete-texture rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Fast Delivery</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Nationwide Coverage</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 sm:bg-transparent sm:backdrop-blur-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 concrete-texture rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-construction-yellow" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">8+ Years</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Image on the Right - Hidden on mobile */}
        <div className="hidden lg:block flex-1 relative">
          {/* Glowing shadow behind the image */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full bg-gradient-to-br from-yellow-400 via-[#f66202] to-yellow-500 blur-3xl opacity-60 z-10"
            aria-hidden="true"
          />
          <img
            src={floatingImage}
            alt="Floating Concrete Product"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] xl:w-[500px] max-w-md drop-shadow-xl floating-image rounded-3xl z-20"
            style={{ zIndex: 20 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;