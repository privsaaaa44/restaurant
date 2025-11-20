import React from "react";
import { Carousel } from "react-bootstrap";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.jpg";
import "../App.css";
import "../index.css";

const Home = () => {
  return (
    <Carousel fade controls={false} indicators={true}>
      {/* Slide 1 */}
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            src={B1}
            className="d-block w-100 home-hero-img"
            alt="slide1"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption className="hero-caption">
            <h1 className="hero-title animate-slide-in">Cooking Since</h1>
                <div className="food-section text-center my-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="flex-grow-1 line"></div>
                <span className="px-3 food-title">1950</span>
                <div className="flex-grow-1 line"></div>
              </div>
            </div>  
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            src={B2}
            className="d-block w-100 home-hero-img"
            alt="slide2"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption className="hero-caption">
            <h1 className="hero-title animate-slide-in">Best Quality</h1>

            {/* Red line + FOOD section */}
            <div className="food-section text-center my-4">
              <div className="d-flex align-items-center justify-content-center">
                <div className="flex-grow-1 line"></div>
                <span className="px-3 food-title">FOOD</span>
                <div className="flex-grow-1 line"></div>
              </div>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
