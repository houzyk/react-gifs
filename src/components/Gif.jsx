import React from "react";

function Gif (props) {
  return (
    <img
      src={`${props.id}`}
      alt="gif"
      className="gif"
    />
  );
}

export default Gif;
