import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-[#E9A885] pt-6 pb-4 mt-10">
      <div className="container mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 px-10 items-center">
        
        {/* Left - Logo */}
        <div className="flex flex-col mb-4 items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-2xl font-bold">
            <img src="/passcamp-logo.png" alt="logo" className="w-32"/>
          </Link>
          <p className="text-gray-400 text-sm mt-1">Made by phiNguyen</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex justify-center items-center space-x-4">
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <span className="border-r border-gray-300 h-4"></span>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <span className="border-r border-gray-300 h-4"></span>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <span className="border-r border-gray-300 h-4"></span>
          <Link to="/privacy" className="hover:text-gray-400">Privacy</Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 justify-center md:justify-end mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-xl hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-pink-500 transition" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
