import { medicalServices } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div id="services" className="services">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <h1 className="gb-head main_head"> Our Medical Services</h1>
            <h2 className="gb-desc main_desc">
              At our clinic, your health is our top priority. We offer a wide
              range of medical services tailored to meet your needs with the
              highest standards of professionalism and care.
            </h2>
            <Image
              src="/service-doc.png"
              alt="services eshrak"
              width={600}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={6} className="cus-d-flex">
            <Row>
              {medicalServices.map((ser, idx) => (
                <Col sm={6} key={idx} className="service-card">
                  <div className="icon">{ser.icon}</div>
                  <h3 className="card-title">{ser.title}</h3>
                  <p className="card-desc">{ser.description}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
