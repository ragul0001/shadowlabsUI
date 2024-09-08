import React, { useState } from "react";
import ParticlesComponent from "../components/features/ParticlesComponent";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/sample.mp4";

function Webexplore() {


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
                <div className="relative p-8 bg-transparent">
                  <h1 className="text-[30px] font-semibold">Web 3.0</h1>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">NFT Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
                  In the fast-evolving digital asset space, our NFT development services allow you to
create, trade, and manage non-fungible tokens. Whether in art, gaming, or collectibles,
we help you build secure and scalable NFT platforms that empower creators and
collectors alike.

                  </p>
                  </div>
                  <div className="mt-10">
                    <h1 className="text-[20px] font-semibold">Blockchain Development</h1>
                  <p className="mt-4 text-justify  w-auto lg:w-[600px]">
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
      </header>
    </div>
  );
}

export default Webexplore;
