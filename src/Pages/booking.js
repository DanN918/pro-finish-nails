import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import "./booking.css";

import DateSelector from "../Components/Appointment/dateSelector";

import firebase from "./../firebase";

/** TODO:
 * Create maps of services
 * Connect to firebase
 */

//testing firebase
// firebase.firestore().collection('times').add({
//     title: 'Rubik\'s cube',
//     time_seconds: 45
// })

//will use material ui here

/**Place all services and subservices here */
const servicesAvailable = [
  { name: "Manicure" },
  { name: "Pedicure" },
  { name: "Polish " },
  { name: "Additional Services" },
  { name: "Wax" },
  { name: "Nail Care Services" },
];

const manicureServices = [
  { name: "Regular", price: "16" },
  { name: "Manicure w/ French", price: "21" },
  { name: "Gel Manicure", price: "32" },
  { name: "With Remove", price: "34" },
];

const polishChange = [
  { name: "Hand", price: "12" },
  { name: "Feet", price: "14" },
];

const nailCareServices = [{ type: "Acrylic" }];

const waxService = [
  { name: "Eyebrow", price: "10" },
  { name: "Upper Lip", price: "8" },
  { name: "Lower Lip & Chin", price: "16" },
  { name: "Eye, Lip & Chin", price: "25" },
  { name: "Full face", price: "30" },
  { name: "Underarms", price: "15" },
  { name: "Half Arms", price: "20" },
  { name: "Full Arms", price: "25" },
  { name: "Bikini", price: "25" },
  { name: "Half Legs", price: "25" },
  { name: "Full Legs & Bikini", price: "70" },
  { name: "Chest", price: "25" },
  { name: "Back", price: "40" },
];

// const useBooking = () => {
//   const[costumerData, setCostumerData]=useState([]);
//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection("booking")
//       .onSnapshot((snapshot) => {
//         debugger;
//       });
//   }, []);

//   return consumerData;
// }

const Booking = (props) => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  const [data, setData] = useState(null);

  const createOptions = ({ name }) => {
    return <option ref={register}>{name}</option>;
  };

  return (
    <>
      <div className="setAppoint">
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          {/* <h2>Book an Appointment</h2> */}

          <div className="container">

            <section>
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
            </section>

            <section>
              <label>Choose Service</label>
              <select>{servicesAvailable.map(createOptions)}</select>
            </section>

            <section>
              <DateSelector />
            </section>

            <input type="submit" width='50px'/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Booking;
