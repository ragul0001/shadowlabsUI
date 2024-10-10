import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo1 from "../assests/Videos/video1.mp4";
// import sampleVideo2 from "../assests/Videos/video2.mp4";
// import sampleVideo3 from "../assests/Videos/video3.mp4";
// import sampleVideo4 from "../assests/Videos/video4.mp4";
import gamification from "../assests/InnerPage/ban-vr.jpg";
// import gameThumb1 from "../assests/InnerPage/thum-big1.png";
// import gameThumb2 from "../assests/InnerPage/thum-big2.png";
// import gameThumb3 from "../assests/InnerPage/thum-big3.png";
// import gameThumb4 from "../assests/InnerPage/thum-big4.png";
// import gameThumb5 from "../assests/InnerPage/thum-big5.png";
// import gameThumb6 from "../assests/InnerPage/thum-big6.png";
import BowOfLegend from "../assests/InnerPage/VR_Posters/bow_of_legend.jpg";
import HumanAnatomy from "../assests/InnerPage/VR_Posters/human_anatomy.jpg";
import QuantumPoster from "../assests/InnerPage/VR_Posters/quatum_poster.jpg";
import BowOfLegend_video from "../assests/Videos/vr_videos/archery_game.mp4";
import HumanAnatomy_video from "../assests/Videos/vr_videos/VR_anatomy.mp4";
import QuantumPoster_video from "../assests/Videos/vr_videos/boxing_game.mp4";
import VideoPlayer from "../common/VideoPlayer";

function VRexplore() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(false);
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
      <header className="relative flex justify-end overflow-hidden">
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            activeVideo
              ? "-translate-x-full opacity-0 pointer-events-none"
              : "translate-x-0 opacity-100"
          }`}
        >
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
            <div>
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt="gamification"
                  className="rounded-xl"
                />
              ) : (
                <VideoPlayer
                  activeVideo={currentMedia.src}
                  // playing
                  // controls
                  // width="100%"
                  // height="100%"
                  // className="video-class"
                />
              )}
            </div>
            <div className="p-4">
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#12182a]  "></div>
                <div className="relative p-8 bg-transparent h-[370px]">
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      VR Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      Our VR development team creates fully immersive, realistic
                      virtual environments that transport users to entirely new
                      worlds. Whether for gaming, training, or virtual tours, we
                      deliver high-quality VR solutions that engage and inspire,
                      leveraging the latest in virtual reality technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="">
            {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-2 px-5 my-2 md:my-10 bg-transparent"> */}
            <div className="grid grid-cols-3 md:grid-cols-[repeat(auto-fit,_16.666666%)] gap-2 px-5 my-2 md:my-10 bg-transparent justify-center justify-self-center">
              {/* Thumbnails with active border effect */}
              <img
                src={BowOfLegend}
                alt="Thumbnail 1"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 1
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(BowOfLegend_video, 1)}
              />
              <img
                src={HumanAnatomy}
                alt="Thumbnail 2"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 2
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(HumanAnatomy_video, 2)}
              />
              <img
                src={QuantumPoster}
                alt="Thumbnail 3"
                className={`cursor-pointer transform transition-all duration-500 hover:scale-110 rounded-xl  ${
                  activeThumbnail === 3
                    ? "border-4 border-blue-500 shadow-xl animate-pulse"
                    : "border-2 border-transparent"
                }`}
                onClick={() => handleThumbnailClick(QuantumPoster_video, 3)}
              />
              {/* <img
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
              /> */}
            </div>
          </div>
        </div>
        {/* Fullscreen Video */}
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
                url={sampleVideo1}
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

export default VRexplore;
