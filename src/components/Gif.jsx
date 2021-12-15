import React from "react";

function Gif (props) {
  const src = `https://media2.giphy.com/media/${props.id}/200.gif`;
  return (
    <img
      src={src}
      alt="gif"
      className="gif"
    />
  );
}

export default Gif;
