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

import "./infocards.css";


const url = "https://corona.lmao.ninja/v2";

/**
 * Creates card to showcase covid cases in maryland, united states, and world
 * In geoInfo, import data from covid track to put into card body
 *
 * Possibly add search feature to get info for a specific state
 *
 * Possibly add howard county
 */

const createCardItem = ({
  src,
  alt,
  title,
  cases,
  todayCases,
  deaths,
  todayDeaths,
  tests,
  recovered,
}) => (
  <Col>
    <Card>
      <img
        src={src}
        alt={alt}
        width="150px"
        height="150px"
        className="cardImg"
      />
      <CardBody>
        <CardTitle>
          <h3 align="center">{title}</h3>
        </CardTitle>
        <CardText>Cases: {cases}</CardText>
        <CardText>Today Cases: {todayCases}</CardText>
        <CardText>Deaths: {deaths}</CardText>
        <CardText>Today Deaths: {todayDeaths}</CardText>
        <CardText>Tests: {tests}</CardText>
        <CardText>Recovered: {recovered}</CardText>
        <CardFooter>Last Updated: </CardFooter>
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
      todayCases: latestLocal.todayCases,
      deaths: latestLocal.deaths,
      todayDeaths: latestLocal.todayDeaths,
      tests: latestLocal.tests,
      recovered: "N/A",
    },
    {
      src: US,
      alt: "unites states art",
      title: "United States",
      cases: latestNational.cases,
      todayCases: latestNational.todayCases,
      deaths: latestNational.deaths,
      todayDeaths: latestNational.todayDeaths,
      tests: latestNational.tests,
      recovered: latestNational.recovered,
    },
    {
      src: World,
      alt: "world clipart.jpg",
      title: "World",
      cases: latest.cases,
      todayCases: latest.todayCases,
      deaths: latest.deaths,
      todayDeaths: latest.todayDeaths,
      tests: latest.tests,
      recovered: latest.recovered,
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