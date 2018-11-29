import React from "react";
import { Grid, Col, Row, Image, Thumbnail, Button } from "react-bootstrap";

const WatchItem = props => {
  console.log(props);
  return (
    <Col xs={6} md={4}>
      <Thumbnail src={props.imgSrc} alt={props.name}>
        <h3>{props.name}</h3>
        <p>description</p>
        <p>{`$${props.price.toFixed(2)}`}</p>
        <p>
          <Button bsStyle="default">Add to cart</Button>
        </p>
      </Thumbnail>
    </Col>
  );
};

export default WatchItem;