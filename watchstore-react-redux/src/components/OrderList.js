import React from "react";
import OrderItem from "./OrderItem";

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

const OrderList = props => {
  // console.log(props);
  return (
    <React.Fragment>
      {props.cart.slice(1).map(watch => (
        <OrderItem
          key={watch.item}
          item={watch.item}
          imgSrc={watch.imgSrc}
          price={watch.price}
          quantity={watch.quantity}
          brand={watch.brand}
          addCartItem={props.addCartItem}
          removeCartItem={props.removeCartItem}
        />
      ))}
    </React.Fragment>
  );
};

export default OrderList;
