import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ toggle }) => {
  return (
    <footer
      className={`fixed bottom-0 w-full py-4 transition-all ease-in-out duration-300 ${
        toggle ? "bg-white text-black shadow-md" : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/pages/Indira-Gandhi-Rashtriya-Manav-Sanghralaya-Bhopal/744694822358117" target="_blank" rel="noopener noreferrer" className="text-current hover:text-gray-400">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-current hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/explore/locations/543812015/bhopal-madhya-pradesh/indira-gandhi-manav-sanghralaya/" target="_blank" rel="noopener noreferrer" className="text-current hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-current hover:text-gray-400">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="mt-4 md:mt-0">
        <p className="text-center md:text-right mr-5">2024 E-Sanghrayala.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
