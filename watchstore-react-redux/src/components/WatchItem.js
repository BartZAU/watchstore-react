import React from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";

import "./WatchItem.css";

const WatchItem = props => {
  // console.log(props);
  return (
    <Col xs={6} md={4}>
      <Thumbnail className="card-img" src={props.imgSrc} alt={props.name}>
        <span>{` ${props.name}`}</span>
        <div className="item-details">
          <p>description</p>
          <p>{`$${props.price.toFixed(2)}`}</p>
        </div>

        <Button bsStyle="default">Add to cart</Button>
      </Thumbnail>
    </Col>
  );
};

export default WatchItem;
