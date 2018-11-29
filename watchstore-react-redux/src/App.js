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

  handleAddCartItem = addedItem => {
    let index = this.state.cart.findIndex(el => el.item === addedItem);

    if (index == -1) {
      // [...state, action.event]
      console.log(false);
    } else {
      console.log(true);
    }

    this.setState(prevState => ({
      cart: [
        ...prevState.cart,
        {
          item: addedItem,
          price: 0
        }
      ]
    }));
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
