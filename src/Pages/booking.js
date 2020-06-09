import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { Table, FormGroup, Input, Label } from "reactstrap";

import "./booking.css";

import DateSelector from "../Components/Appointment/dateSelector";
import AppointmentCheck from "./../Components/Appointment/appointmentCheck";

import firebase from "./../firebase";

/** TODO:
 * Create maps of services
 * Connect to firebase
 * comment box
 */

//testing firebase

//will use material ui here

/**Place all services and subservices here */

const servicesAvailable = [
  { name: "Select" },
  { name: "Manicure" },
  { name: "Pedicure" },
  { name: "Polish " },
  { name: "Additional Services" },
  { name: "Wax" },
  { name: "Nail Care Services" },
];

{
  /**Will be implemented later as sub drop down menus */
}
// const manicureServices = [
//   { name: "Regular", price: "16" },
//   { name: "Manicure w/ French", price: "21" },
//   { name: "Gel Manicure", price: "32" },
//   { name: "With Remove", price: "34" },
// ];

// const polishChange = [
//   { name: "Hand", price: "12" },
//   { name: "Feet", price: "14" },
// ];

// const nailCareServices = [{ type: "Acrylic" }];

// const waxService = [
//   { name: "Eyebrow", price: "10" },
//   { name: "Upper Lip", price: "8" },
//   { name: "Lower Lip & Chin", price: "16" },
//   { name: "Eye, Lip & Chin", price: "25" },
//   { name: "Full face", price: "30" },
//   { name: "Underarms", price: "15" },
//   { name: "Half Arms", price: "20" },
//   { name: "Full Arms", price: "25" },
//   { name: "Bikini", price: "25" },
//   { name: "Half Legs", price: "25" },
//   { name: "Full Legs & Bikini", price: "70" },
//   { name: "Chest", price: "25" },
//   { name: "Back", price: "40" },
// ];

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

const createSelection = ({ name }) => {
  return <option>{name}</option>;
};

const Booking = (props) => {
  
  const defaultValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    // comments: "",
  };

  const { handleSubmit, register, reset } = useForm({ defaultValues });
  const onSubmit = (data) => console.log(data);

  const [email, setEmail] = useState ('');
  const [fname, setFname] = useState ('');
  const [lname, setLname] = useState ('');
  const [phone, setPhone] = useState ('');

  // const [data, setData] = useState(null);

  let [inputList, setInputList] = useState([]);

  //   firebase.firestore().collection('times').add({
  //     title: 'Rubik\'s cube',
  //     time_seconds: 45
  // })
  const submitHandler = (event) => {
    firebase.firestore().collection("customerData").add({
      Email: email,
      firstname: fname,
      lastname: lname,
      phone: phone

    })
  };


  const clickHandler = (event) => {
    setInputList(
      inputList.concat(
        <div>
          <FormGroup>
            <Input type="select" name="select" id="exampleSelect">
              {servicesAvailable.map(createSelection)}
            </Input>
          </FormGroup>
        </div>
      )
    );
  };

  const clickHandlerDel = (event) => {
    setInputList((inputList = []));
  };

  // const onAlert = (event) => {
  //   alert("Submit?");
  // };

  return (
    <>
      <div className="setAppoint">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="containerForm">
            <section>
              <label>Contact Information</label>
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <label>First Name:</label>
                    </td>
                    <td>
                      <input name="firstname" ref={register} onChange={event=>setFname(event.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Last Name:</label>
                    </td>
                    <td>
                      <input name="lastname" ref={register}  onChange={event=>setLname(event.target.value)}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email:</label>
                    </td>
                    <td>
                      {" "}
                      <input name="email" ref={register}  onChange={event=>setEmail(event.target.value)}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Phone Number:</label>
                    </td>
                    <td>
                      <input name="phone" ref={register}  onChange={event=>setPhone(event.target.value)} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </section>

            <section>
              <div>
                <Label>Choose Service</Label>
                {inputList}
                <button className="addBtn" onClick={clickHandler}>
                  Add Service(s)
                </button>
                <button className="addBtn" onClick={clickHandlerDel}>
                  Reset
                </button>
              </div>
              <div className="textbox">
                <TextField
                  id="outlined-textarea"
                  label="Additional Comments"
                  name="comments"
                  placeholder="Add comments"
                  multiline
                  variant="outlined"
                  ref={register}
                />
              </div>
            </section>

            <section>
              <DateSelector />
            </section>
            <section>
              <button className=".addBtn" type="submit" onClick={submitHandler}>
                Submit
              </button>
            </section>
          </div>
        </form>
      </div>
      <div>
        <AppointmentCheck />
      </div>
    </>
  );
};

export default Booking;
