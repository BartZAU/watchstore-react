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
        quantity: 0
      }
    ]
  };

  onTermSubmit = term => {
    console.log(term);
    this.setState({ term: term });
    console.log(this.state.term);
  };

  handleAddCartItem = (addedItem, addedItemPrice) => {
    // check if already in cart
    let index = this.state.cart.findIndex(el => el.item === addedItem);

    if (index == -1) {
      console.log("item new to cart");
      this.setState(prevState => ({
        cart: [
          ...prevState.cart,
          {
            item: addedItem,
            price: addedItemPrice,
            quantity: 1
          }
        ]
      }));
    } else {
      console.log("already in cart update quantity");

      // this.setState(prevState => ({
      //   cart: [
      //     ...prevState.cart,
      //     {
      //       item: addedItem,
      //       price: addedItemPrice,
      //       quantity: (prevState.cart[index].quantity += 1)
      //     }
      //   ]
      // }));

      this.setState(prevState => ({
        quantity: (prevState.cart[index].quantity += 1)
      }));
    }
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
