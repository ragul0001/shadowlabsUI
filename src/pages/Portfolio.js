import React, { useState } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import {Link } from "react-router-dom";
import ParticlesComponent from "../components/features/ParticlesComponent";
import bgImage from "../assests/InnerPage/ban-ar.jpg";
import image1 from "../assests/InnerPage/img1.png";
import image2 from "../assests/InnerPage/img2.png";
import image3 from "../assests/InnerPage/img3.png";
import image4 from "../assests/InnerPage/img4.png";
import Copy3D from "../assests/InnerPage/portfolio_posters/3D_copy.jpg";
import AR from "../assests/InnerPage/portfolio_posters/AR.jpg";
import GameCopy from "../assests/InnerPage/portfolio_posters/Game_copy.jpg";
import VR from "../assests/InnerPage/portfolio_posters/VR_copy.jpg";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sampleVideo1 from "../assests/Videos/video1.mp4"; // Add your video files
import sampleVideo2 from "../assests/Videos/video2.mp4";
import sampleVideo3 from "../assests/Videos/video1.mp4"; // Correct this if it's wrong
import sampleVideo4 from "../assests/Videos/video4.mp4";

function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    arrows:false,
    dots: true,
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
          slidesToScroll: 1 ,
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
  };

  const handleImageClick = (image) => {
    // Set the active video based on the clicked image
    setActiveVideo(videoMapping[image]);
  };

  return (
    <div className="bg-[#0c0e1a] relative h-screen" id="portfolio">
      <ParticlesComponent id="particles" />
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
             <Link to="/three"><div onClick={() => handleImageClick("image1")} className="flex justify-center">
                <img src={Copy3D} alt="portfolio image 1" className="rounded-xl cursor-pointer" />
              </div></Link> 
              <Link to={"/arp"}><div onClick={() => handleImageClick("image2")}>
                <img src={AR} alt="portfolio image 2" className="rounded-xl cursor-pointer" />
              </div></Link>
              <Link to={"/game"}> <div onClick={() => handleImageClick("image3")}>
                <img src={GameCopy} alt="portfolio image 3" className="rounded-xl cursor-pointer" />
              </div></Link>
              <Link to={"/vrp"}> <div onClick={() => handleImageClick("image4")}>
                <img src={VR} alt="portfolio image 4" className="rounded-xl cursor-pointer" />
              </div></Link>
              <div onClick={() => handleImageClick("image3")}>
                <img src={GameCopy} alt="portfolio image 3" className="rounded-xl cursor-pointer" />
              </div>
              <div onClick={() => handleImageClick("image1")} className="flex justify-center">
                <img src={Copy3D} alt="portfolio image 1" className="rounded-xl cursor-pointer" />
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
  );
}

export default Portfolio;
