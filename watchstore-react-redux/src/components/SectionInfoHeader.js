import React from "react";
import { Grid, Col, Row } from "react-bootstrap";

import "./SectionInfoHeader.css";

const SectionInfoHeader = props => {
  // console.log(props);
  return (
    <Grid className="section-info-header">
      <Row className="show-grid">
        <Col xs={12}>
          <h2>{props.brand}</h2>
          <p className="lead">{props.brandHeaderinfo}</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default SectionInfoHeader;
