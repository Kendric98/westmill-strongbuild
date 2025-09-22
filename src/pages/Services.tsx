import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router-dom";

const services = [
  {
    title: "Custom Manufacturing",
    description:
      "We offer tailored precast concrete solutions to meet your unique project requirements. Our expert team works with you from concept to delivery, ensuring every product matches your specifications and quality standards.",
  },
  {
    title: "Installation Services",
    description:
      "Our skilled installation crew ensures your precast products are professionally placed for maximum durability and performance. We handle site preparation, placement, and finishing for a seamless project experience.",
  },
  {
    title: "Project Consultation",
    description:
      "Get expert advice on product selection, design, and logistics. Our consultants help you optimize your project for cost, efficiency, and long-term success.",
  },
  {
    title: "Technical Support",
    description:
      "Our technical team is available to assist with product specifications, compliance, and troubleshooting. We provide ongoing support to ensure your project runs smoothly.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver precast concrete products across Kenya, ensuring timely and safe arrival at your site. Our logistics team coordinates every step for reliable service.",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality checks and is KEBS certified. We guarantee consistent performance and durability for all our precast solutions.",
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#f66202] to-yellow-400 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-3xl md:text-4xl mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Comprehensive solutions for every stage of your construction project.
        </p>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-concrete-gray rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <h2 className="font-heading text-steel-gray text-xl mb-4">{service.title}</h2>
            <p className="text-steel-gray text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;

// Example for React Router v6
import { Routes, Route } from "react-router-dom";

<Routes>
  {/* ...other routes... */}
  <Route path="/services" element={<Services />} />
</Routes>