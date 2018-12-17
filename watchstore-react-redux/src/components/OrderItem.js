import React from "react";

import "./OrderItem.css";

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

class OrderItem extends React.Component {
  handleClick = e => {
    this.props.addCartItem(
      this.props.item,
      this.props.price,
      this.props.imgSrc,
      this.props.brand
    );
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
                <Col md={8}>
                  Price: {this.props.quantity * this.props.price}
                </Col>
              </Row>
              <div className="btn-group">
                <Button
                  onClick={this.handleClick}
                  className="checkout-btn"
                  bsStyle="success"
                >
                  <span className="inner-btn">+</span>
                </Button>
                <Button className="checkout-btn" bsStyle="danger">
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
