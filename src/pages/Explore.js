import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function Explore() {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="bg-[#0c0e1a] relative">
      <ParticlesComponent id="particles" />
      <header className="relative flex justify-end  overflow-hidden">
        {/* Content hide and show videos */}
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            showVideo
              ? "-translate-x-full opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100"
          }`}
        >
          <div className="flex justify-end basis-6/12">
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
                <div className="absolute inset-0 bg-[#141c30] opacity-70  "></div>
                <div className="relative p-8 bg-transparent md:h-[700px] lg:h-[500px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">Welcome to Endorphinx</h1>
                  <p className="mt-10 text-justify  w-auto lg:w-[600px]">
                  At ENDORPHINX, we excel in creating visually captivating 2D and 3D games that transform fitness into an engaging and enjoyable experience. Our expertise in developing lifelike AR and VR experiences ensures that we push the boundaries of what gaming can achieve, merging the virtual world with fitness routines to create immersive environments that motivate and inspire users.
                  </p>
                  <p className="mt-10 text-justify w-auto lg:w-[600px]">
                  Our advanced technology integration goes beyond gaming, as we seamlessly connect fitness devices and IoT systems to enhance the user experience. Whether it's smartwatches, fitness trackers, or specialized equipment, our games are designed to work flawlessly across all devices, making workouts both fun and effective.
                  </p>
                  <p className="mt-10 text-justify w-auto lg:w-[600px]">
                  In the evolving world of Web 3, ENDORPHINX stands at the forefront, bringing gaming ideas to life through Blockchain and NFT innovations. Our blockchain-based games and NFT integrations open up new possibilities in decentralized gaming, offering unique and secure experiences for users.
                  </p>
                  <p className="mt-10 text-justify w-auto lg:w-[600px]">
                  Our commitment to excellence extends to app development as well. We craft robust and scalable applications across platforms, ensuring that whether it's for iOS, Android, or cross-platform development using Flutter or React Native, the result is always a top-notch, user-friendly product.
                  </p>
                  <p className="mt-10 text-justify w-auto lg:w-[600px]">
                  From game development to app design, AR/VR solutions, IoT connectivity, and Web 3 services, ENDORPHINX is dedicated to delivering seamless and engaging experiences that redefine the gaming and fitness landscape.
                  </p>
                  {/* <div className="grid grid-cols-4 gap-4 mt-10">
      <img src="https://new.spark-lab.co.uk/img/f58442e0-3f06-4f74-86d1-0de0d74fec91/samsung-logo.png" className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl" />
      <img src="https://new.spark-lab.co.uk/img/20a300b8-7bf6-4cdc-b67a-c01ed799e2ab/o2logo.png" className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl" />
      <img src="https://new.spark-lab.co.uk/img/1ba68a65-9c28-41b3-9539-c72c77709da0/porsche.png" className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl" />
      <img src="https://new.spark-lab.co.uk/img/f6759832-bb01-4903-ac0c-03b4a0b43deb/accora.png" className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl" />
    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1 Background Video */}
        {/* {!showVideo && (
          <div className="absolute z-10 w-screen min-w-full min-h-full max-w-none">
            <ReactPlayer
              url={sampleVideo}
              width="100%"
              height="100%"
              playing
              loop
              muted
            />
          </div>
        )} */}

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

export default Explore;
