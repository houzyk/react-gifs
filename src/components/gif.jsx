import React, { Component } from "react";

class Gif extends Component {

  render (){
    const gifURL = `https:/media2.giphy.com/media/${this.props.gifId}/200.gif`;
    return (
      <div className="selected-gif">
        <img
          src= {gifURL}
          alt="gif"
          className="gif" />
      </div>
    );
  }
}

export default Gif;
