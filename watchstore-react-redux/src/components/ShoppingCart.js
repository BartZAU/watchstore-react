import React, { Component } from "react";
import { Grid, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

export default class ShoppingCart extends Component {
  render() {
    return (
      <Grid className="shopping-cart">
        <Row className="show-grid">
          <Col xs={12}>
            <ListGroup>
              <ListGroupItem>Item 1</ListGroupItem>
              <ListGroupItem>Item 2</ListGroupItem>
              <ListGroupItem>item 3</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}
