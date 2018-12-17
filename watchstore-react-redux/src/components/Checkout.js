import React, { Component } from "react";

import "./Checkout.css";
import NavMain from "./Nav";
import CustomForm from "./CustomForm";
import OrderList from "./OrderList";

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
    // console.log(this.props);
    return (
      <div>
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
                    <OrderList
                      cart={this.props.cart}
                      addCartItem={this.props.addCartItem}
                      removeCartItem={this.props.removeCartItem}
                    />
                  </ListGroup>
                </div>
              </Col>

              <Col xs={12}>
                <div className="checkout-summary">
                  <h5 className="sub-heading">PAYMENT SUMMARY</h5>
                </div>
                <div className="checkout-summary-wrapper">
                  <div className="checkout-summary-prices">
                    <p>
                      <strong>Subtotal: </strong>
                    </p>
                    <p>
                      <strong>Tax: </strong>
                    </p>
                    <p>
                      <strong>Total: </strong>
                    </p>
                  </div>
                  <div className="checkout-summary-prices">
                    <p>
                      <strong>0.00</strong>
                    </p>
                    <p>
                      <strong>0.00</strong>
                    </p>
                    <p>
                      <strong>0.00</strong>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </div>
    );
  }
}
