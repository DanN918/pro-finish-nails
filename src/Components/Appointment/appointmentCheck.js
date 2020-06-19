/**
 * Will have user enter verification code and returns user appointment time and services selected
 */

import React, { useState, useEffect } from "react";
import firebase from './../../firebase';

import './appointmentcheck.css';

const alertInfo = (data) => {
    alert(data);
}
//modal will appear with customer information
//possibly use react hooks form again here?
const AppointmentCheck = (props) => {
    // const []
    const [confirmation, setConfrimation] = useState('');
//   const submitHandler = (event) => {
//       firebase.database().ref().on({confirmation}, console.log(f))
//   }

  return (
    <div className='container'>
      <h3>
        Have an Appointment? 
      </h3>
      <p>Enter code to check for requested time and
        services:</p>
      <input onChange={(event) => setConfrimation(event.target.value)}/>
      <button>Submit</button>
    </div>
  );
};

export default AppointmentCheck;
