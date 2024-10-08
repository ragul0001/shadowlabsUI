import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";
import gamification from "../assests/InnerPage/ban-web3.jpg";
import Web_3 from "../assests/Videos/Web_3.mp4";

function Webexplore() {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="bg-[#0c0e1a] h-auto xl:h-screen">
      <ParticlesComponent id="particles" />
      <header className="relative flex justify-end  overflow-hidden py-28  ">
        <div
          className={`container mx-auto  max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            showVideo
              ? "-translate-x-full opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100"
          }`}
        >
          {/* showvideos */}
          {/* <div className="flex justify-end gap-3">
            <button
              onClick={handleShowVideo}
              class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
            >
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Show Videos
              </span>
            </button>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            {/* Images and videos displayed */}
            {/* <div>
              <img
                src={gamification}
                alt="the gamfications"
                className="rounded-xl"
              />
            </div> */}
            <div>
            <ReactPlayer
      url={Web_3}
      width="100%"
      height="100%"
      playing
      loop
      controls
    />
    </div>
            <div className="p-4">
              <div className="relative my-10 ">
                <div className="absolute inset-0 bg-[#12182a]  "></div>
                <div className="relative p-8 bg-transparent h-[700px] md:h-[700px] lg:h-[340px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">Web 3.0</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      NFT Development
                    </h1>
                    <p className="mt-4 text-justify ">
                      In the fast-evolving digital asset space, our NFT
                      development services allow you to create, trade, and
                      manage non-fungible tokens. Whether in art, gaming, or
                      collectibles, we help you build secure and scalable NFT
                      platforms that empower creators and collectors alike.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      Blockchain Development
                    </h1>
                    <p className="mt-4 text-justify ">
                      Blockchain is changing the way industries operate, and we
                      help businesses harness its power with custom blockchain
                      solutions. From decentralized applications to secure
                      transactions and smart contracts, we provide blockchain
                      services that are transparent, reliable, and aligned with
                      your strategic goals.
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
              class="my-3 absolute top-10 right-10 group  min-h-[50px] w-40 overflow-hidden border border-[#d44219]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-red-700 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-red-700 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
            >
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-red-700 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-red-700 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Close
              </span>
            </button>
            <div className="w-screen min-w-full max-w-none">
              <ReactPlayer
                url={sampleVideo}
                width="100%"
                height="100%"
                playing
              />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Webexplore;
