import React, { useState, useEffect } from "react";

/**
 * TODO: 
 * Clock will need to be live
 *  
 * Alternative solution: npm install --save react react-live-clock
 */
const Clock = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => (new Date()), 1000);
    return () => {
        clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <h3 align="center">Current Time: {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} </h3>
    </div>
  );
};

export default Clock;
