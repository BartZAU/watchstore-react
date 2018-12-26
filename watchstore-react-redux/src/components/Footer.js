import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Grid className="show-grid footer-content">
        <Row>
          <Col xs={6}>
            <h5>WATCHTHIS</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quisquam nemo accusamus placeat.
            </p>
          </Col>
          <Col xs={2}>
            <h5>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>
                <a href="/">brand 1</a>
              </li>
              <li>
                <a href="/">brand 2</a>
              </li>
              <li>
                <a href="/">brand 3</a>
              </li>
            </ul>
          </Col>
          <Col xs={2}>
            <h5 style={{ visibility: "hidden" }}>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>
                <a href="/">brand 4</a>
              </li>
              <li>
                <a href="/">brand 5</a>
              </li>
              <li>
                <a href="/">brand 6</a>
              </li>
            </ul>
          </Col>
          <Col xs={2}>
            <h5 style={{ visibility: "hidden" }}>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>
                <a href="/">brand 7</a>
              </li>
              <li>
                <a href="/">brand 8</a>
              </li>
              <li>
                <a href="/">brand 9</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>

      <div className="footer-copyright">&copy; 2018 Little Horses Studio</div>
    </footer>
  );
};

export default Footer;
