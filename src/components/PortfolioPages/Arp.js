
import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import {Link } from "react-router-dom";
import ParticlesComponent from "../features/ParticlesComponent";
import bgImage from "../../assests/InnerPage/ban-ar.jpg";
import image1 from "../../assests/InnerPage/img1.png";
import image2 from "../../assests/InnerPage/img2.png";
import image3 from "../../assests/InnerPage/img3.png";
import image4 from "../../assests/InnerPage/img4.png";
import ar1 from "../../assests/Protfolio/AR/AR Dragon .jpg";
import ar2 from "../../assests/Protfolio/AR/AR Image .jpg";
import VideoPlayer from "../../common/VideoPlayer";


// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AR_car_video from "../../assests/Videos/ar_video/ar_car.mp4";
import AR_dragon_video from "../../assests/Videos/ar_video/ar_dragon.mp4";
function Arp() {
    const [activeVideo, setActiveVideo] = useState(null);

    const settings = {
      dots: true,
      arrows:false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    // Mapping images to corresponding videos
    const videoMapping = {
      image1: AR_dragon_video,
      image2: AR_car_video,
    };
  
    const handleImageClick = (image) => {
      // Set the active video based on the clicked image
      setActiveVideo(videoMapping[image]);
    };
  
  return (
    <div className="bg-[#0c0e1a] relative h-screen" id="portfolio">
    <ParticlesComponent id="particles" />
    <div className="container mx-auto max-w-7xl lg:px-8"> 
        <div className=" flex justify-end gap-3">
          <Link to={"/portfolio"}> <button
              class="my-3 group relative min-h-[50px] w-40 overflow-hidden border border-[#3c66ee]  text-white shadow-2xl transition-all rounded-full before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full"
            >
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#3c66ee] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#3c66ee] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Back
              </span>
            </button></Link> 
          </div>
        </div>
    <section className="relative flex justify-end overflow-hidden">
      <div className="container mx-auto max-w-7xl lg:px-8 relative z-30 text-white rounded-xl transition-all duration-500">
        <div className="flex justify-center py-10">
          {activeVideo ? (
          
            // If a video is active, show the video instead of the background image
            <div>
            <VideoPlayer
                activeVideo={activeVideo}
                // playing
                // controls
                // width="100%"
                // height="100%"
                // className="video-class"
              />
            </div>
          ) : (

            <img src={bgImage} alt="the portfolio" className="rounded-xl" />
          )}
        </div>
        <div className="slider-container ">
          <Slider {...settings}>
            <div onClick={() => handleImageClick("image1")} className="flex justify-center -mx-3">
              <img src={ar1} alt="portfolio image 1" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image2")}>
              <img src={ar2} alt="portfolio image 2" className="rounded-xl cursor-pointer" />
            </div>

          </Slider>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Arp;