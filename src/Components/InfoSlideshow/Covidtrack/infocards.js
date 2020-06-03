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

const url = "https://corona.lmao.ninja/v2/all";

/**
 * Creates card to showcase covid cases in maryland, united states, and world
 * In geoInfo, import data from covid track to put into card body
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

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setLatest(res.data);
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
      cases: latest.cases,
      deaths: "2",
      tests: "2",
    },
    {
      src: US,
      alt: "unites states art",
      title: "United States",
      cases: latest.cases,
      deaths: "2",
      tests: "2",
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
