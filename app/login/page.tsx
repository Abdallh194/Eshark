import PatientLoginForm from "@/components/forms/PatientLoginForm";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
  return (
    <div className="login">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <PatientLoginForm />
          </Col>
          <Col md={12} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
