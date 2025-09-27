import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-industrial.jpg";
import imgPavers from "@/assets/pavers.jpg";
import imgCulverts from "@/assets/culverts.jpg";
import imgSlabs from "@/assets/slabs.jpg";
import imgWallPanels from "@/assets/wall-panels.jpg";
import imgPavers1 from "@/assets/pavers1.jpg";
import imgCulverts1 from "@/assets/culverts1.jpg";
import imgWallPanels1 from "@/assets/wall-panels1.jpg";

const images = [
  imgPavers,
  imgCulverts,
  imgSlabs,
  imgWallPanels,
  imgPavers1,
  imgCulverts1,
  imgWallPanels1,
];

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const plugins = useMemo(() => [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  ], []);

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
                <h3 className="font-semibold text-sm sm:text-base">NCA Certified</h3>
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

        {/* Right-side Carousel - Hidden on mobile */}
        <div className="hidden lg:block flex-1 relative">
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-[320px] h-[320px] xl:w-[460px] xl:h-[460px] rounded-full bg-gradient-to-br from-yellow-400 via-[#f66202] to-yellow-500 blur-3xl opacity-60 z-10"
            aria-hidden="true"
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[420px] xl:w-[520px]">
            <div className="[perspective:1200px]">
              <Carousel
                className="w-full"
                opts={{ loop: true, align: "start", duration: 20 }}
                plugins={plugins}
                setApi={(api) => {
                  if (!api) return;
                  setSelectedIndex(api.selectedScrollSnap());
                  api.on('select', () => setSelectedIndex(api.selectedScrollSnap()));
                }}
              >
                <CarouselContent className="rounded-3xl shadow-[var(--shadow-industrial)]">
                  {images.map((src, idx) => {
                    const total = images.length;
                    let offset = (idx - selectedIndex) % total;
                    if (offset < 0) offset += total;
                    const depthMap = {
                      0: { z: 120, r: 0, s: 1, o: 1 },
                      1: { z: 40, r: -12, s: 0.92, o: 0.9 },
                      [total - 1]: { z: 40, r: 12, s: 0.92, o: 0.9 },
                    } as Record<number, { z: number; r: number; s: number; o: number }>;
                    const fallback = { z: -80, r: (idx % 2 ? -8 : 8), s: 0.85, o: 0.6 };
                    const d = depthMap[offset] ?? fallback;
                    return (
                      <CarouselItem key={idx} className="basis-full">
                        <div className="p-2">
                          <div
                            className="relative overflow-hidden rounded-3xl will-change-transform"
                            style={{
                              transform: `translateZ(${d.z}px) rotateY(${d.r}deg) scale(${d.s})`,
                              transformStyle: 'preserve-3d',
                              transition: 'transform 700ms ease, opacity 700ms ease',
                              opacity: d.o,
                            }}
                          >
                            <img
                              src={src}
                              alt="Showcase"
                              className="w-full h-[340px] xl:h-[420px] object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;