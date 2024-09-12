import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";
import sampleVideo1 from "../assests/Videos/video1.mp4"; // Add your video files
import sampleVideo2 from "../assests/Videos/video2.mp4";
import sampleVideo3 from "../assests/Videos/video3.mp4";
import sampleVideo4 from "../assests/Videos/video4.mp4";
import gamification from "../assests/InnerPage/ban-gamification.jpg";
import gameThumb1 from "../assests/InnerPage/thum-big1.png";
import gameThumb2 from "../assests/InnerPage/thum-big2.png";
import gameThumb3 from "../assests/InnerPage/thum-big3.png";
import gameThumb4 from "../assests/InnerPage/thum-big4.png";
import gameThumb5 from "../assests/InnerPage/thum-big5.png";
import gameThumb6 from "../assests/InnerPage/thum-big6.png";

function Particles() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentMedia, setCurrentMedia] = useState({
    type: "image",
    src: gamification,
  });
  const [activeThumbnail, setActiveThumbnail] = useState(null); // Track the active thumbnail

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleThumbnailClick = (videoSrc, index) => {
    setCurrentMedia({ type: "video", src: videoSrc });
    setActiveThumbnail(index); // Set active thumbnail
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
          <div className="flex justify-end gap-3">
            <button
              onClick={handleShowVideo}
              class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
            >
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Show Videos
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div>
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt="gamification"
                  className="rounded-xl"
                />
              ) : (
                <ReactPlayer
                  url={currentMedia.src}
                  playing
                  controls
                  width="100%"
                  height="100%"
                  className="video-class  "
                />
              )}
            </div>
            <div className="p-4">
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#12182a]  "></div>
                <div className="relative p-8 bg-transparent h-[400px] md:h-[700px] lg:h-[370px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">Gamifications</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      Unity Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      With years of hands-on experience in Unity, we excel in
                      creating visually stunning 2D and 3D games for mobile,
                      console, and virtual reality platforms. Unity’s
                      versatility also allows us to develop non-gaming solutions
                      like simulations and visualizations, ensuring high-quality
                      and engaging experiences for every user.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      Unreal Engine Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      Our expertise in Unreal Engine allows us to develop
                      high-fidelity, visually striking games and interactive
                      experiences. From crafting realistic environments to
                      building complex game mechanics, we push the limits of
                      what’s possible in game development, delivering engaging,
                      performance-driven solutions.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      HTML5 Game Development
                    </h1>
                    <p className="mt-4 text-justify ">
                      Our proficiency in HTML5 enables us to create lightweight,
                      responsive games that work seamlessly across devices and
                      platforms without the need for downloads or installations.
                      Whether for entertainment, education, or marketing, we
                      design webbased games that are fun, engaging, and
                      scalable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 px-5 my-2 md:my-10 bg-transparent">
              {/* Thumbnails with active border effect */}
              <img
                src={gameThumb1}
                alt="Thumbnail 1"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 1
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo1, 1)}
              />
              <img
                src={gameThumb2}
                alt="Thumbnail 2"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 2
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo2, 2)}
              />
              <img
                src={gameThumb3}
                alt="Thumbnail 3"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 3
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo3, 3)}
              />
              <img
                src={gameThumb4}
                alt="Thumbnail 4"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 4
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo4, 4)}
              />
              <img
                src={gameThumb5}
                alt="Thumbnail 5"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 5
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo4, 5)}
              />
              <img
                src={gameThumb6}
                alt="Thumbnail 6"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 6
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(sampleVideo4, 6)}
              />
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

export default Particles;
