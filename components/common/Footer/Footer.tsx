import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Link href="/" className="logo">
              <Image
                src="/logo-dark.png"
                alt="eshrak website"
                width={150}
                height={50}
                className="img-fluid"
              />
            </Link>
            <p className="gb-desc mt-3">
              A modern platform for healthcare professionals to securely manage
              patient records, streamline daily operations, and enhance care
              quality through reliable and efficient digital tools.
            </p>
          </Col>
          <Col md={12} lg={6}>
            <div className="foot-desc">
              <FaLocationDot style={{ marginRight: "10px" }} /> Tanta - Gharbia
            </div>
            <div className="foot-desc">
              <TbClockHour4 style={{ marginRight: "10px" }} /> Working hours:
              Every day except Friday, from 7 am to 2 pm
            </div>
            <div className="foot-desc">
              <FaPhone style={{ marginRight: "10px" }} /> +201091415560
            </div>
          </Col>
          <hr />
          <div className="copy">
            <div className="c-txt">
              © Eshrak {new Date().getFullYear()}, All rights reserved.
            </div>
            <div className="owner">
              Designed and implemented by{" "}
              <a href="http://seometta.com/">seometta</a>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
