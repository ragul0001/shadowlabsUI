import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function ARexplore() {


  return (
    <div className="bg-[#0c0e1a] relative h-screen">
      <ParticlesComponent id="particles" />
      <header className="relative flex justify-end  overflow-hidden">
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 `}
        >
          <div className="flex justify-end  basis-6/12">
            <div className="p-4">
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#141c30] opacity-70  "></div>
                <div className="relative p-8 bg-transparent ">
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">AR Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  We specialize in creating augmented reality experiences that enhance how users
interact with their surroundings. From retail and marketing to education and
entertainment, our AR applications provide engaging and interactive experiences that
captivate users and drive engagement.


                  </p>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ARexplore;
