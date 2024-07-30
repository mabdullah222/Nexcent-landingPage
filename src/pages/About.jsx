// About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import about  from "../assets/images/about.png"
const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center justify-content-center">
        <Col md={6}>
          <Image src={about} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our company! We are committed to delivering the best
            services to our customers. Our team is dedicated to excellence and
            innovation.
          </p>
          <p>
            Our mission is to provide top-notch solutions that meet the needs of
            our clients and exceed their expectations. We strive to create a
            positive impact in the industry through our innovative approach.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
