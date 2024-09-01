import React, { useState } from "react";
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
      <header className="relative flex justify-end items-center h-screen mb-12 overflow-hidden">
        {/* Content hide and show videos */}
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            showVideo ? "-translate-x-full opacity-0 pointer-events-none" : "translate-x-0 opacity-100"
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
              <div className="my-10">
                <h1 className="text-[30px] font-semibold">CGI Creations</h1>
                <p className="font-thin">
                  The UK's leading CGI and Animation agency.
                </p>
                <p className="mt-10 text-justify w-96">
                  Spark's CGI studio uses the latest cinematic detailed 3D
                  software to help create visually stunning environments, CGI
                  products, and character animations across all sectors. We
                  deliver exceptional detail and ultra realism for our clients.
                  Our talented team deliver exceptional quality CGI and
                  animation for all projects at the most cost effective agency
                  rates available.
                </p>
                <div className="grid grid-cols-4 gap-4 mt-10">
                  <img
                    src="https://new.spark-lab.co.uk/img/f58442e0-3f06-4f74-86d1-0de0d74fec91/samsung-logo.png"
                    className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl"
                  />
                  <img
                    src="https://new.spark-lab.co.uk/img/20a300b8-7bf6-4cdc-b67a-c01ed799e2ab/o2logo.png"
                    className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl"
                  />
                  <img
                    src="https://new.spark-lab.co.uk/img/1ba68a65-9c28-41b3-9539-c72c77709da0/porsche.png"
                    className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl"
                  />
                  <img
                    src="https://new.spark-lab.co.uk/img/f6759832-bb01-4903-ac0c-03b4a0b43deb/accora.png"
                    className="w-20 h-20 border p-4 bg-white border-blue-500 rounded-sm shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Video */}
        {!showVideo && (
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
        )}

        {/* Fullscreen Video */}
        {showVideo && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <button
              onClick={handleCloseVideo}
              className="absolute top-10 right-10 bg-red-600 text-white p-3 rounded-full z-50"
            >
              Close
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

export default Explore;
