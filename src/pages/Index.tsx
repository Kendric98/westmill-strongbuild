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

const Index = () => {
  return (
    <div className="min-h-screen">
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
