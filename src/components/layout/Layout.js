import React, { useState, useEffect } from "react";
import Navbar from "./Header";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const today = new Date();
  const year = today.getFullYear();

  // Show or hide the scroll button depending on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div>{children}</div>
     {/* Scroll to Top Button */}
     {isVisible && (
        <div className="fixed bottom-14 z-50 right-4">
          <button
            onClick={scrollToTop}
            className="bg-white text-black  p-3 rounded-full hover:bg-gray-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
      
      <div className="bg-[#0c0e1a] py-5">
        <div className="flex justify-center">
          <p className="text-white text-sm md:text-lg">
            Copyrights &copy; {year} Endorphinx. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Layout;
