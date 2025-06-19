import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          <div>
            <h3 className="text-xl font-bold text-indigo-500 mb-3">Devora.com</h3>
            <p className="text-sm text-gray-600">
              Building future-ready digital experiences using modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-600">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-2">Contact</h4>
            <p className="text-sm">
              📧 devora.tech@gmail.com <br />
              📍 Noida, India
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} <span className='text-red-400'>Devora.com</span>. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">Portfolio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
