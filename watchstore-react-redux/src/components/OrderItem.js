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

const OrderItem = props => {
  // console.log(props);
  return (
    <React.Fragment>
      <ListGroupItem>
        <Media>
          <Media.Left>
            <img width={90} height={90} src={props.imgSrc} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <p>
              <strong>{props.brand}</strong>
            </p>
            <Row className="show-grid">
              <Col md={8}>Item: {props.item}</Col>
              <Col md={8}>Qty: {props.quantity} </Col>
              <Col md={8}>Price: {props.quantity * props.price}</Col>
            </Row>
            <div className="btn-group">
              <Button className="checkout-btn" bsStyle="success">
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
};

export default OrderItem;
