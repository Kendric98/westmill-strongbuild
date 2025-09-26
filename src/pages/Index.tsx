import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
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
        title="Westmill Concrete | Precast Concrete Products in Kenya"
        description="Westmill Concrete is a leading manufacturer of precast concrete products in Kenya. We provide pavers, culverts, slabs, kerb stones, wall panels, fencing posts, and more. Durable. Reliable. Affordable."
        canonicalUrl="https://www.westmillconcrete.co.ke/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Westmill Concrete",
          url: "https://westmillconcrete.co.ke",
          logo: "https://westmillconcrete.co.ke/westmill.svg",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+254700123456",
            contactType: "Customer Service",
            areaServed: "KE",
          },
          sameAs: [
            "https://www.facebook.com/westmillconcrete",
            "https://www.linkedin.com/company/westmillconcrete",
          ],
        }}
      />
      <Header />
      <Hero />
      <ProductShowcase />
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
