import React from "react";
import { Grid, Col } from "react-bootstrap";

import "./SectionInfoHeader.css";

const SectionInfoHeader = () => {
  return (
    <Grid className="section-info-header">
      <Col xs={12}>
        <h2>Lorem Ipsum</h2>
        <p className="lead">Lorem ipsum dolor sit amet consectetur</p>
      </Col>
    </Grid>
  );
};

export default SectionInfoHeader;
