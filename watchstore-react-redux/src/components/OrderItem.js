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

const OrderItem = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default OrderItem;
