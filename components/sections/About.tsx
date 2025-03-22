import { aboutfeatures } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about" className="about">
      <Container>
        <h1 className="gb-head main_head">Quality Healthcare, Anytime</h1>
        <h2 className="gb-desc main_desc">
          We believe that healthcare should be simple, accessible, and
          personalized. That’s why we connect patients with trusted, certified
          doctors through a seamless digital experience — wherever they are,
          whenever they need it.
        </h2>
        <Row>
          <Col md={12} lg={6}>
            <Image
              src="/about-doc.png"
              alt="about eshark"
              width={500}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={6} className="cus-d-flex">
            {aboutfeatures.map((fet, idx) => (
              <div className="d-flex about-card" key={idx}>
                <div className="icon">{fet.icon}</div>
                <div className="card-details">
                  <div className="card-title">{fet.title}</div>
                  <div className="card-desc">{fet.description}</div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
