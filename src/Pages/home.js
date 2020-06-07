import React, { useState } from "react";

import ImgSlideshow from "./../Components/ImgSlideshow/imgslideshow";

import Slideshow from "./../Components/InfoSlideshow/slideshow";

import "./home.css";

// import Booking from "./booking";

import IntegratedMap from "./../Components/InfoSlideshow/Covidtrack/map/map";

import SafetyMeasures from "./../Components/InfoSlideshow/SafetyMeasures/safetyMeasures";

import About from "./redirects/about";
//import Services from "./services";
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
      <div>
        <About />
      </div>
      <div>
        <SafetyMeasures />
      </div>
      <div>
        <Slideshow />
        <IntegratedMap />
      </div>
      {/* <div>
        <Booking />
      </div> */}
      {/* <div>
        <Services />
      </div> */}
    </>
  );
};

export default Home;
