import React, { useState } from 'react';
import logo from '../../assests/logo/logo.png'
import home from '../../assests/Menu-Icons/home.png';
import App from '../../assests/Menu-Icons/app.png';
import Game from '../../assests/Menu-Icons/game.png';
import Gamification from '../../assests/Menu-Icons/game.png';
import Ar from '../../assests/Menu-Icons/ar-vr.png';
import web from '../../assests/Menu-Icons/web3.0.png';
import Blog from '../../assests/Menu-Icons/blog.png';
import contact from '../../assests/Menu-Icons/contact.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu when a link is clicked (optional)
  };

  return (
    <nav className="bg-[#0c0e1a] shadow-md fixed w-full z-10">
      <div className="container mx-auto lg:px-8 max-w-7xl px-4 py-10 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src={logo} alt='the logo' />
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
          } fixed inset-y-0 right-0 w-64 bg-[#0c0e1a] transform transition-transform duration-300 ease-in-out md:static md:flex md:w-auto md:translate-x-0`}
        >
          <div className="flex text-[14px] text-[#fff] flex-col md:flex-row md:items-center md:space-x-10 p-4 md:p-0">
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
                <ul className='flex  flex-row lg:flex-col list-none items-center'>
                    <li>
                      <img src={home} alt='home icon'/>
                    </li>
                    <li>HOME</li>
                </ul>
            
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
             <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={App} alt='app icon'/>
                    </li>
                    <li>APP</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
               <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={Game} alt='home icon'/>
                    </li>
                    <li>GAME</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
              <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={Gamification} alt='home icon'/>
                    </li>
                    <li>GAMIFICATION</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
                <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={Ar} alt='home icon'/>
                    </li>
                    <li>AR/VR</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('about')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'about' ? 'underline text-blue-600' : ''
              }`}
            >
               <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={web} alt='home icon'/>
                    </li>
                    <li>WEB 3.0</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('services')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'services' ? 'underline text-blue-600' : ''
              }`}
            >
               <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={Blog} alt='home icon'/>
                    </li>
                    <li>BLOG</li>
                </ul>
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('contact')}
              className={`text-lg font-medium hover:text-gray-600 transition duration-300 ease-in-out transform hover:scale-105 ${
                activeLink === 'contact' ? 'underline text-blue-600' : ''
              }`}
            >
               <ul className='flex flex-col list-none items-center'>
                    <li>
                      <img src={contact} alt='home icon'/>
                    </li>
                    <li>CONTACT</li>
                </ul>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
