import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import "./MainCarousel.css";

export default class MainCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel-wrapper">
        <Carousel.Item>
          <img height={30} src="/img/carousel-img-1.jpeg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={30} src="/img/carousel-img-2.jpeg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={30} src="/img/carousel-img-3.jpg" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
