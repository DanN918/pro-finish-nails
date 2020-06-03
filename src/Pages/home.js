import React, { useState } from "react";

import ImgSlideshow from "./../Components/ImgSlideshow/imgslideshow";

import Slideshow from "./../Components/InfoSlideshow/slideshow";

import "./home.css";

/**
 * TODO:
 * Finsih slideshow
 * Perhaps add live world map
 *  
 */
const Home = (props) => {
  return (
    <>
      {/**Slideshow portion of homepage */}
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

      <div>
        <Slideshow />
      </div>
    </>
  );
};

export default Home;
