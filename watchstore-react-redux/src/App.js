import React, { Component } from "react";

import NavMain from "./components/Nav";
import MainCarousel from "./components/MainCarousel";
import WatchList from "./components/WatchList";
import data from "./data/products.json";

import "./App.css";

class App extends Component {
  state = {
    term: ""
  };

  onTermSubmit = term => {
    console.log(term);
    this.setState({ term: term });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="App">
        <NavMain onTermSubmit={this.onTermSubmit} />
        <MainCarousel />
        {/* {data} */}
        {/* {data.products[0].frankMuller.map(watch => (
          <div>
            <h1 key={watch.id.toString()}>
              {watch.id} — {watch.name} — {watch.price}
            </h1>

            <img width="150px" src={`/img/products/${watch.imgSrc}`} alt="" />
          </div>
        ))} */}
        <WatchList />
      </div>
    );
  }
}

export default App;
