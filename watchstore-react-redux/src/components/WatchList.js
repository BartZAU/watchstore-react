import React, { Component } from "react";
import { Grid, Col, Row, Image, Thumbnail, Button } from "react-bootstrap";

import WatchItem from "./WatchItem";
import SectionInfoHeader from "./SectionInfoHeader";

import "./WatchList.css";

export default class WatchList extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionInfoHeader />
        <Grid>
          <Row className="watch-list">{/*  */}</Row>
        </Grid>
      </React.Fragment>
    );
  }
}
