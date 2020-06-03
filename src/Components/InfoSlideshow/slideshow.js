import React, { useState } from "react";

import "./slideshow.css";

import Infocards from './Covidtrack/infocards';

// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";

const Slideshow = (props) => {
  return (
    <>
      <div>
        <h1>This is where the info slideshow will be</h1>
      </div>
      <div>
          <Infocards/>
          </div>
    </>
  );
};

export default Slideshow;
