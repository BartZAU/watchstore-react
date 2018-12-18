import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Grid className="show-grid footer-content">
        <Row>
          <Col xs={6}>
            <h5>FOOTER CONTENT</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quisquam nemo accusamus placeat.
            </p>
          </Col>
          <Col xs={2}>
            <h5>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>brand 1</li>
              <li>brand 2</li>
              <li>brand 3</li>
            </ul>
          </Col>
          <Col xs={2}>
            <h5 style={{ visibility: "hidden" }}>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>brand 4</li>
              <li>brand 5</li>
              <li>brand 6</li>
            </ul>
          </Col>
          <Col xs={2}>
            <h5 style={{ visibility: "hidden" }}>BRANDS</h5>
            <ul className="footer-brand-list">
              <li>brand 7</li>
              <li>brand 8</li>
              <li>brand 9</li>
            </ul>
          </Col>
        </Row>
      </Grid>

      <div class="footer-copyright py-3">&copy; 2018 Little Horses Studio</div>
    </footer>
  );
};

export default Footer;
