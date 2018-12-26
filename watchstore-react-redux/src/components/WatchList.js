import React, { Component } from "react";
import Sort from "./Sort";

import { sortBy } from "lodash";
import { Grid, Row } from "react-bootstrap";

import WatchItem from "./WatchItem";
import SectionInfoHeader from "./SectionInfoHeader";

import "./WatchList.css";

export default class WatchList extends Component {
  state = {
    sortKey: "NONE",
    isSortReverse: false
  };

  onSort = sortKey => {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  };

  isInCart = watchName =>
    !!this.props.cart.find(watch => watch.item === watchName);

  render() {
    const SORTS = {
      NONE: watchList => watchList,
      NAME: watchList => sortBy(watchList, "name"),
      PRICE: watchList => sortBy(watchList, "price").reverse()
    };

    const { watchList } = this.props;
    const { sortKey, isSortReverse } = this.state;

    const sortedList = SORTS[sortKey](watchList);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

    // const orderedArray = sortBy(watchList, o => o.price).reverse();

    return (
      <React.Fragment>
        <SectionInfoHeader
          brand={watchList[0].brand}
          brandHeaderinfo={this.props.headerInfo}
        />
        <Grid>
          <Sort sortKey={"NAME"} onSort={this.onSort} activeSortKey={sortKey}>
            sort by Name
          </Sort>
          <Sort sortKey={"PRICE"} onSort={this.onSort} activeSortKey={sortKey}>
            sort by Price
          </Sort>
          <Row className="watch-list show-grid">
            {reverseSortedList
              .filter(watch =>
                watch.name
                  .toLowerCase()
                  .includes(this.props.searchTerm.toLowerCase())
              )
              .map(watch => (
                <WatchItem
                  isInCart={this.isInCart(watch.name)}
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
