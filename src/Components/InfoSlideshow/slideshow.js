import React, { useState, useEffect } from "react";

import "./slideshow.css";

import Clock from './../Clock/clock';
import Infocards from "./Covidtrack/infocards";
// import SafetyMeasures from "./SafetyMeasures/safetyMeasures";

/**
 * TODO:
 * 
 * Implement slide features once api and safety
 * measures are created
 */

// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";

// const items = [Infocards, SafetyMeasures];

// const slides = items.map((item) => {
//   return (
//     <CarouselItem
//       onExisting={() => SetAnimating(true)}
//       onExited={() => SetAnimating(false)}
//       key={item}
//     >

//       <item />
//     </CarouselItem>
//   );
// });

const Slideshow = (props) => {
  //     const [activeIndex, setActiveIndex] = useState(0);
  //   const [animating, SetAnimating] = useState(false);

  //   const next = () => {
  //     if (animating) return;
  //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex+1;
  //     setActiveIndex(nextIndex);
  //   };

  //   const previous = () => {
  //     if (animating) return;
  //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex-1;
  //     setActiveIndex(nextIndex);
  //   };

  //   const goToIndex = (newIndex) => {
  //     if (animating) return;
  //     setActiveIndex(newIndex);
  //   };

  return (
    <>
      <div>
        <h1 className="title">Be Safe, Be Informed</h1>
        <Clock/>
      </div>
      <div>
        <Infocards />
      </div>
    </>
  );
};

export default Slideshow;
