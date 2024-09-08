import React from "react";
import image1 from "../assests/background/image1.jpg";
import backgroundImage from "../assests/background/app-development-bg.jpg";
import appimg from "../assests/background/app-img.png";
import game from "../assests/background/game-bg.jpg";
import gamification from "../assests/background/gamification.jpg";
import AR from "../assests/background/ar-vr.jpg";
import Web from "../assests/background/web3.0-bg.jpg";
import Webicon from "../assests/background/web3.0-icon.png";
import Contactimg from "../assests/Menu-Icons/background-with-flat-contact-elements.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import sampleVideo from "../assests/Videos/spark3.mp4";

function Home() {
  return (
    <div className="bg-[#0c0e1a]">
      {/* Welcome Pages */}
      <div
        id="welcome"
        className="container inset-0 flex items-center justify-center min-h-screen  mx-auto max-w-7xl lg:px-8"
      >
        <section className="">
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0 py-0">
              <div className="">
                <img src={image1} alt="the content image" />
              </div>
              <div className="mx-0 md:mx-5">
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    Welcome to Endorphinx
                  </h1>
                  <p className="text-[14px] text-white font-light my-5">
                    Welcome to ENDORPHINX - Partner with us to elevate your
                    gaming experience to the next level.
                  </p>
                  <p className="text-[14px] text-white font-light my-5">
                    At ENDORPHINX, we are committed to delivering the best in
                    gaming services, combining innovation with top-quality
                    development. Whether you're looking for immersive 2D and 3D
                    games or cutting-edge experiences in AR and VR, we have you
                    covered.
                  </p>
                  <Link to="../explore">
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
        </section>
      </div>
      {/* App Development */}
       <section
        id="app"
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto max-w-7xl lg:px-8">
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5">
              <div>
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    App Development
                  </h1>
                  <p className="text-[14px] text-white font-light my-5 text-justify">
                    We specialize in building cutting-edge applications across
                    multiple platforms. Our experience spans over years of
                    developing robust, scalable, and innovative mobile apps.
                    Whether for iOS, Android, or Flutter, we focus on delivering
                    seamless user experiences and top-notch performance. From
                    IoT-enabled solutions to web apps using React Native, we
                    ensure quality, agility, and security in every project
                  </p>
                
                  <Link to="../app">
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

              <div className="">
                <img src={appimg} alt="the content image" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>  


      {/* Backgrouond video with content */}
      {/* <div className="bg-[#0c0e1a] relative"  id="app">
         <div className="  block lg:hidden w-full min-w-full min-h-full max-w-none">
            <ReactPlayer  
              url={sampleVideo}
              width="100%"
              height="100%"
              playing
              loop
              muted
            />
          </div>
        <header className="relative flex justify-end items-center lg:h-screen mb-12 overflow-hidden">
      
          <div
            className={`container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500 `}
          >
            <div className="flex justify-center items-center h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5">
                <div>
                  <div>
                    <h1 className="text-[30px] text-white font-regular">
                      App Development
                    </h1>
                    <p className="text-[14px] text-white font-light my-5 text-justify">
                      We specialize in building cutting-edge applications across
                      multiple platforms. Our experience spans over years of
                      developing robust, scalable, and innovative mobile apps.
                      Whether for iOS, Android, or Flutter, we focus on
                      delivering seamless user experiences and top-notch
                      performance. From IoT-enabled solutions to web apps using
                      React Native, we ensure quality, agility, and security in
                      every project
                    </p>

                    <button class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                      <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                      <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>

                <div className="">
                  <img src={appimg} alt="the content image" className="" />
                </div>
              </div>
            </div>
          </div>



          <div className="absolute z-10 hidden lg:block w-screen min-w-full min-h-full max-w-none">
            <ReactPlayer  
              url={sampleVideo}
              width="100%"
              height="100%"
              playing
              loop
              muted
            />
          </div>
        </header>
      </div> */}

      {/* Gamifications */}
      <div className="bg-[#0C0E1A]" id="gamification">
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
                  <Link to="../particle">
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
      {/* AR */}
      <section
        id="ar"
        className="bg-cover bg-center  flex items-center justify-center"
        style={{ backgroundImage: `url(${game})` }}
      >
        {/* <section className="bg-black" id="ar"> */}
        <div className="container inset-0 flex items-center justify-center min-h-screen mx-auto max-w-7xl lg:px-8">
          <section className="">
            <div className="flex justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0 py-5">
                <div className="mx-0 md:mx-5">
                  <div>
                    <h1 className="text-[30px] text-white font-regular">
                      AR Development
                    </h1>
                    <p className="text-[14px] text-white font-light my-5">
                      {" "}
                      Our advanced AR, VR, MR, and XR solutions bring futuristic
                      experiences to life, merging the digital and physical
                      worlds. Whether creating immersive virtual environments or
                      enhancing real-world applications with AR, we provide
                      cutting-edgesolutions for industries like gaming,
                      healthcare, and education.{" "}
                    </p>
                    <Link to="../ar">
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
                {/* <div className=""> */}
                {/* <img src={AR} alt="the content image" />
                  <img src={appimg} alt="the content image" className="hidden" /> */}

                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* VR */}

      <section className="bg-[#0C0E1A]" id="vr">
        <div className="container h-screen overflow-hidden mx-auto max-w-7xl lg:px-8">
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5">
              <div className="">
                <img src={AR} alt="the content image" />
              </div>

              <div>
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    VR Development
                  </h1>
                  <p className="text-[14px] text-white font-light my-5 text-justify">
                    Our VR development team creates fully immersive, realistic
                    virtual environments that transport users to entirely new
                    worlds. Whether for gaming, training, or virtual tours, we
                    deliver high-quality VR solutions that engage and inspire,
                    leveraging the latest invirtual reality technology{" "}
                  </p>

                  <Link to="../vr">
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
      </section>
      {/* Web3.0 */}
      <section
        id="web"
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${Web})` }}
      >
        <div className="container mx-auto max-w-7xl lg:px-8">
          <div className=" h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p items-center px-4 md:px-3 lg:px-0 py-5">
              <div>
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    Web 3.0
                  </h1>
                  <p className="text-[14px] text-white font-light my-5 text-justify ">
                    We are driving the future of the web with our Web 3.0
                    services, including blockchaindevelopment, NFT creation, and
                    decentralized applications. Our expertise in blockchain
                    technology enables us to create secure, transparent, and
                    innovative solutions for businesses looking to embrace the
                    digital economy.
                  </p>

                  <Link to="../web">
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

              <div className="mx-0 lg:mx-20">
                <img src={Webicon} alt="the content image" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <div
        id="contact"
        className="container inset-0 flex items-center justify-center min-h-screen mx-auto max-w-7xl lg:px-8"
      >
        <section className="">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-11  items-center px-4 md:px-0 py-5">
              <div className="">
                <div>
                  <h1 className="text-[30px] text-white">Get in Touch</h1>
                  <p className="text-[14px] text-white font-light my-5 text-justify">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverable.
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo non habent claritatem insitamconsequat duis
                    autem facilisis at vero eros
                  </p>
                  <button class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                    <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                    <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                      Say Hello
                    </span>
                  </button>
                </div>
              </div>
              <div className="mx-0 md:mx-5 my-6">
                <div class="">
                  <div>
                    <span class="uppercase text-sm text-white font-bold">
                      Full Name
                    </span>
                    <input
                      class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div class="mt-8">
                    <span class="uppercase text-sm text-white  font-bold">
                      Email
                    </span>
                    <input
                      class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                    />
                  </div>
                  <div class="mt-8">
                    <span class="uppercase text-sm text-white  font-bold">
                      Message
                    </span>
                    <textarea class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                  </div>
                  <div class="mt-8">
                    <button class="relative h-[50px] rounded-full w-full overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-[#3c66ee] after:duration-500 hover:text-white hover:shadow-[#3c66ee] hover:before:h-2/4 hover:after:h-2/4">
                      <span class="relative z-10">Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
