import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "./safetyMeasures.css";


const webLinks = [
    {href: 'https://www.cdc.gov/coronavirus/2019-ncov/index.html'},
    {href: 'https://governor.maryland.gov/2020/06/03/governor-hogan-announces-beginning-of-stage-two-of-marylands-covid-19-recovery-safe-and-gradual-reopening-of-workplaces-and-businesses/'}
]

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
            <li>
              1 hour prior to your appointment, you will be notifed via phone
              call. We ask that you wait inside your vehicle or outside before
              your appointment time to ensure that staff have sufficient time to
              sanitize the work station
            </li>
          </li>
          <li>
            Stations are ensured to be kept clean before and after each customer
          </li>
          <li>
            Glass dividers have been purchased to reduce the likelihood of
            spreading the virus
          </li>
          <li>
            Security cameras in lieu of hate crimes against Asians and rioting
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
        <hr/>
        <p>For more information:</p>
        <br/>
        <Button color='primary' size='lg' block href={webLinks[0]}>CDC COVID-19 Guidelines</Button>
        <Button color='secondary' size='lg' block href={webLinks[1]}>Maryland COVID-19 Phase 2 Recovery</Button>
      </Jumbotron>
    </div>
  );
};

export default SafetyMeasures;
