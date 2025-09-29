import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import IndustriesServed from "@/components/IndustriesServed";
import ClientLogos from "@/components/ClientLogos";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Westmill Concrete | Precast Concrete in Kenya | Paving Blocks Kenya"
        description="Leading manufacturer of precast concrete in Kenya. Paving blocks in Kenya, concrete pavers, culverts, slabs, kerb stones, wall panels, fencing posts, and more. Durable, reliable, and affordable."
        canonicalUrl="https://www.westmillconcrete.co.ke/"
        keywords={[
          "precast concrete in kenya",
          "paving blocks in kenya",
          "paving blocks",
          "concrete pavers kenya",
          "precast slabs kenya",
          "precast culverts kenya",
          "kerb stones kenya",
          "wall panels kenya"
        ]}
        og={{
          title: "Westmill Concrete | Precast Concrete in Kenya",
          description: "Paving blocks and precast concrete products manufactured in Kenya.",
          type: "website",
          image: "https://www.westmillconcrete.co.ke/westmill.svg",
          url: "https://www.westmillconcrete.co.ke/"
        }}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Westmill Concrete",
            url: "https://westmillconcrete.co.ke",
            logo: "https://westmillconcrete.co.ke/westmill.svg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+254793569990",
              contactType: "Customer Service",
              areaServed: "KE",
            },
            sameAs: [
              "https://www.facebook.com/westmillconcrete",
              "https://www.linkedin.com/company/westmillconcrete",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Westmill Concrete",
            url: "https://www.westmillconcrete.co.ke/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.google.com/search?q=site:westmillconcrete.co.ke+{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Site Navigation",
            itemListElement: [
              { "@type": "SiteNavigationElement", name: "Home", url: "https://www.westmillconcrete.co.ke/" },
              { "@type": "SiteNavigationElement", name: "Products", url: "https://www.westmillconcrete.co.ke/products" },
              { "@type": "SiteNavigationElement", name: "Our Projects", url: "https://www.westmillconcrete.co.ke/our-projects" },
              { "@type": "SiteNavigationElement", name: "Gallery", url: "https://www.westmillconcrete.co.ke/gallery" },
              { "@type": "SiteNavigationElement", name: "Services", url: "https://www.westmillconcrete.co.ke/services" },
              { "@type": "SiteNavigationElement", name: "About", url: "https://www.westmillconcrete.co.ke/about" },
              { "@type": "SiteNavigationElement", name: "Contact", url: "https://www.westmillconcrete.co.ke/contact" }
            ]
          }
        ]}
      />
      <Header />
      <Hero />
      <ProductShowcase />
      <Gallery />
      <WhyChooseUs />
      <OurProcess />
      <IndustriesServed />
      <Certifications />
      <ClientLogos />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
