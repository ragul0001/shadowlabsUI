import React from "react";
import Navbar from "./Header";

const Layout = ({ children }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <div className="bg-[#0c0e1a] py-5">
        <div className="flex justify-center">
          <p className="text-white">
            Copyrights &copy; {year} Shadow Fox.All rights reserved.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Layout;
