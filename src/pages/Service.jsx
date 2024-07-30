// Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="service_image_1.jpg" />
            <Card.Body>
              <Card.Title>Mobile Development</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem quae ipsa, exercitationem asperiores incidunt sint, itaque minima, dolores nesciunt iusto! Laborum molestias itaque temporibus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="service_image_2.jpg" />
            <Card.Body>
              <Card.Title>Mobility Services</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem quae ipsa, exercitationem asperiores incidunt sint, itaque minima, dolores nesciunt iusto! Laborum molestias itaque temporibus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="service_image_3.jpg" />
            <Card.Body>
              <Card.Title>Software Consulting</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem quae ipsa, exercitationem asperiores incidunt sint, itaque minima, dolores nesciunt iusto! Laborum molestias itaque temporibus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
