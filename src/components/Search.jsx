import React from "react";

function SearchBar (props) {
  const handleInput = (e) => {
    props.searchFunction(e.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={handleInput}
    />
  );
}

export default SearchBar;
