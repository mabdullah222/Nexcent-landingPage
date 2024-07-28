import React from "react";
import "./footer.css";
import { Button, Image } from "react-bootstrap";
import whiteLogo from "../../assets/svgs/whiteLogo.svg";
import icons from "../../assets/svgs/icons.svg";
const Footer = () => {
  return (
    <div className="bg-silver d-flex flex-column align-items-center">
      <div className="col-5 text-center mb-3">
        <p className="unlock-heading">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <Button variant="success">Get a Demo</Button>
      </div>
      <div className="secondary-color">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-6 col-sm-12 d-flex flex-column">
              <Image src={whiteLogo} width={200} fluid></Image>
              <p className="text mt-4">Copyright @ 2020 Nexcent ltd.</p>
              <p className="text">All rights Reserved</p>
              <Image src={icons} width={200} fluid></Image>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-md-3 col-sm-6 d-flex flex-column text">
                  <h3 style={{ color: "white" }}>Company</h3>
                  <p>About</p>
                  <p>Blog</p>
                  <p>Contact Us</p>
                  <p>Testimonials</p>
                </div>
                <div className="col-md-4 col-sm-6 d-flex flex-column text">
                    <h3 style={{ color: "white" }}>Support</h3>
                    <p>Help Center</p>
                    <p>Terms of service</p>
                    <p>Legal</p>
                    <p>Privacy Policy</p>
                </div>
                </div>
                <div className="col-5">
                  <h2 style={{color:"white"}}>Stay up to date</h2>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
