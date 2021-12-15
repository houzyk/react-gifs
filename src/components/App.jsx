import React, { Component } from "react";

import Gif from "./Gif";
import Gifs from "./Gifs";
import SearchBar from "./Search";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedGifId: "",
      gifsIds: []
    };
  }

  search = (q) => {
    console.log(q);
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <Gifs ids={this.state.gifsIds}/>
        </div>
      </div>
    );
  }
}

export default App;
