import React, { Component } from "react";

import NavMain from "./components/Nav";
import MainCarousel from "./components/MainCarousel";
import WatchList from "./components/WatchList";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

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

  componentDidMount() {
    try {
      const json = localStorage.getItem("cart");
      const cart = JSON.parse(json);

      if (cart) {
        this.setState(() => ({ cart: cart }));
      }
    } catch (error) {
      // do nothing
    }
  }

  componentDidUpdate(prevPops, prevState) {
    if (prevState.cart.length !== this.state.cart.length) {
      const json = JSON.stringify(this.state.cart);
      localStorage.setItem("cart", json);
    }
  }

  onTermSubmit = term => {
    this.setState({ term: term });
  };

  // need to add a remove item from cart

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
            quantity: 1
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
    const arrayOfQuantities = this.state.cart.map(item => item.quantity);
    const countOfCartItems = arrayOfQuantities.reduce(
      (total, current) => (total += current)
    );

    // console.log(`number of items ${countOfItems}`);
    return (
      <div className="App">
        <NavMain
          countOfCartItems={countOfCartItems}
          onTermSubmit={this.onTermSubmit}
          handleSearched={this.handleSearched}
          itemsInCartBoolean={this.state.cart.length > 1}
        />
        <MainCarousel />

        <WatchList
          cart={this.state.cart}
          searchTerm={this.state.term}
          addCartItem={this.handleAddCartItem}
          watchList={data.products[0].frankMuller}
          headerInfo={data.brandHeaderInfo.frankMullerHeadInfo}
        />
      </div>
    );
  }
}

export default App;
