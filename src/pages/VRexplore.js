import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function VRexplore() {


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
                    <h1 className="text-[20px] font-semibold">VR Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Our VR development team creates fully immersive, realistic virtual environments that
transport users to entirely new worlds. Whether for gaming, training, or virtual tours,
we deliver high-quality VR solutions that engage and inspire, leveraging the latest in
virtual reality technology.

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

export default VRexplore;
