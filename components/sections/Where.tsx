import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillPushpin } from "react-icons/ai";

const Where = () => {
  return (
    <div className="Where">
      <Container>
        <div className="gb-head main_head">Where Care Meets Trust</div>
        <div className="gb-desc main_desc">
          In every diagnosis, treatment, and follow-up — we blend compassion
          with expertise. Our team is committed to building lasting
          relationships with patients based on honesty, empathy, and
          high-quality care.
        </div>
        <Row>
          <Col md={12} lg={6} className="cus-d-flex where-card">
            <div className="head gb-head">
              Built on Compassion, Backed by Trust
            </div>
            <div className="desc gb-desc mt-3">
              We offer more than just treatment — we build real connections
              through compassionate care and trusted medical expertise you can
              rely on every day.
            </div>
            <Link href="/login" className="book-btn">
              Your Health Starts Here <AiFillPushpin className="d-inline" />
            </Link>
          </Col>
          <Col md={12} lg={6} className="p-0">
            <Image
              src="/where.png"
              width={800}
              height={500}
              className="img-fluid"
              alt="eshark"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Where;
