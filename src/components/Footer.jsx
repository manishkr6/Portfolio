const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 md:px-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold gradient-text mb-6">
            Manish.
          </a>

          <div className="flex space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/manish-kumar-599138318/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>

            <a
              href="https://github.com/manishkr6"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram text-xl"></i>
            </a>

            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook text-xl"></i>
            </a>
          </div>

          <p className="text-gray-400 text-center max-w-md mb-6">
            © 2023 Manish Kumar Baitha. All rights reserved.  
            Built with passion and lots of coffee.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;