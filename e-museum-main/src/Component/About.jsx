import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center justify-between">
          {/* Left Section for Information */}
          <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Welcome to the Bhopal Museum, also known as the Indira Gandhi Rashtriya Manav Sangrahalaya. We are dedicated to preserving and showcasing the rich cultural heritage of India.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Our museum features a diverse range of exhibits, including open-air displays of tribal habitats, indoor galleries showcasing artifacts and textiles, and special exhibitions on anthropology and history.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Connect with us on social media to stay updated on the latest events, exhibitions, and educational initiatives:
            </p>
            <div className="flex space-x-6 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <a href="https://en.wikipedia.org/wiki/Bhopal_Museum" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-blue-500 hover:underline">Learn more about us on Wikipedia</a>
          </div>
          {/* Right Section for Images */}
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-2xl bg-gray-800">
            <img src="https://holidify.com/images/attr_wiki/compressed/attr_wiki_3487.jpg" alt="About" className="w-full shadow-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
