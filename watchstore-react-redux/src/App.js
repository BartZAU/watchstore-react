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
        price: 0,
        quantity: 0,
        isInCart: false
      }
    ]
  };

  componentDidMount() {}

  componentDidUpdate(prevPops, prevState) {}

  onTermSubmit = term => {
    this.setState({ term: term });
  };

  handleAddCartItem = (addedItem, addedItemPrice) => {
    // check if already in cart
    let index = this.state.cart.findIndex(el => el.item === addedItem);

    if (index === -1) {
      this.setState(prevState => ({
        cart: [
          ...prevState.cart,
          {
            item: addedItem,
            price: addedItemPrice,
            quantity: 1,
            isInCart: true
          }
        ]
      }));
    } else {
      this.setState(prevState => {
        let newCart = [...prevState.cart];
        newCart[index].quantity += 1;
        return { cart: newCart };
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavMain
          onTermSubmit={this.onTermSubmit}
          handleSearched={this.handleSearched}
        />
        <MainCarousel />

        <WatchList
          cart={this.state.cart}
          searchTerm={this.state.term}
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
