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
    message: "",
    website: "" // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const resp = await fetch('/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await resp.json().catch(() => ({ ok: false }));
      if (!resp.ok || !data.ok) {
        throw new Error('Submission failed');
      }
      toast({
        title: "Quote Request Sent!",
        description: "We have received your details and will reply within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", product: "", message: "" });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly via phone or email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 sm:mb-6 animate-fade-in">
            Get Your <span className="text-construction-yellow">Free Quote</span> Today
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 opacity-90 animate-slide-up">
            Ready to start your project? Contact our experts for a free consultation 
            and competitive quote on all precast concrete products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-scale-in">
            <Button
              className="btn-primary w-full sm:w-auto"
              asChild
            >
              <a href="tel:+254793569990">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Now: +254 793 569 990
              </a>
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/+254793569990', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20 concrete-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Enhanced Contact Form */}
            <Card className="industrial-card animate-slide-up">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-steel-gray">Request a Quote</CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                <Card className="industrial-card">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-steel-gray mb-1 sm:mb-2 text-sm sm:text-base">Call Us Direct</h4>
                        <p className="text-muted-foreground mb-2 text-xs sm:text-sm">Get instant answers to your questions</p>
                        <p className="text-construction-yellow font-medium text-sm sm:text-base">+254 793 569 990</p>
                        <p className="text-construction-yellow font-medium text-sm sm:text-base">+254 700 123 456</p>
                        <p className="text-xs text-muted-foreground mt-1 sm:mt-2">Available Mon-Sat, 8AM-6PM</p>
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

              {/* Google Maps Placeholder - Mobile Responsive */}
              <Card className="industrial-card">
                <CardContent className="p-0">
                  <div className="h-48 sm:h-56 lg:h-64 bg-concrete-gray rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-construction-yellow/10 to-bold-orange/10"></div>
                    <div className="text-center z-10 px-4">
                      <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-construction-yellow mx-auto mb-2 sm:mb-4" />
                      <h4 className="font-semibold text-steel-gray mb-1 sm:mb-2 text-sm sm:text-base">Interactive Map</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">Google Maps integration</p>
                      <Button variant="outline" className="text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2">
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA - Mobile Optimized */}
              <Card className="industrial-card bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-green-600 mx-auto mb-2 sm:mb-4" />
                  <h4 className="font-semibold text-steel-gray mb-1 sm:mb-2 text-sm sm:text-base">WhatsApp Quick Quote</h4>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">
                    Get instant responses via WhatsApp for urgent inquiries
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto text-sm sm:text-base"
                    onClick={() => window.open('https://wa.me/+254793569990?text=Hello, I need a quote for precast concrete products', '_blank')}
                  >
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
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