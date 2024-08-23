import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu when a link is clicked (optional)
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto lg:px-8 max-w-7xl px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:translate-x-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
            {/* Close Button */}
            <div className="self-end mb-4 md:hidden">
              <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <a
              href="#"
              onClick={() => handleLinkClick('home')}
              className={`text-lg font-medium hover:text-gray-600 hover:border-b-2 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'home' ? 'underline text-blue-600' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
              About
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('services')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'services' ? 'underline text-blue-600' : ''
              }`}
            >
              Services
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('contact')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'contact' ? 'underline text-blue-600' : ''
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
