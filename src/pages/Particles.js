import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function Particles() {


  return (
    <div className="bg-[#0c0e1a] relative h-screen">
      <ParticlesComponent id="particles" />
      <header className="relative flex justify-end  overflow-hidden">
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 `}
        >
          <div className="flex justify-end basis-6/12">
            <div className="p-4">
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#141c30] opacity-70  "></div>
                <div className="relative p-8 bg-transparent h-[700px] md:h-[700px] lg:h-[600px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">Gamifications</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Unity Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  With years of hands-on experience in Unity, we excel in creating visually stunning 2D
and 3D games for mobile, console, and virtual reality platforms. Unity’s versatility
also allows us to develop non-gaming solutions like simulations and visualizations,
ensuring high-quality and engaging experiences for every user.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Unreal Engine Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Our expertise in Unreal Engine allows us to develop high-fidelity, visually striking
games and interactive experiences. From crafting realistic environments to building
complex game mechanics, we push the limits of what’s possible in game development,
delivering engaging, performance-driven solutions.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">HTML5 Game Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Our proficiency in HTML5 enables us to create lightweight, responsive games that
work seamlessly across devices and platforms without the need for downloads or
installations. Whether for entertainment, education, or marketing, we design webbased
games that are fun, engaging, and scalable.
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

export default Particles;
