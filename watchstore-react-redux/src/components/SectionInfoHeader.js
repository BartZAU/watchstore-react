import React from "react";
import { Grid, Col } from "react-bootstrap";

import "./SectionInfoHeader.css";

const SectionInfoHeader = props => {
  // console.log(props);
  return (
    <Grid className="section-info-header">
      <Col xs={12}>
        <h2>{props.brand}</h2>
        <p className="lead">{props.brandHeaderinfo}</p>
      </Col>
    </Grid>
  );
};

export default SectionInfoHeader;
