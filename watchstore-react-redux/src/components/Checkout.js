import React, { Component } from "react";

import "./Checkout.css";
import NavMain from "./Nav";

import {
  Button,
  Collapse,
  Well,
  Media,
  Grid,
  Row,
  Col,
  Glyphicon
} from "react-bootstrap";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <NavMain />
        <section className="py-5">
          <Grid className="show-grid">
            <Row>
              <Col xs={12} sm={6}>
                <div className="checkout">
                  <h1>Checkout</h1>
                  <h5 className="sub-heading">SHIPPING DETAILS</h5>
                  <hr className="hr-line" />

                  <p>Lorem Ipsum</p>
                  <p>101 Praesent laoreet St</p>
                  <p>2222 Sydney</p>
                  <p>NSW</p>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                {/* <h1>WEEE</h1> */}
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}
