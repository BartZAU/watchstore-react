import React, { Component } from "react";
import "./CustomForm.css";

import { FormControl, ControlLabel, Row, Col } from "react-bootstrap";

export default class CustomForm extends Component {
  render() {
    return (
      <form>
        <Row>
          <Col xs={12}>
            <ControlLabel>NAME ON CARD</ControlLabel>
            <FormControl
              type="text"
              placeholder="Please enter card holders name"
              disabled
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ControlLabel>CARD NUMBER</ControlLabel>
            <FormControl
              type="text"
              placeholder="Please enter card holders name"
              disabled
            />
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <ControlLabel>VALID UNTILL</ControlLabel>
            <FormControl type="text" placeholder="MM/YY" disabled />
          </Col>
          <Col xs={6}>
            <ControlLabel>CVC CODE</ControlLabel>
            <FormControl type="text" placeholder="3 digit code" disabled />
          </Col>
        </Row>
      </form>
    );
  }
}
