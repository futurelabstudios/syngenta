const Footer = () => {
  return (
    <footer className="bg-gradient-pepsi text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-white/90 text-xs">
            Proposal for PepsiCo India | Built with ❤️ by{" "}
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