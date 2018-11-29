import React, { Component } from "react";

import NavMain from "./components/Nav";
import MainCarousel from "./components/MainCarousel";
import WatchList from "./components/WatchList";
import ShoppingCart from "./components/ShoppingCart";

import data from "./data/products.json";

import "./App.css";

class App extends Component {
  state = {
    term: "",
    cart: [
      {
        item: "",
        price: 0
      }
    ]
  };

  onTermSubmit = term => {
    console.log(term);
    this.setState({ term: term });
    console.log(this.state.term);
  };

  handleAddCartItem = item => {
    console.log(item);
  };

  render() {
    return (
      <div className="App">
        <NavMain onTermSubmit={this.onTermSubmit} />
        <MainCarousel />

        <WatchList
          addCartItem={this.handleAddCartItem}
          watchList={data.products[0].frankMuller}
          headerInfo={data.brandHeaderInfo.frankMullerHeadInfo}
        />

        <ShoppingCart />
      </div>
    );
  }
}

export default App;
