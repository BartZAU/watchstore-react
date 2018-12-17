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

                  {/* <ListGroup>
									<ListGroupItem>
                      <Media>
                        <Media.Left>
                          <img
                            width={90}
                            height={90}
                            src="https://i5.walmartimages.com/asr/0a99661e-e4f4-4212-910f-afbd44798433_1.848a6102262283c1b4bd0309358f71dd.jpeg?odnWidth=200&odnHeight=200&odnBg=ffffff"
                            alt="thumbnail"
                          />
                        </Media.Left>
                        <Media.Body>
                          <p>
                            <strong>Brand</strong>
                          </p>
                          <Row className="show-grid">
                            <Col md={8}>Item: </Col>
                            <Col md={8}>Qty: 1 </Col>
                            <Col md={8}>Price: 0.00</Col>
                          </Row>
                        </Media.Body>
                      </Media>
                    </ListGroupItem>
									</ListGroup> */}

                  <ListGroup>
                    <OrderList
                      cart={this.props.cart}
                      addCartItem={this.props.addCartItem}
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
