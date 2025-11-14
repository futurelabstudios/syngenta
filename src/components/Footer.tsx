const Footer = () => {
  return (
    <footer className="bg-gradient-coke text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <a 
            href="https://futurelabstudios.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="/images/FL White Logo.png" 
              alt="Futurelab Studios" 
              className="h-16 w-auto"
            />
          </a>
          <p className="text-white/90 text-xs text-center">
            Proposal for Syngenta India | Built by{" "}
            <a 
              href="https://futurelabstudios.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-white/80 transition-colors duration-300 underline decoration-white/50 hover:decoration-white"
            >
              Futurelab Studios
            </a>
            {" "}| © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;