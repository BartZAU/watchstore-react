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

        <WatchList
          watchList={data.products[0].frankMuller}
          headerInfo={data.brandHeaderInfo.frankMullerHeadInfo}
        />
      </div>
    );
  }
}

export default App;
