import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Zap, Package } from "lucide-react";

const Hero = () => {
  return <section className="relative bg-gradient-hero text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Modern Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/30"></div>
      </div>
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-8 md:mb-12">
              <div className="bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg">
                <img 
                  src="/images/IMMPL Logo.jpeg" 
                  alt="IMMPL" 
                  className="h-16 md:h-24 w-auto"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-white">
              Fractional CTO + AI Enablement Program
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Training + custom AI tools built and shipped monthly
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-3 group bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm w-full sm:w-auto" asChild>
                <a href="#program-overview">
                  Program Details
                  <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-white/15 border-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group shadow-xl">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">Deep-Dive Training</h3>
                <p className="text-sm md:text-base text-white/90">Function-specific AI methods & hands-on upskilling</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/15 border-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group shadow-xl">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">AI Adoption & Tools</h3>
                <p className="text-sm md:text-base text-white/90">Curated toolstack & workflow automation</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/15 border-white/30 backdrop-blur-md sm:col-span-2 hover:bg-white/20 transition-all duration-300 group shadow-xl">
              <CardContent className="p-5 md:p-6 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Package className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2">AI Build Program</h3>
                <p className="text-sm md:text-base text-white/90">Custom AI tools built by CTO-led team & shipped to production</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;