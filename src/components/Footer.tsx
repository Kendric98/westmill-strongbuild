import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-gray text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
            <div>
            <img src="/wm.svg" alt="West Mill Concrete Logo" className="w-25 h-16 mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kenya's premier precast concrete manufacturer, delivering quality solutions 
              that build the future. Strong, reliable, built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-construction-yellow transition-[var(--transition-smooth)]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-construction-yellow transition-[var(--transition-smooth)]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-construction-yellow transition-[var(--transition-smooth)]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-construction-yellow transition-[var(--transition-smooth)]">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
            <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/products/concrete-pavers" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Concrete Pavers</a></li>
              <li><a href="/products/drainage-culverts" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Drainage Culverts</a></li>
              <li><a href="/products/precast-slabs" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Precast Slabs</a></li>
              <li><a href="/products/wall-panels" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Wall Panels</a></li>
              <li><a href="/products/kerb-stones" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Kerb Stones</a></li>
              <li><a href="/products/concrete-benches" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Concrete Benches</a></li>
              <li><a href="/products/drainage-blocks" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">Drainage Blocks</a></li>
            </ul>
            </div>

          {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="/services" className="hover:text-construction-yellow transition-[var(--transition-smooth)] font-semibold">
                    All Services
                  </a>
                </li>
                <li>
                  <a href="/services/custom-manufacturing" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Custom Manufacturing
                  </a>
                </li>
                <li>
                  <a href="/services/installation" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Installation Services
                  </a>
                </li>
                <li>
                  <a href="/services/consultation" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Project Consultation
                  </a>
                </li>
                <li>
                  <a href="/services/technical-support" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="/services/delivery" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Nationwide Delivery
                  </a>
                </li>
                <li>
                  <a href="/services/quality-assurance" className="hover:text-construction-yellow transition-[var(--transition-smooth)]">
                    Quality Assurance
                  </a>
                </li>
              </ul>
            </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-yellow flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Along Thika Road, <br />Opposite Mang'u High School</p>
                  <p className="text-gray-300">Kiambu, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-construction-yellow flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+254 793 569 990</p>
                  <p className="text-gray-300">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-yellow flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@westmillconcrete.co.ke</p>
                  <p className="text-gray-300">sales@westmillconcrete.co.ke</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold text-construction-yellow mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-300 text-sm">Saturday: 8:00 AM - 2:00 PM</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} West Mill Concrete. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-construction-yellow text-sm transition-[var(--transition-smooth)]">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow text-sm transition-[var(--transition-smooth)]">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow text-sm transition-[var(--transition-smooth)]">
                Quality Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;