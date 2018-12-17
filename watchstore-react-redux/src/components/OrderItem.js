import React from "react";

import "./OrderItem.css";

import { Button, Media, Row, Col, ListGroupItem } from "react-bootstrap";

class OrderItem extends React.Component {
  // will refractor to handle both remove and add item soon
  handleClickAdd = e => {
    this.props.addCartItem(
      this.props.item,
      this.props.price,
      this.props.imgSrc,
      this.props.brand
    );
  };

  handleClickRemove = e => {
    this.props.removeCartItem(this.props.item, this.props.price);
  };

  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <ListGroupItem>
          <Media>
            <Media.Left>
              <img
                width={90}
                height={90}
                src={this.props.imgSrc}
                alt="thumbnail"
              />
            </Media.Left>
            <Media.Body>
              <p>
                <strong>{this.props.brand}</strong>
              </p>
              <Row className="show-grid">
                <Col md={8}>Item: {this.props.item}</Col>
                <Col md={8}>Qty: {this.props.quantity} </Col>
                <Col md={8}>PPU Price: ${this.props.price} </Col>
                <Col md={8}>
                  Price: ${this.props.quantity * this.props.price}
                </Col>
              </Row>
              <div className="btn-group">
                <Button
                  onClick={this.handleClickAdd}
                  className="checkout-btn"
                  bsStyle="success"
                >
                  <span className="inner-btn">+</span>
                </Button>
                <Button
                  onClick={this.handleClickRemove}
                  className="checkout-btn"
                  bsStyle="danger"
                >
                  <span className="inner-btn">-</span>
                </Button>
              </div>
            </Media.Body>
          </Media>
        </ListGroupItem>
      </React.Fragment>
    );
  }
}

export default OrderItem;
