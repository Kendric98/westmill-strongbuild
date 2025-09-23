import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll respond within 24 hours with your custom quote.",
    });
    
    setFormData({ name: "", email: "", phone: "", product: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-white mb-6 animate-fade-in">
            Get Your <span className="text-construction-yellow">Free Quote</span> Today
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-slide-up">
            Ready to start your project? Contact our experts for a free consultation 
            and competitive quote on all precast concrete products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              className="btn-primary"
              asChild
            >
              <a href="tel:+254793569990">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +254 793 569 990
              </a>
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/+254793569990', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 concrete-texture">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <Card className="industrial-card animate-slide-up">
              <CardHeader>
                <CardTitle className="font-heading text-steel-gray">Request a Quote</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-steel-gray mb-2">
                        Full Name *
                      </label>
                      <Input 
                        id="name" 
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="focus:ring-construction-yellow focus:border-construction-yellow"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-steel-gray mb-2">
                        Phone Number *
                      </label>
                      <Input 
                        id="phone" 
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+254 700 000 000"
                        required
                        className="focus:ring-construction-yellow focus:border-construction-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-steel-gray mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="focus:ring-construction-yellow focus:border-construction-yellow"
                    />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-steel-gray mb-2">
                      Product of Interest
                    </label>
                    <Select value={formData.product} onValueChange={(value) => handleChange('product', value)}>
                      <SelectTrigger className="focus:ring-construction-yellow focus:border-construction-yellow">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pavers">Concrete Pavers</SelectItem>
                        <SelectItem value="colored-pavers">Colored Pavers</SelectItem>
                        <SelectItem value="culverts">Drainage Culverts</SelectItem>
                        <SelectItem value="slabs">Precast Slabs</SelectItem>
                        <SelectItem value="wall-panels">Wall Panels</SelectItem>
                        <SelectItem value="kerb-stones">Kerb Stones</SelectItem>
                        <SelectItem value="benches">Concrete Benches</SelectItem>
                        <SelectItem value="drainage-blocks">Drainage Blocks</SelectItem>
                        <SelectItem value="installation">Installation Services</SelectItem>
                        <SelectItem value="fencing-posts">Fencing Posts</SelectItem>
                        <SelectItem value="other">Other Products</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-steel-gray mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project requirements, timeline, quantity needed, and any specific needs..."
                      rows={4}
                      required
                      className="focus:ring-construction-yellow focus:border-construction-yellow"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-primary w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Quote Request
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll respond within 24 hours with your custom quote.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Map */}
            <div className="space-y-8 animate-fade-in">
              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="industrial-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-steel-gray mb-2">Call Us Direct</h4>
                        <p className="text-muted-foreground mb-2">Get instant answers to your questions</p>
                        <p className="text-construction-yellow font-medium">+254 793 569 990</p>
                        <p className="text-construction-yellow font-medium">+254 700 123 456</p>
                        <p className="text-sm text-muted-foreground mt-2">Available Mon-Sat, 8AM-6PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="industrial-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-steel-gray mb-2">Email Us</h4>
                        <p className="text-muted-foreground mb-2">Send detailed project requirements</p>
                        <p className="text-construction-yellow font-medium">info@westmillconcrete.co.ke</p>
                        <p className="text-construction-yellow font-medium">sales@westmillconcrete.co.ke</p>
                        <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="industrial-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-steel-gray mb-2">Visit Our Factory</h4>
                        <p className="text-muted-foreground mb-2">See our products and processes firsthand</p>
                        <p className="text-steel-gray">Thika Road, Opposite Mang'u High School</p>
                        <p className="text-steel-gray">P.O. Box -00100, Thika</p>
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          Monday - Saturday: 8:00 AM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps Placeholder */}
              <Card className="industrial-card">
                <CardContent className="p-0">
                  <div className="h-64 bg-concrete-gray rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-construction-yellow/10 to-bold-orange/10"></div>
                    <div className="text-center z-10">
                      <MapPin className="h-12 w-12 text-construction-yellow mx-auto mb-4" />
                      <h4 className="font-semibold text-steel-gray mb-2">Interactive Map</h4>
                      <p className="text-muted-foreground text-sm">Google Maps integration</p>
                      <Button variant="outline" className="mt-3">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="industrial-card bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-steel-gray mb-2">WhatsApp Quick Quote</h4>
                  <p className="text-muted-foreground mb-4">
                    Get instant responses via WhatsApp for urgent inquiries
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/+254793569990?text=Hello, I need a quote for precast concrete products', '_blank')}
                  >
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;