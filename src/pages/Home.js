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

function Home() {
  return (
    <div className="bg-[#0c0e1a]">
      {/* Welcome Pages */}
      <div
        id="welcome"
        className="container inset-0 flex items-center justify-center py-32  mx-auto max-w-7xl lg:px-8"
      >
        <section className="">
          <div className="flex justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0 py-5">
              <div className="">
                <img src={image1} alt="the content image" />
              </div>
              <div className="mx-0 md:mx-5">
                <div>
                  <h1 className="text-[30px] text-white font-regular">
                    Welcome to shadow Labs
                  </h1>
                  <p className="text-[14px] text-white font-light my-5">
                    Fusce euismod nunc eget nisl ullamcorper, in tempus nisl
                    pretium. Nunc nec nibh diam. Etiam bibendum eros ut urna
                    tristique, eu maximus ligula tempus. Aliquam augue nisl,
                    fermentum sit amet ultricies ac, sodales ac justo.
                  </p>
                  <p className="text-[14px] text-white font-light my-5">
                    Vestibulum vulputate massa rutrum, pharetra neque id,
                    posuere orci. Curabitur egestas enim eu risus imperdiet, sed
                    sollicitudin nibh aliquet.
                  </p>
                  <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                    Explore
                  </button>
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
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                    We specialize in building cutting-edge applications across
                    multiple platforms. Our experience spans over years of
                    developing robust, scalable, and innovative mobile apps.
                    Whether for iOS, Android, or Flutter, we focus on delivering
                    seamless user experiences and top-notch performance. From
                    IoT-enabled solutions to web apps using React Native, we
                    ensure quality, agility, and security in every project
                  </p>
                  {/* <div>
                    <h1 className="text-[30px] text-white font-regular">
                  Android Development
                  </h1>
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                  With a decade of experience in Android development, our team excels at creatinghigh-performance apps tailored to your business needs. We use the latest technologies
like Kotlin and Java to build apps that are intuitive, scalable, and optimized for a
variety of devices. From idea to launch, we craft solutions that not only meet but
exceed expectations.
                  </p>
                  <h1 className="text-[30px] text-white font-regular">
                  iOS Development
                  </h1>
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                  Our iOS development team ensures your app is built with precision and high quality. With a deep understanding of Apple’s ecosystem, we create secure, feature-rich
                  applications using Swift and Objective-C. Whether for iPhone, iPad, or Apple Watch, we deliver smooth, polished apps that align with the unique demands of iOS users
                  </p>
                  <h1 className="text-[30px] text-white font-regular">
                  IoT Development
                  </h1>
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                  We provide innovative IoT solutions that seamlessly connect devices, sensors, andsystems. Our team builds secure, scalable IoT applications that integrate with a widerange of industries, from smart homes and wearables to industrial automation. Withour expertise, you can harness the full potential of IoT technology to drive efficiencyand innovation.
                  </p>
                  <h1 className="text-[30px] text-white font-regular">
                  Flutter Development
                  </h1>
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                  Flutter is a key component of our cross-platform strategy, enabling us to develop apps
for iOS and Android from a single codebase. Our expertise in Flutter ensures that
your app is not only visually appealing but also efficient and responsive, offering a
seamless experience across platforms.
                  </p>
                  <h1 className="text-[30px] text-white font-regular">
                  React Native Development
                  </h1>
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                  Using React Native, we build mobile apps that combine the look and feel of native
applications with the speed and efficiency of a unified codebase. Whether you're
launching a new product or enhancing an existing one, we ensure that your React
Native app is fast, reliable, and scalable. 
                  </p>
                    </div> */}
                  <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                    Explore
                  </button>
                </div>
              </div>

              <div className="">
                <img src={appimg} alt="the content image" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Game */}
      {/* <section
  className='bg-cover bg-center  flex items-center justify-center'
  style={{ backgroundImage: `url(${game})` }}
>
  <div className='container h-screen overflow-hidden mx-auto max-w-7xl lg:px-8'>
    <div className='flex justify-center items-center h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5'>
      
      <div className=''>
          <img src={appimg} alt='the content image' className='hidden'   />
        </div>
      
        <div>
          <div>
            <h1 className='text-[30px] text-white font-regular'>Game Development</h1>
            <p className='text-[14px] text-white font-light my-5 text-justify'>Our team is skilled in creating immersive 2D and 3D games using the latest
            technology. We have extensive experience working with Unity, Unreal Engine, andHTML5, delivering high-quality games across mobile, console, and web platforms. Whether it’s casual mobile games or complex simulations, we tailor each project toresonate with its audience. </p>
                         
            <button className='border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150'>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section> */}
      {/* Gamifications */}
      <div className="bg-[#0C0E1A]" id="gamification">
        <div className="container min-h-screen overflow-hidden flex justify-center items-center mx-auto max-w-7xl lg:px-8">
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-3 lg:px-0 py-5">
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

                  <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                    Explore
                  </button>
                </div>
              </div>
              <div className="">
                <img src={gamification} alt="the content image" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AR/VR */}
      <section className="bg-black" id="ar">
        <div className="container inset-0 flex items-center justify-center min-h-screen mx-auto max-w-7xl lg:px-8">
          <section className="">
            <div className="flex justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center px-4 md:px-0 py-5">
                <div className="">
                  <img src={AR} alt="the content image" />
                </div>
                <div className="mx-0 md:mx-5">
                  <div>
                    <h1 className="text-[30px] text-white font-regular">
                      AR/VR Development
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
                    <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                  <p className="text-[16px] text-white font-light my-5 text-justify w-10/12">
                    We are driving the future of the web with our Web 3.0
                    services, including blockchaindevelopment, NFT creation, and
                    decentralized applications. Our expertise in blockchain
                    technology enables us to create secure, transparent, and
                    innovative solutions for businesses looking to embrace the
                    digital economy.
                  </p>

                  <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                    Explore
                  </button>
                </div>
              </div>

              <div className="">
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
                  <p className="text-[16px] text-white font-light my-5 text-justify">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverable.
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo non habent claritatem insitamconsequat duis
                    autem facilisis at vero eros
                  </p>
                  <button className="border border-blue-600 text-white px-3 w-32 py-2 rounded-full hover:bg-[#3c66ee] hover:duration-150">
                    Say Hello
                  </button>
                </div>
              </div>
              <div className="mx-0 md:mx-5">
                <div className="flex items-center my-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-14 text-white rounded-none"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="mx-3">
                    <h1 className="text-[30px] text-white font-regular">
                      Email Address
                    </h1>
                    <p className="text-white my-1">shadowlabs@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center mb-10">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-14 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <div className="mx-3">
                    <h1 className="text-[30px] text-white font-regular">
                      Phone Number
                    </h1>
                    <p className="text-white my-1">+91 00000-00000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-14 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div className="mx-3">
                    <h1 className="text-[30px] text-white font-regular">
                      Our Location
                    </h1>
                    <p className="text-white my-1">xxx,yyy,zzz.</p>
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
