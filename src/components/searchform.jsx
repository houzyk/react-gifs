import React, { Component } from "react";

class SearchBar extends Component {

  renderSearch = (e) => {
    this.props.searchParam(e.currentTarget.value);
  }

  render () {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.renderSearch}
      />
    );
  }
}

export default SearchBar;
