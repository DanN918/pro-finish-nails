import React from "react";

import "./slideshow.css";

import Clock from './../Clock/clock';
import Infocards from "./Covidtrack/infocards";

const Slideshow = () => {
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
