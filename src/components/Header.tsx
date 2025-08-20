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
    name: "Wave 1",
    href: "/wave-1"
  }, {
    name: "Wave 2",
    href: "/wave-2"
  }, {
    name: "Wave 3",
    href: "/wave-3"
  }, {
    name: "Facilitators",
    href: "/facilitators"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-gradient-primary shadow-xl border-b-4 border-secondary sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="text-white font-bold text-xl">
                Future Ready PepsiCo
              </div>
            </Link>
            <div className="hidden sm:flex items-center space-x-3 pl-6 border-l border-white/20">
              <span className="text-white/80 text-sm font-medium">
                AI Enablement Program
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${isActive(item.href) ? "bg-secondary text-white shadow-lg transform scale-105" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
                {item.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-white/20 bg-primary/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(item.href) ? "text-white bg-secondary" : "text-white/90 hover:text-white hover:bg-white/10"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="pt-2">
                <Button variant="secondary" size="sm" className="w-full font-bold">
                  Let's Transform Together
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;