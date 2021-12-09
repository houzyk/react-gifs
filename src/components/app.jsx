import React, { Component } from 'react';
import SearchBar from './searchform';
import Gif from './gif';
import GifList from './giflist';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return(
      <div>
        <div className='left-scene'>
          <SearchBar />
          <Gif />
        </div>
        <div className='right-scene'>
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
