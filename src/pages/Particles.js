import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";
import gamification from "../assests/background/gamification.jpg";



function Particles() {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };


  return (
    <div className="bg-[#0c0e1a] relative ">
      <ParticlesComponent id="particles" />
      <header className="relative flex justify-end  overflow-hidden">
      <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            showVideo
              ? "-translate-x-full opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div>
                 <img src={gamification} alt="the gamfications" className=""/>
                </div>
            <div className="p-4">
            <div className="flex justify-end gap-3">
                <button
                  onClick={handleShowVideo}
                  className="border px-4 border-white hover:bg-blue-700 rounded-full py-3"
                >
                  Show Videos
                </button>
              </div>
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#12182a]  "></div>
                <div className="relative p-8 bg-transparent h-[700px] md:h-[700px] lg:h-[500px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">Gamifications</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Unity Development</h1>
                  <p className="mt-4 text-justify  ">
                  With years of hands-on experience in Unity, we excel in creating visually stunning 2D
and 3D games for mobile, console, and virtual reality platforms. Unity’s versatility
also allows us to develop non-gaming solutions like simulations and visualizations,
ensuring high-quality and engaging experiences for every user.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Unreal Engine Development</h1>
                  <p className="mt-4 text-justify  ">
                  Our expertise in Unreal Engine allows us to develop high-fidelity, visually striking
games and interactive experiences. From crafting realistic environments to building
complex game mechanics, we push the limits of what’s possible in game development,
delivering engaging, performance-driven solutions.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">HTML5 Game Development</h1>
                  <p className="mt-4 text-justify ">
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
        
        {/*2 Fullscreen Video */}
        {showVideo && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={handleCloseVideo}
              className="absolute top-10 right-10 bg-red-600 text-white p-3 rounded-full z-50"
            >
              Close
            </button>
            {/* <div className="w-screen min-w-full max-w-none">
              <ReactPlayer
                url={sampleVideo}
                width="100%"
                height="100%"
                playing
              />
            </div> */}
          </div>
        )}
      </header>
    </div>
  );
}

export default Particles;
