import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./safetyMeasures.css";

/**
 * Creates jumbotron component that displays current
 * regulations on safe reopening for nail salons and 
 * current policies for safety at work for both
 * customer and employees.
 */

 //Links to cdc and md.gov for covid safety guidelines and nail shop reopening
const webLinks = [
  "https://www.cdc.gov/coronavirus/2019-ncov/index.html",
  "https://governor.maryland.gov/2020/06/03/governor-hogan-announces-beginning-of-stage-two-of-marylands-covid-19-recovery-safe-and-gradual-reopening-of-workplaces-and-businesses/",
];

const SafetyMeasures = (props) => {
  return (
    <div className="container">
      <Jumbotron>
        <h2>Updates: Sanitation and Reopening</h2>
        <hr />
        <p>
          For your safey and ours, we are carefully monitoring the COVID-19
          pandemic and are exercising extreme caution when returning to normal
          operations. As such, we have taken many measures to maintain a
          sanitary environment by following guidelines from the CDC, the state
          of Maryland, and Howard County. Here are the added measures and
          procedures to our daily operations:
        </p>
        <ul>
          <li>FACE MASKS/COVERING WILL BE REQUIRED</li>
          <li>
            APPOINTMENTS ONLY - Must call in to schedule an appointment or book
            an appointment {/**Eventually add routing button here */} here
            <ul>
              <li>
                1 hour prior to your appointment, you will be notifed via phone
                call. We ask that you wait inside your vehicle or outside before
                your appointment time to ensure that staff have sufficient time
                to sanitize the work station
              </li>
            </ul>
          </li>
          <li>Temperature scans will be taken prior to your appointment</li>
          <li>
            Stations are ensured to be kept clean before and after each customer
          </li>
          <li>
            Glass dividers have been purchased to reduce the likelihood of
            spreading the virus
          </li>
        </ul>
        <hr />
        <p>
          On June 3rd, 2020, Governor Larry Hogan announces the beginning of
          Stage 2 or Maryland's COVID-19 Recovery, Safe and Gradual Reopening of
          Workplaces and Businesses. Beginning on Friday June 5th, 2020 at
          5:00PM, Governor Hogan announces that he will be lifting the closure
          of non-essential businesses, including nail salons. Abiding to orders,
          Pro Finish Nails will resume operations beginning June 5th, 2020 at
          5:00PM with appointments only and operate at normal hours afterwards.
          However, we will be and remain at 50% capacity until ordered by Howard
          County or the state of Maryland permits us to increase capacity.
        </p>
        <hr />
        {/**Creates button links for cdc and md.gov */}
        <p>For more information:</p>
        <br />
        <Button color="primary" size="lg" block>
          <a href={webLinks[0]} className="links">
            CDC COVID-19 Guidelines
          </a>
        </Button>
        <Button color="secondary" size="lg" block>
          <a href={webLinks[1]} className="links">
            Maryland COVID-19 Phase 2 Recovery
          </a>
        </Button>
      </Jumbotron>
    </div>
  );
};

export default SafetyMeasures;