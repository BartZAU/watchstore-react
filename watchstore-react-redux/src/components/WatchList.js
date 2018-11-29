import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";

import WatchItem from "./WatchItem";
import SectionInfoHeader from "./SectionInfoHeader";

import "./WatchList.css";

export default class WatchList extends Component {
  render() {
    // console.log(this.props.watchList[0].brand);
    // console.log(this.props);
    return (
      <React.Fragment>
        <SectionInfoHeader
          brand={this.props.watchList[0].brand}
          brandHeaderinfo={this.props.headerInfo}
        />
        <Grid>
          <Row className="watch-list show-grid">
            {this.props.watchList.map(watch => (
              <WatchItem
                key={watch.id.toString()}
                id={watch.id}
                brand={watch.brand}
                name={watch.name}
                description={watch.description}
                price={watch.price}
                imgSrc={`/img/products/${watch.imgSrc}`}
                addCartItem={this.props.addCartItem}
              />
            ))}
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}
