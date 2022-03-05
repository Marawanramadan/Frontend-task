import React from "react";
import backgrond from "../images/Makadi_Heights_Render 1.png";
import { Row, Col, Container } from "react-bootstrap";
import pic1 from "../images/pic1.svg";
export default function FirstSection() {
  return (
    <>
      <div className="background">
        <img src={backgrond} alt="background" />
      </div>
      <div className="content">
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <img src={pic1} alt="section" />
            </Col>
            <Col className="content-wrap" lg="6" sm="12">
              <p className="content-title">The place</p>
              <p className="content-title2">we call home</p>
              <p className="content-text">
                Makadi Heights is a town built over 3.4 million square meters
                planned for development, with an elevation reaching 78 meters
                above sea level guaranteeing magnificent panoramic sea views
                residential units. Envisioned as a comprehensive town.
              </p>
              <div>
                <button>Download Brochure</button>
                <button>Show Master plan</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
