import React, { Component } from 'react';
import SearchBar from './searchform';
import Gif from './gif';
import GifList from './giflist';

const API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gifs: [],
      gifID: ""
    };
  }

  apiSearch = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=15`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        const gifs = data.data.map(individualGif => individualGif.id);
        this.setState(
          { gifs: gifs }
        );
      });
  }

  selectGif(id) {
    this.setState({ gifID: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchParam={this.apiSearch} />
          <div className="selected-gif">
            <Gif gifID={this.state.gifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
