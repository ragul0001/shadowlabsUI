import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";
import gamification from "../assests/InnerPage/ban-app.jpg";

function Appexplore() {
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
      <header className="relative flex justify-end  overflow-hidden py-28  xl:py-44 2xl:py-64">
        <div
          className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 ${
            showVideo
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
              <img
                src={gamification}
                alt="the gamfications"
                className="rounded-xl"
              />
            </div>
            <div className="p-4">
              <div className="relative my-10">
                <div className="absolute inset-0 bg-[#12182a]   "></div>
                <div className="relative p-8 bg-transparent h-[700px] md:h-[700px] lg:h-[380px] overflow-y-scroll">
                  <h1 className="text-[30px] font-semibold">App Development</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      Android Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      With a decade of experience in Android development, our
                      team excels at creating high-performance apps tailored to
                      your business needs. We use the latest technologies like
                      Kotlin and Java to build apps that are intuitive,
                      scalable, and optimized for a variety of devices. From
                      idea to launch, we craft solutions that not only meet but
                      exceed expectations.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      IOS Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      Our iOS development team ensures your app is built with
                      precision and high quality. With a deep understanding of
                      Apple’s ecosystem, we create secure, feature-rich
                      applications using Swift and Objective-C. Whether for
                      iPhone, iPad, or Apple Watch, we deliver smooth, polished
                      apps that align with the unique demands of iOS users.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      IoT Development
                    </h1>
                    <p className="mt-4 text-justify ">
                      We provide innovative IoT solutions that seamlessly
                      connect devices, sensors, and systems. Our team builds
                      secure, scalable IoT applications that integrate with a
                      wide range of industries, from smart homes and wearables
                      to industrial automation. With our expertise, you can
                      harness the full potential of IoT technology to drive
                      efficiency and innovation.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      Flutter Development
                    </h1>
                    <p className="mt-4 text-justify  ">
                      Flutter is a key component of our cross-platform strategy,
                      enabling us to develop apps for iOS and Android from a
                      single codebase. Our expertise in Flutter ensures that
                      your app is not only visually appealing but also efficient
                      and responsive, offering a seamless experience across
                      platforms.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">
                      React Native Development
                    </h1>
                    <p className="mt-4 text-justify ">
                      Using React Native, we build mobile apps that combine the
                      look and feel of native applications with the speed and
                      efficiency of a unified codebase. Whether you're launching
                      a new product or enhancing an existing one, we ensure that
                      your React Native app is fast, reliable, and scalable.
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

export default Appexplore;
