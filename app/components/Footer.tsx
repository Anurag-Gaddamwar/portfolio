// D:\PROJECTS\Portfolio\portfolio\app\components\Footer.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 text-sm mt-14 text-center p-4 md:p-6 lg:px-96 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <a
          href="tel:8080172824"
          className="flex items-center space-x-2 hover:text-white transition-colors duration-300 mb-4 md:mb-0"
        >
          <FaPhoneAlt className="text-sm" />
          <span>8080172824</span>
        </a>
        <a
          href="mailto:gaddamwaranurag@gmail.com"
          className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
        >
          <FaEnvelope className="text-sm" />
          <span>gaddamwaranurag@gmail.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
