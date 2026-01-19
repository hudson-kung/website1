const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Your Car Looking Brand New?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:9092931038"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 909-293-1038
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Fresh & Clean</span>
                <span className="text-gray-400 text-sm ml-1">Car Wash</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The Inland Empire's premier car wash destination. We're committed to making 
              your car shine while providing fast, friendly, and eco-friendly service.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="tel:9092931038" className="hover:text-white transition">909-293-1038</a></li>
              <li>123 Main Street<br />Chino, CA 91710</li>
              <li>Mon-Sat: 7am-8pm<br />Sun: 8am-6pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fresh & Clean Car Wash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
