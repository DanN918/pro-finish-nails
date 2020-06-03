import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import Maryland from "./../../../Images/maryland.png";
import US from "./../../../Images/united states.png";
import World from "./../../../Images/world clipart.jpg";

const url = "https://corona.lmao.ninja/v2";

/**
 * Creates card to showcase covid cases in maryland, united states, and world
 * In geoInfo, import data from covid track to put into card body
 * 
 * Possibly add search feature to get info for a specific state
 */

const createCardItem = ({ src, alt, title, cases, deaths, tests }) => (
  <Col>
    <Card>
      <img src={src} alt={alt} width="150px" height="150px" />
      <CardBody>
        <CardTitle>
          <h3 align="center">{title}</h3>
        </CardTitle>
        <CardText>Cases: {cases}</CardText>
        <CardText>Deaths: {deaths}</CardText>
        <CardText>Tests: {tests}</CardText>
        <CardFooter>Latest Updated: </CardFooter>
      </CardBody>
    </Card>
  </Col>
);

const Infocard = (props) => {
  const [latest, setLatest] = useState("");
  const [latestLocal, setLatestLocal] = useState("");
  const [latestNational, setLatestNational] = useState("");

  useEffect(() => {
    axios
      .get(`${url}/all`)
      .then((res) => {
        console.log(res.data);
        setLatest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get(`${url}/states/maryland`)
      .then((res) => {
        console.log(res.data);
        setLatestLocal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get(`${url}/countries/usa`)
      .then((res) => {
        console.log(res.data);
        setLatestNational(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const geoInfo = [
    {
      src: Maryland,
      alt: "maryland art",
      title: "Maryland",
      cases: latestLocal.cases,
      deaths: latestLocal.deaths,
      tests: latestLocal.tests,
    },
    {
      src: US,
      alt: "unites states art",
      title: "United States",
      cases: latestNational.cases,
      deaths: latestNational.deaths,
      tests: latestNational.tests,
    },
    {
      src: World,
      alt: "world clipart.jpg",
      title: "World",
      cases: latest.cases,
      deaths: latest.deaths,
      tests: latest.tests,
    },
  ];

  return (
    <>
      <div>
        <Row>{geoInfo.map(createCardItem)}</Row>
      </div>
    </>
  );
};

export default Infocard;
