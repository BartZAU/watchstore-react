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

const SectionInfoHeader = props => {
  // console.log(props);
  return (
    <React.Fragment>
      {props.cart.map(watch => (
        <OrderItem
          key={watch.item}
          price={watch.price}
          quantity={watch.quantity}
        />
      ))}
    </React.Fragment>
  );
};

export default SectionInfoHeader;
