import React, { Component } from "react";

import "./Checkout.css";
import NavMain from "./Nav";
import CustomForm from "./CustomForm";

import {
  Button,
  Collapse,
  Well,
  Media,
  Grid,
  Row,
  Col,
  Glyphicon,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <NavMain />
        <section className="py-5">
          <Grid className="show-grid">
            <Row>
              <Col xs={12}>
                <h1 className="main-header">Checkout</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className="checkout">
                  <h5 className="sub-heading">SHIPPING DETAILS</h5>

                  <p>Lorem Ipsum</p>
                  <p>101 Praesent laoreet St</p>
                  <p>2222 Sydney</p>
                  <p>NSW</p>
                </div>
              </Col>

              <Col xs={12} sm={6}>
                <div className="checkout">
                  <h5 className="sub-heading">PAYMENT DETAILS</h5>
                  <CustomForm />
                </div>
              </Col>

              <Col xs={12}>
                <div className="checkout">
                  <h5 className="sub-heading">YOUR ORDER</h5>
                  <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>Item 3</ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}
