import React, { useState } from "react";

import './imgslideshow.css';

//make first image fade in
//import ImageFadeIn from "react-image-fade-in";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

import nailInterior from "./../../Images/nail salon interior.jpg";
import manicure from "./../../Images/manicure.jpg";
import safety from "./../../Images/safety.jpg";
import exterior from './../../Images/exterior.jpg';

const items = [
  { src: nailInterior, alt: "nail interior" },
  { src: manicure, alt: "manicure" },
  { src: safety, alt: "safety" },
  { src: exterior, alt: "exterior" },
];

const ImgSlideshow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, SetAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex+1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex-1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExisting={() => SetAnimating(true)}
        onExited={() => SetAnimating(false)}
        key={(item.src)}
      >
        <img src={item.src} alt={item.alt} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default ImgSlideshow;
