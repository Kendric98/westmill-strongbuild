import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-steel-gray text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+254 793 569 990</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@westmillconcrete.co.ke</span>
            </div>
          </div>
          <div className="md:block hidden">
            <span>Quality Precast Concrete Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-[var(--shadow-concrete)] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="/" className="hover-scale transition-transform duration-200">
                <img
                  src="/westmill.svg"
                  alt="West Mill Concrete Logo"
                  className="w-25 h-16 object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/fallback-logo.png";
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href === "/" && location.pathname === "/");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`
                        relative font-medium transition-all duration-300 ease-in-out
                        px-3 py-2 rounded-lg
                        ${isActive 
                          ? 'text-construction-yellow bg-construction-yellow/10 shadow-sm' 
                          : 'text-steel-gray hover:text-construction-yellow hover:bg-construction-yellow/5'
                        }
                        after:content-[''] after:absolute after:bottom-0 after:left-1/2 
                        after:w-0 after:h-0.5 after:bg-construction-yellow 
                        after:transition-all after:duration-300 after:transform after:-translate-x-1/2
                        ${isActive ? 'after:w-4/5' : 'hover:after:w-4/5'}
                      `}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a href="/contact" className="hidden md:block">
                <Button className="btn-primary hover-scale transition-all duration-200">
                  Get Quote
                </Button>
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-steel-gray hover:text-construction-yellow 
                          transition-all duration-200 hover:bg-construction-yellow/10 rounded-lg"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 flex flex-col px-6 py-8 lg:hidden animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <a href="/">
                  <img
                    src="/westmill.svg"
                    alt="West Mill Concrete Logo"
                    className="w-14 h-14 rounded-lg object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/fallback-logo.png";
                    }}
                  />
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-steel-gray hover:text-construction-yellow"
                  aria-label="Close menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href || 
                    (item.href === "/" && location.pathname === "/");
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`
                        text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300
                        ${isActive 
                          ? 'text-construction-yellow bg-construction-yellow/10 border-l-4 border-construction-yellow' 
                          : 'text-steel-gray hover:text-construction-yellow hover:bg-construction-yellow/5 hover:pl-6'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary mt-6 w-full py-4 text-lg hover-scale">
                    Get Quote
                  </Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;