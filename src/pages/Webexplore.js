import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";
import gamification from "../assests/background/gamification.jpg";



function Webexplore() {
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
                <div className="relative p-8 bg-transparent">
                  <h1 className="text-[30px] font-semibold">Web 3.0</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">NFT Development</h1>
                  <p className="mt-4 text-justify ">
                  In the fast-evolving digital asset space, our NFT development services allow you to
create, trade, and manage non-fungible tokens. Whether in art, gaming, or collectibles,
we help you build secure and scalable NFT platforms that empower creators and
collectors alike.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Blockchain Development</h1>
                  <p className="mt-4 text-justify ">
                  Blockchain is changing the way industries operate, and we help businesses harness its
power with custom blockchain solutions. From decentralized applications to secure
transactions and smart contracts, we provide blockchain services that are transparent,
reliable, and aligned with your strategic goals.

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

export default Webexplore;
