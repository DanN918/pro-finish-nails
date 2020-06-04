import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./booking.css";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import DateSelector from "../Components/Appointment/dateSelector";

import firebase from "./../firebase";

//testing firebase
// firebase.firestore().collection('times').add({
//     title: 'Rubik\'s cube',
//     time_seconds: 45
// })

//will use material ui here

const servicesAvailable = [
    {name: 'Manicure'},
    {name: 'Pedicure'},
    {name: 'Polish '},
    {name: 'Additional Services'},
    {name: 'Wax'},
    {name: 'Nail Care Services'},
]

const Booking = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="setAppoint">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardTitle>Contact Information</CardTitle>
          <label>
            First Name:
            <input name="firstname" ref={register} />
          </label>
          <label>
            Last Name:
            <input name="lastname" ref={register} />
          </label>
          <label>
            Email:
            <input name="email" ref={register} />
          </label>
          <label>
            Phone Number:
            <input name="email" ref={register} />
          </label>
        </Card>

        <Card>
            <CardTitle>Choose Service(s)</CardTitle>
        </Card>
        <input type="submit" />
        {/**Find way to integrate date selector into form */}
        <Card>
            <CardTitle>Select Date and Time</CardTitle>
          <DateSelector />
        </Card>
      </form>
    </div>
  );
};

export default Booking;
