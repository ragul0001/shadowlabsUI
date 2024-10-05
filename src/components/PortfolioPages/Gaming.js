
import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import {Link } from "react-router-dom";
import ParticlesComponent from "../../components/features/ParticlesComponent";
import bgImage from "../../assests/InnerPage/ban-ar.jpg";
import image1 from "../../assests/InnerPage/img1.png";
import image2 from "../../assests/InnerPage/img2.png";
import image3 from "../../assests/InnerPage/img3.png";
import image4 from "../../assests/InnerPage/img4.png";
import game1 from "../../assests/Protfolio/Games/ASTRAL PURSUIT.jpg";
import game2 from "../../assests/Protfolio/Games/Bouncy Tray Toys.jpg";
import game3 from "../../assests/Protfolio/Games/Gearlance.jpg";
import game4 from "../../assests/Protfolio/Games/Kart Kingdom.jpg";
import game5 from "../../assests/Protfolio/Games/Rowing Rivals.jpg";
import game6 from "../../assests/Protfolio/Games/Rush Drive.jpg";







// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sampleVideo1 from "../../assests/Videos/gm_Astral_Pursuit.mp4";
import sampleVideo2 from "../../assests/Videos/gm_Bouncing_Ball.mp4";
import sampleVideo3 from "../../assests/Videos/gm_Gear_Lance.mp4";
import sampleVideo4 from "../../assests/Videos/gm_Kart_Game.mp4";
import sampleVideo5 from "../../assests/Videos/gm_Boat_game.mp4";
import sampleVideo6 from "../../assests/Videos/gm_Rush_Drive.mp4";




function Gaming() {
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
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
  
    // Mapping images to corresponding videos
    const videoMapping = {
      image1: sampleVideo1,
      image2: sampleVideo2,
      image3: sampleVideo3,
      image4: sampleVideo4,
      image5: sampleVideo5,
      image6: sampleVideo6,
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
            <ReactPlayer
                url={activeVideo}
                playing
                controls
                width="100%"
                height="100%"
                className="video-class"
              />
            </div>
          ) : (

            <img src={bgImage} alt="the portfolio" className="rounded-xl" />
          )}
        </div>
        <div className="slider-container ">
          <Slider {...settings}>
            <div onClick={() => handleImageClick("image1")} className="flex justify-center">
              <img src={game1} alt="portfolio image 1" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image2")}>
              <img src={game2} alt="portfolio image 2" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image3")}>
              <img src={game3} alt="portfolio image 3" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image4")}>
              <img src={game4} alt="portfolio image 4" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image5")}>
              <img src={game5} alt="portfolio image 5" className="rounded-xl cursor-pointer" />
            </div>
            <div onClick={() => handleImageClick("image6")}>
              <img src={game6} alt="portfolio image 6" className="rounded-xl cursor-pointer" />
            </div>
            {/* Additional images (optional) */}
            {/* <div onClick={() => handleImageClick("image2")}>
              <img src={image2} alt="portfolio image 4" className="rounded-xl" />
            </div>
            <div onClick={() => handleImageClick("image1")}>
              <img src={image1} alt="portfolio image 4" className="rounded-xl" />
            </div>
            <div onClick={() => handleImageClick("image3")}>
              <img src={image3} alt="portfolio image 4" className="rounded-xl" />
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Gaming