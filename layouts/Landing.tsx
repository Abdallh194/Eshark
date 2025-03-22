import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import Where from "@/components/sections/Where";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="overlay">
          <Container className="cus-d-flex h-100">
            <Row>
              <Col md={12} lg={8}>
                <h2 className="sub_head">
                  Your Health Is Our Top Priority, Trusted Care
                </h2>
                <h1 className="main_head">
                  Quick Visits. Trusted Doctors, Care in Your Hands
                </h1>
                <h4 className="main_desc">
                  We connect you with certified medical experts to provide fast,
                  reliable, and personalized healthcare well-being.
                </h4>
                <Link href="#about" className="more">
                  See How We Cares
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <About />
      <Where />
      <Services />
      <Contact />
    </>
  );
};

export default Landing;
