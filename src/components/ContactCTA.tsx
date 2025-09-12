import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-steel-gray mb-4">
            Get Your <span className="text-construction-yellow">Free Quote</span> Today
          </h2>
          <div className="w-24 h-1 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact our experts for a free consultation 
            and competitive quote on all precast concrete products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="industrial-card animate-slide-up">
            <CardContent className="p-8">
              <h3 className="font-heading text-steel-gray mb-6">Request a Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-steel-gray mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name"
                      className="focus:ring-construction-yellow focus:border-construction-yellow"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-steel-gray mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      id="phone" 
                      placeholder="+254 700 000 000"
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
                    placeholder="your.email@example.com"
                    className="focus:ring-construction-yellow focus:border-construction-yellow"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-steel-gray mb-2">
                    Product of Interest
                  </label>
                  <select 
                    id="product"
                    className="w-full px-3 py-2 border border-input rounded-md focus:ring-construction-yellow focus:border-construction-yellow"
                  >
                    <option value="">Select a product</option>
                    <option value="pavers">Concrete Pavers</option>
                    <option value="culverts">Drainage Culverts</option>
                    <option value="slabs">Precast Slabs</option>
                    <option value="wall-panels">Wall Panels</option>
                    <option value="kerb-stones">Kerb Stones</option>
                    <option value="benches">Concrete Benches</option>
                    <option value="drainage-blocks">Drainage Blocks</option>
                    <option value="installation">Installation Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-steel-gray mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    rows={4}
                    className="focus:ring-construction-yellow focus:border-construction-yellow"
                  />
                </div>

                <Button className="btn-primary w-full">
                  Send Quote Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll respond within 24 hours with your custom quote.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Quick Actions */}
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
                      <h4 className="font-semibold text-steel-gray mb-2">Call Us</h4>
                      <p className="text-muted-foreground mb-2">Get instant answers to your questions</p>
                      <p className="text-construction-yellow font-medium">+254 700 123 456</p>
                      <p className="text-construction-yellow font-medium">+254 722 789 012</p>
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
                      <p className="text-steel-gray">Industrial Area, Nairobi</p>
                      <p className="text-steel-gray">Monday - Saturday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="industrial-card bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-steel-gray mb-2">WhatsApp Quick Quote</h4>
                <p className="text-muted-foreground mb-4">
                  Get instant responses via WhatsApp for urgent inquiries
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;