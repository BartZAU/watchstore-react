import React from "react";
import { Grid, Col, Row, Image, Thumbnail, Button } from "react-bootstrap";

const WatchItem = props => {
  return (
    <Col xs={6} md={4}>
      <Thumbnail src="https://via.placeholder.com/150" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="default">Add to cart</Button>
        </p>
      </Thumbnail>
    </Col>
  );
};

export default WatchItem;
