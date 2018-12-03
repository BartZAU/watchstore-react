import React from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";

import "./WatchItem.css";

class WatchItem extends React.Component {
  handleClick = e => {
    this.props.addCartItem(this.props.name, this.props.price);
  };

  render() {
    // console.log(this.props);
    return (
      <Col xs={6} md={4}>
        <Thumbnail
          className="card-img"
          src={this.props.imgSrc}
          alt={this.props.name}
        >
          <span>{` ${this.props.name}`}</span>
          <div className="item-details">
            <p>{this.props.description}</p>
            <p>{`$${this.props.price.toFixed(2)}`}</p>
          </div>
          <img
            className="added-to-cart"
            src="./img/products/cart.svg"
            alt="cart"
          />
          <Button onClick={this.handleClick} bsStyle="default">
            Add to cart
          </Button>
        </Thumbnail>
      </Col>
    );
  }
}

export default WatchItem;
