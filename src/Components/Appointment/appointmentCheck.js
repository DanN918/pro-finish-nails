/**
 * Will have user enter verification code and returns user appointment time and services selected
 */

import React, { useState } from "react";
import './appointmentcheck.css';

const AppointmentCheck = () => {
  return (
    <div className='container'>
      <h3>
        Have an Appointment? 
      </h3>
      <p>Enter code to check for requested time and
        services:</p>
      <input />
    </div>
  );
};

export default AppointmentCheck;
