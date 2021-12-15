import React, { Component } from "react";
// import giphy from "giphy-api";

import Gif from "./Gif";
import Gifs from "./Gifs";
import SearchBar from "./Search";

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedGifId: "QxHQ4BtLeEGBlWIFTs",
      gifsIds: []
    };
  }

  search = (q) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${q}&limit=15`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const gifs = data.data.map(gif => gif.id);
        this.setState({ gifsIds: gifs });
      });
  }

  click = (id) => {
    console.log("hey");
    this.setState({ selectedGifId: id });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} clickFunction={this.click} />
          </div>
        </div>
        <div className="right-scene">
          <Gifs ids={this.state.gifsIds} clickFunction={this.click} />
        </div>
      </div>
    );
  }
}

export default App;
