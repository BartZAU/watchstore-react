import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";

import "./MainCarousel.css";

export default class MainCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel-wrapper">
        <Carousel.Item id="item-1">
          <Carousel.Caption id="item-caption-1">
            <h2>Lorem Ipsum</h2>
            <p className="carousel-lead">Nulla vitae elit libero</p>
            <Button bsStyle="primary">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="item-2">
          <Carousel.Caption id="item-caption-2">
            <h2>Lorem Ipsum</h2>
            <p className="carousel-lead">Lorem ipsum dolor sit amet</p>
            <Button bsStyle="danger">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="item-3">
          <Carousel.Caption id="item-caption-3">
            <h2>Lorem Ipsum</h2>
            <p className="carousel-lead">Praesent commodo cursus magna</p>
            <Button bsStyle="primary">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
