import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assests/logo/endorphins-logo.png";
import home from "../../assests/Menu-Icons/home.png";
import AppIcon from "../../assests/Menu-Icons/app.png";
import Game from "../../assests/Menu-Icons/game.png";
import Gamification from "../../assests/Menu-Icons/game.png";
import Ar from "../../assests/Menu-Icons/ar-vr.png";
import web from "../../assests/Menu-Icons/web3.0.png";
import Blog from "../../assests/Menu-Icons/blog.png";
import contact from "../../assests/Menu-Icons/contact.png";

// Import active icons
import homeActive from "../../assests/Menu-Icons/home-active.png";
import AppActive from "../../assests/Menu-Icons/app-active.png";
import GameActive from "../../assests/Menu-Icons/game-active.png";
import GamificationActive from "../../assests/Menu-Icons/game-active.png";
import ArActive from "../../assests/Menu-Icons/ar-vr-active.png";
import webActive from "../../assests/Menu-Icons/web3.0-active.png";
import BlogActive from "../../assests/Menu-Icons/blog-active.png";
import contactActive from "../../assests/Menu-Icons/contact-active.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "home",
      path: "/#welcome",
      icon: home,
      activeIcon: homeActive,
      label: "HOME",
    },
    {
      name: "portfolio",
      path: "/portfolio",
      icon: home,
      activeIcon: homeActive,
      label: "PORTFOLIO",
    },
    {
      name: "app",
      path: "/#app",
      icon: AppIcon,
      activeIcon: AppActive,
      label: "APP",
    },
    // { name: 'game', path: '/game', icon: Game, activeIcon: GameActive, label: 'GAME' },
    {
      name: "gamification",
      path: "/#gamification",
      icon: Gamification,
      activeIcon: GamificationActive,
      label: "GAMIFICATION",
    },
    {
      name: "ar",
      path: "/#ar",
      icon: Ar,
      activeIcon: ArActive,
      label: "AR",
    },
    {
      name: "vr",
      path: "/#vr",
      icon: Ar,
      activeIcon: ArActive,
      label: "VR",
    },
    {
      name: "web",
      path: "/#web",
      icon: web,
      activeIcon: webActive,
      label: "WEB 3.0",
    },
    // { name: 'blog', path: '/blog', icon: Blog, activeIcon: BlogActive, label: 'BLOG' },
    {
      name: "contact",
      path: "/#contact",
      icon: contact,
      activeIcon: contactActive,
      label: "CONTACT",
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <nav className="bg-[#000000] shadow-md w-full z-10">
      <div className="container mx-auto lg:px-8 max-w-7xl px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="the logo" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
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
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed inset-y-0 right-0 w-64 z-50 bg-[#000000] transform transition-transform duration-300 ease-in-out lg:static lg:flex lg:w-auto lg:translate-x-0`}
        >
          <div className="flex text-[#fff] flex-col lg:flex-row lg:items-center lg:space-x-10 p-4 lg:p-0">
            {/* Close Button */}
            <div className="self-end mb-4 lg:hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="focus:outline-none"
              >
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

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center text-lg z-30 font-medium transition duration-300 ease-in-out transform hover:scale-110 ${
                  location.pathname === item.path ||
                  (location.hash && location.hash === `#${item.path.split("#")[1]}`)
                    ? "text-[#3c66ee] border-b-0 border-[#3c66ee] lg:border-b-2 "
                    : "hover:text-[#3c66ee]"
                }`}
              >
                <ul className="flex flex-row lg:flex-col list-none items-center">
                  <li
                    className={`transition-transform duration-300 ${
                      location.pathname === item.path ||
                      (location.hash && location.hash === `#${item.path.split("#")[1]}`)
                        ? "scale-125"
                        : "scale-100 hover:animate-bounce"
                    }`}
                  >
                    {/* <img
                      src={
                        location.pathname === item.path ||
                        (location.hash && location.hash === `#${item.path.split("#")[1]}`)
                          ? item.activeIcon
                          : item.icon
                      }
                      alt={`${item.label} icon`}
                    /> */}
                  </li>
                  <li
                    className={`mx-3 my-5 lg:mx-0 lg:my-0 text-[14px] transition-transform duration-300 ${
                      location.pathname === item.path ||
                      (location.hash && location.hash === `#${item.path.split("#")[1]}`)
                        ? "scale-110"
                        : ""
                    }`}
                  >
                    {item.label}
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
