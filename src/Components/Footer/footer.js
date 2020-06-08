import React, { useState } from "react";

import { Navbar, NavbarBrand, NavItem, Nav, Table } from "reactstrap";

import "./footer.css";

/**TODO:
 *
 * Fix positioning of items of footer
 * cooment on methods
 */

const regHours = "10AM-8PM";

const workSchedule = [
  { Day: "Monday", Time: regHours },
  { Day: "Tuesday", Time: regHours },
  { Day: "Wednesday", Time: regHours },
  { Day: "Thursday", Time: regHours },
  { Day: "Friday", Time: regHours },
  { Day: "Saturday", Time: "9AM-6PM " },
  { Day: "Sunday", Time: "10AM-6PM" },
];

const tableHours = ({ Day, Time }) => {
  return (
    <tr>
      <td>{Day}</td>
      <td>{Time}</td>
    </tr>
  );
};

const Footer = (props) => {
  return (
    <>
      <div className="spacing">
        <Navbar color="light" light relative="bottom" expand="md">
          <NavbarBrand href="/home"> Pro Finish Nails </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <div className="spacing">
                <div>
                  <h3 className='spacing-top'>Address</h3>
                  <p>
                    Hickory Ridge Village <br />
                    <a href="https://www.google.com/maps/place/Pro+Finish/@39.194847,-76.8855982,17z/data=!3m2!4b1!5s0x89b7defd3b292ea1:0xb01df47dcbe57bd0!4m5!3m4!1s0x89b7dee2af3e2d69:0x3a9278aded81ba85!8m2!3d39.1948429!4d-76.8834095">
                      6420 Freetown Rd, Columbia, MD 21044
                    </a>
                  </p>
                </div>
                <br/>
                <div>
                  <h3>Contact Us:</h3>
                  <p>410-531-6441</p>
                </div>
              </div>
            </NavItem>

            <NavItem>
              <div className="spacing">
                <Table>
                  <thead>
                    <th>Day</th>
                    <th>Hours</th>
                  </thead>
                  <tbody>{workSchedule.map(tableHours)}</tbody>
                </Table>
              </div>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Footer;
