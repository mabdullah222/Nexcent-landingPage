import React from 'react';
import "./hero.css";
import Carousel from 'react-bootstrap/Carousel';
import svg1 from "../../assets/svgs/slide-svg-1.svg";
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <Carousel className="hero-section">
      <Carousel.Item>
        <div className="slide row">
          <div className="slide-text col-12 col-md-7 col-lg-8">
            <div className="slide-text-heading">
              <p className="darkGreylighted">Lessons and Insights<p className="green-lighted">from 8 years</p></p>

              <p className="slide-text-txt">Where to grow your business as a photographer: site or social media</p>
            <Button className="slide-heading-button">Register</Button>
            </div>
          </div>
          <div className="slide-img col-12 col-md-5 col-lg-4">
            <Image src={svg1} alt="" fluid/>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide row">
          <div className="slide-text col-12 col-md-7 col-lg-8">
            <div className="slide-text-heading">
            <p className="darkGreylighted">Lessons and Insights<p className="green-lighted">from 8 years</p></p>
              <p className="slide-text-txt">Where to grow your business as a photographer: site or social media</p>
            <Button className="slide-heading-button">Register</Button>
            </div>
          </div>
          <div className="slide-img col-12 col-md-5 col-lg-4">
            <img src={svg1} alt="" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide row">
          <div className="slide-text col-12 col-md-7 col-lg-8">
            <div className="slide-text-heading">
            <p className="darkGreylighted">Lessons and Insights<p className="green-lighted">from 8 years</p></p>
              <p className="slide-text-txt">Where to grow your business as a photographer: site or social media</p>
            <Button className="slide-heading-button">Register</Button>
            </div>
          </div>
          <div className="slide-img col-12 col-md-5 col-lg-4">
            <img src={svg1} alt="" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
