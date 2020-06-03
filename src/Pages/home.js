import React, { useState } from "react";

//makes the image fade in
//import ImageFadeIn from "react-image-fade-in";

import ImgSlideshow from "./../Components/ImgSlideshow/imgslideshow";

import "./home.css";

const Home = (props) => {
  return (
    /**Slideshow portion of homepage */
    <>
      {/*Slideshow of nail related images */}
      {/* <div>
        <ImageFadeIn
          src={nailInterior}
          opacityTransition="4.5"
          alt="nail interior design"
          className="main-photo"
        />
      </div> */}

      <div>
        <ImgSlideshow />
      </div>
      {/**Welcome Message */}
      <div className="welcome">
        <h1>Welcome to Pro Finish Nails!</h1>
        <br />
        <p>
          Welcome to Pro Finish Nails! At our nail salon, customer satisfaction
          and cleanlisness is our top priority. We offer many services ranging
          from manicures to waxing. Come and enjoy our top quality services and
          relax as our staff help you transform into your best self. We are
          happy to serve you and strive to maximize your comfort during your
          stay!
        </p>
      </div>
    </>
  );
};

export default Home;
