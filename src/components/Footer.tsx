const Footer = () => {
  return (
    <footer className="bg-gradient-coke text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <div className="flex flex-col items-center space-y-3">
          <img 
            src="/images/Olam%20Logo.jpg" 
            alt="Olam Group" 
            className="h-14 w-auto drop-shadow-lg"
          />
          <p className="text-white/75 text-xs md:text-sm max-w-2xl">
            Future Ready Olam · AI enablement partnership for Olam Group and Olam Agri Ghana, designed and facilitated by Futurelab Studios.
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