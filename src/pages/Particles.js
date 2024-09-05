import React from 'react'
import ParticlesComponent from '../components/features/ParticlesComponent'
import { Link } from "react-router-dom";
import gamification from "../assests/background/gamification.jpg";
function Particles() {
  return (
    <>
    <div className='  bg-black'>
      <ParticlesComponent id="particles"/>
      <div className="bg-[#0C0E1A]" >
        <div className="container min-h-screen overflow-hidden flex justify-center items-center mx-auto max-w-7xl lg:px-8">
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5">
              <div className="">
                <img src={gamification} alt="the content image" className="" />
              </div>

              <div>
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    Gamifications
                  </h1>
                  <p className="text-[14px] text-white text-justify font-light my-5 ">
                    We lead in gamification, transforming sectors like Medical,
                    Automobile, and Fitness into interactive and engaging
                    experiences. By integrating 3D walkthroughs and gamelike
                    elements, we help businesses enhance learning, training, and
                    customer engagement, creating lasting impressions and
                    improving outcomes.{" "}
                  </p>
                  <Link to="#">
                    {" "}
                    <button class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                      <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                      <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                        Explore
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Particles