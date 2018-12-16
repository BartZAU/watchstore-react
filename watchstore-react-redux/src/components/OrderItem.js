import React from "react";
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
          </Media.Body>
        </Media>
      </ListGroupItem>
    </React.Fragment>
  );
};

export default OrderItem;
