import React, { Component } from "react";

class Gif extends Component {
  handleClick () {
    if (this.props.gifId) {
      this.props.selectGif(this.props.gifId);
    }
  }

  render () {
    const gifURL = `https:/media2.giphy.com/media/${this.props.gifId}/200.gif`;
    return (
        <img
          src= {gifURL}
          alt="gif"
          className="gif"
          onClick={this.handleClick}
          />
    );
  }
}

export default Gif;
