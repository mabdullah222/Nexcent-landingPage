// ContactUs.js
import React,{useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const [data,setData]=useState({name:"",email:"",message:""})
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.name && data.email && data.message){
      alert(`Name: ${data.name}\tEmail: ${data.email}\tMessage: ${data.message}`)
      setData({name:"",email:"",message:""})
    }
    else{
      alert("Full Name, Email and Message are required")
    }
  }
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name='name' value={data.name} onChange={(e)=>{setData({...data,[e.currentTarget.name]:e.currentTarget.value})}}  placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={data.email} onChange={(e)=>{setData({...data,[e.currentTarget.name]:e.currentTarget.value})}} placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name='message' value={data.message} onChange={(e)=>{setData({...data,[e.currentTarget.name]:e.currentTarget.value})}} placeholder="Your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
