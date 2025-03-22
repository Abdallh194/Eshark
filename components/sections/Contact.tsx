"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_pqylzku",
        "template_8jlmrh9",
        formRef.current,
        "37Soye0Xzs-pm6Tzf"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact" id="support">
      <Container>
        <h1 className="gb-head">We are Here to Help</h1>
        <h3 className="gb-desc">
          Have a question, idea, or just want to say hi? Wed love to hear from
          you! Fill out the form below and our team will get back to you as soon
          as possible. Your message matters to us.
        </h3>
        {success && (
          <Alert variant="success">Your message has been sent!</Alert>
        )}
        <Row>
          <Col md={12} lg={6}>
            <Image
              src="/contact.png"
              width={800}
              height={400}
              className="img-fluid"
              alt="contact eshrak"
            />
          </Col>

          <Col
            as={Form}
            md={12}
            lg={6}
            ref={formRef}
            onSubmit={sendEmail}
            className="cus-d-flex"
          >
            <div className="d-flex flex-wrap">
              <FormControl
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <FormControl
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <FormControl
                type="number"
                name="phone"
                placeholder="Your Phone Number"
                required
              />

              <FormControl
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <textarea
              name="message"
              className="form-control"
              id="msg"
              placeholder="Your Message"
              required
            />

            <button type="submit" className="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2"
                  />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
