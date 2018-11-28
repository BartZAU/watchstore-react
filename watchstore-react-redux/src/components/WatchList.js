import React, { Component } from "react";
import { Grid, Col, Row, Image, Thumbnail, Button } from "react-bootstrap";

import WatchItem from "./WatchItem";
import SectionInfoHeader from "./SectionInfoHeader";

import "./WatchList.css";

export default class WatchList extends Component {
  state = {
    videos: [
      {
        imageSrc: "https://via.placeholder.com/150",
        title: "title 1",
        Description: "Description"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <SectionInfoHeader />
        <Grid>
          <Row className="watch-list">
            <Col xs={6} md={4}>
              <Thumbnail src="https://via.placeholder.com/150" alt="242x200">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="default">Add to cart</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
