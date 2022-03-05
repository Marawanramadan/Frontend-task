import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Service from "./service";
import pic2 from "../images/pic2.svg";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import icon5 from "../images/icon5.svg";
import icon6 from "../images/icon6.svg";
import { Carousel } from "antd";

export default function SecondSection() {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const services = [
    {
      icon: icon1,
      title: "Commercial Areas",
      description: <span>Downtown </span>,
      description2: <span>Makadi Heights Mall</span>,
    },
    {
      icon: icon2,
      title: "Sports Facilities",
      description: <span>Sports Courts, Fitness Center </span>,
      description2: <span>Water Sports Activities</span>,
    },
    {
      icon: icon3,
      title: "Kids Friendly Areas",
      description: <span>Kids Aqua Park </span>,
      description2: <span>Kids Areas</span>,
      borderStyle : "service-border"
    },
    {
      icon: icon4,
      title: "Central Park",
      description: <span>Far far away, behind </span>,
      description2: <span> the word mountains</span>,
      borderStyle : "service-border"

    },
    {
      icon: icon5,
      title: "Hotels",
      description: <span>Far far away, behind </span>,
      description2: <span> the word mountains</span>,
    },
    {
      icon: icon6,
      title: "Medical Facilities",
      description: <span>Far far away, behind </span>,
      description2: <span> the word mountains</span>,
    },
  ];
  return (
    <div className="content2">
      <Container>
        <Row>
          <Col className="" lg="6" sm="12">
            <p className="title">Discover Lifestyle</p>
            <p className="sub-title">Amentities</p>
            <p className="text">Occupying a land area of 33,000 square meters, <br/> Makadi Heights’ stunning clubhouse</p>
            <Row>
              {services.map((service) => {
                return (
                  <Col lg="6">
                    <Service
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      description2={service.description2}
                      borderStyle={service.borderStyle??null}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col className="padding" lg="6" sm="12">
            <Carousel afterChange={onChange} onClick={onChange}>
              <div>
                <img src={pic2} alt="example" />
              </div>
              <div>
                <img src={pic2} alt="example" />
              </div>
              <div>
                <img src={pic2} alt="example" />
              </div>
              <div>
                <img src={pic2} alt="example" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
