import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "AI Essentials",
    href: "/wave-1"
  }, {
    name: "AI Deep Dive",
    href: "/wave-2"
  }, {
    name: "AI Builders",
    href: "/wave-3"
  }, {
    name: "Facilitators",
    href: "/facilitators"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Pricing",
    href: "/pricing"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-gradient-primary shadow-xl border-b-4 border-secondary sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center space-x-3 md:space-x-6">
            <Link to="/" className="flex items-center">
              <div className="bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-lg shadow-lg">
                <img 
                  src="/images/Olam%20Logo.jpg" 
                  alt="Olam Group" 
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-3 pl-6 border-l border-white/20">
              <span className="text-white/80 text-xs md:text-sm font-medium whitespace-nowrap">
                Future Ready Olam · AI Enablement Program
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${isActive(item.href) ? "bg-white text-primary shadow-lg transform scale-105" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wide text-white/80 animate-pulse">
              Tap menu for program details
            </span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-3 border-t border-white/20 bg-primary/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-1.5">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(item.href) ? "text-primary bg-white font-bold" : "text-white/90 hover:text-white hover:bg-white/10"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;