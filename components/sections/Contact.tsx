"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

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
        },
        (error) => {
          console.error("Email send error:", error);
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
          <div className="bg-green-100 text-green-700 px-4 py-2 mb-3 rounded">
            Your message has been sent!
          </div>
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
            className="space-y-4"
          >
            <FormControl
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border p-2 rounded"
            />
            <FormControl
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border p-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
