const Footer = () => {
  return (
    <footer className="bg-gradient-coke text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        {/* Collaboration Logos */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {/* Futurelab Studios Logo */}
            <div className="px-5 py-3 rounded-lg flex items-center justify-center w-32 md:w-40">
              <img 
                src="/images/FL White Logo.png" 
                alt="Futurelab Studios" 
                className="h-8 md:h-10 w-auto max-w-full object-contain"
              />
            </div>
            
            {/* Collaboration X */}
            <div className="flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-white/80">×</span>
            </div>
            
            {/* IMMPL Logo */}
            <div className="bg-white px-5 py-3 rounded-lg shadow-lg flex items-center justify-center w-32 md:w-40">
              <img 
                src="/images/IMMPL Logo.jpeg" 
                alt="IMMPL" 
                className="h-8 md:h-10 w-auto max-w-full object-contain"
              />
            </div>
          </div>
          
          <p className="text-white/75 text-xs md:text-sm max-w-2xl">
            AI Enablement Program · Fractional CTO + Custom AI Tools Partnership
          </p>
        </div>

        <p className="text-[11px] text-white/70 tracking-wide uppercase">
          © {new Date().getFullYear()} Futurelab Studios · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;