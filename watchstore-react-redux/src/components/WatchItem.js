import React from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";

import "./WatchItem.css";

class WatchItem extends React.Component {
  handleClick = e => {
    this.props.addCartItem(
      this.props.name,
      this.props.price,
      this.props.imgSrc,
      this.props.brand
    );
  };

  render() {
    return (
      <Col xs={6} md={4}>
        <Thumbnail
          className="card-img"
          src={this.props.imgSrc}
          alt={this.props.name}
        >
          <div className="item-details-wrapper">
            <p className="item-name">{this.props.name}</p>
            <p className="item-price">
              <strong>{`$${this.props.price.toFixed(2)}`}</strong>{" "}
            </p>
            <p className="item-details">{this.props.description}</p>
          </div>
          {this.props.isInCart ? (
            <img
              className="added-to-cart"
              src="./img/products/cart.svg"
              alt="cart"
            />
          ) : null}
          <Button
            className="add-to-cart-btn"
            onClick={this.handleClick}
            bsStyle="primary"
          >
            ADD TO CART
          </Button>
        </Thumbnail>
      </Col>
    );
  }
}

export default WatchItem;
