import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function Appexplore() {


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
                  <h1 className="text-[30px] font-semibold">App Development</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Android Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  With a decade of experience in Android development, our team excels at creating
high-performance apps tailored to your business needs. We use the latest technologies
like Kotlin and Java to build apps that are intuitive, scalable, and optimized for a
variety of devices. From idea to launch, we craft solutions that not only meet but
exceed expectations.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">IOS Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Our iOS development team ensures your app is built with precision and high quality.
With a deep understanding of Apple’s ecosystem, we create secure, feature-rich
applications using Swift and Objective-C. Whether for iPhone, iPad, or Apple Watch,
we deliver smooth, polished apps that align with the unique demands of iOS users.
                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">IoT Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  We provide innovative IoT solutions that seamlessly connect devices, sensors, and
systems. Our team builds secure, scalable IoT applications that integrate with a wide
range of industries, from smart homes and wearables to industrial automation. With
our expertise, you can harness the full potential of IoT technology to drive efficiency
and innovation.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Flutter Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Flutter is a key component of our cross-platform strategy, enabling us to develop apps
for iOS and Android from a single codebase. Our expertise in Flutter ensures that
your app is not only visually appealing but also efficient and responsive, offering a
seamless experience across platforms.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">React Native Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  Using React Native, we build mobile apps that combine the look and feel of native
applications with the speed and efficiency of a unified codebase. Whether you're
launching a new product or enhancing an existing one, we ensure that your React
Native app is fast, reliable, and scalable.

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

export default Appexplore;
