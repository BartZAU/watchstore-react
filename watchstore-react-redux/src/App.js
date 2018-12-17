import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

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
        quantity: 0,
        imgSrc: "",
        brand: ""
      }
    ],
    totalPrice: 0
  };

  componentDidMount() {
    try {
      const jsonCart = localStorage.getItem("cart");
      const cart = JSON.parse(jsonCart);

      const jsonTotalPrice = localStorage.getItem("totalPrice");
      const totalPrice = JSON.parse(jsonTotalPrice);

      if (cart) {
        this.setState(() => ({ cart: cart, totalPrice: totalPrice }));
      }
    } catch (error) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.cart.length !== this.state.cart.length) {
    //   const json = JSON.stringify(this.state.cart);
    //   localStorage.setItem("cart", json);
    // }

    // if (prevState.cart.length !== this.state.cart.length ) {
    const jsonCart = JSON.stringify(this.state.cart);
    localStorage.setItem("cart", jsonCart);
    const jsonTotalPrice = JSON.stringify(this.state.totalPrice);
    localStorage.setItem("totalPrice", jsonTotalPrice);
    // }
  }

  onTermSubmit = term => {
    this.setState({ term: term });
  };

  // need to add a remove item from cart

  handleAddCartItem = (addedItem, addedItemPrice, imgSrc, brand) => {
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
            imgSrc: imgSrc,
            brand: brand
          }
        ],
        totalPrice: (prevState.totalPrice += addedItemPrice)
      }));
    } else {
      this.setState(prevState => {
        let newCart = [...prevState.cart];
        newCart[index].quantity += 1;
        return {
          cart: newCart,
          totalPrice: (prevState.totalPrice += addedItemPrice)
        };
      });
    }
  };

  handleRemoveCartItem = (removedItem, removedItemPrice) => {
    let index = this.state.cart.findIndex(el => el.item === removedItem);
    // console.log(this.state.cart[index]);

    // handleRemovePlayer = id => {
    // 	this.setState(prevState => {
    // 		return {
    // 			players: prevState.players.filter(p => p.id !== id)
    // 		};
    // 	});
    // };
    // var words = [{id: 1, name: "bobo"},{id: 2, name: "gg"},{id: 3, name: "dale"}];
    // const result = words.filter(word => word.id != words[0].id);

    this.setState(prevState => {
      let newCart = [...prevState.cart];
      newCart[index].quantity -= 1;

      if (this.state.cart[index].quantity < 1) {
        newCart = newCart.filter(watch => watch.item != newCart[index].item);
      }

      return {
        cart: newCart,
        totalPrice: (prevState.totalPrice -= removedItemPrice)
      };
    });
  };

  render() {
    const arrayOfQuantities = this.state.cart.map(item => item.quantity);
    const countOfCartItems = arrayOfQuantities.reduce(
      (total, current) => (total += current)
    );

    // const totalPrice = this.state.cart.map(item => item.price * item.quantity);
    // const result = totalPrice.reduce((total, current) => (total += current));
    // // console.log(this.state.cart);
    // console.log(result);

    // console.log(this.state.totalPrice.toFixed(2));
    // console.log(`number of items ${countOfItems}`);
    return (
      <BrowserRouter>
        <div className="App">
          <NavMain
            countOfCartItems={countOfCartItems}
            onTermSubmit={this.onTermSubmit}
            handleSearched={this.handleSearched}
            itemsInCartBoolean={this.state.cart.length > 1}
          />

          {/* <MainCarousel /> */}
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <MainCarousel />
                <WatchList
                  cart={this.state.cart}
                  searchTerm={this.state.term}
                  addCartItem={this.handleAddCartItem}
                  watchList={data.products[0].frankMuller}
                  headerInfo={data.brandHeaderInfo.frankMullerHeadInfo}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/checkout"
            render={() => (
              <Checkout
                cart={this.state.cart}
                removeCartItem={this.handleRemoveCartItem}
                addCartItem={this.handleAddCartItem}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
