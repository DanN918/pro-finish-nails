import React, { useSte } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import Maryland from "./../../../Images/maryland.png";
import US from "./../../../Images/united states.png";
import World from "./../../../Images/world clipart.jpg";

import './infocards.css';

/**
 * Creates card to showcase covid cases in maryland, united states, and world
 * In geoInfo, import data from covid track to put into card body
 */
const geoInfo = [
  {
    src: Maryland,
    alt: "maryland art",
    title: "Maryland",
  },
  {
    src: US,
    alt: "unites states art",
    title: "United States",
  },
  {
    src: World,
    alt: "world clipart.jpg",
    title: "World",
  },
];

const createCardItem = ({src, alt, title }) => (
  <Col>
    <Card>
        <img src={src} alt = {alt}/>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>Maryland Testing</CardText>
      </CardBody>
    </Card>
  </Col>
);

const Infocard = (props) => {
  return (
    <>
      <div>
        <Row>{geoInfo.map(createCardItem)}</Row>
      </div>
    </>
  );
};

export default Infocard;
