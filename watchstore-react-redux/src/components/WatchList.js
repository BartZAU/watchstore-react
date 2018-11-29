import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import data from "../data/products.json";

import WatchItem from "./WatchItem";
import SectionInfoHeader from "./SectionInfoHeader";

import "./WatchList.css";

export default class WatchList extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionInfoHeader />
        <Grid>
          <Row className="watch-list">
            {data.products[0].frankMuller.map(watch => (
              <WatchItem
                key={watch.id.toString()}
                id={watch.id}
                name={watch.name}
                price={watch.price}
                imgSrc={`/img/products/${watch.imgSrc}`}
              />
            ))}
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
