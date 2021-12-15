import React, { Component } from "react";

import Gif from "./Gif";
import Gifs from "./Gifs";
import SearchBar from "./Search";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedGifId: true,
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

          </div>
        </div>
        <div className="right-scene">

        </div>
      </div>
    );
  }
}

export default App;
