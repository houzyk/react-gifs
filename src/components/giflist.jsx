import React from "react";
import Gif from "./gif";

function GifList(props) {
  return (
    <div className="gif-list">
      {props.gifIds.map(id => <Gif gifID={id} key={id} />)}
    </div>
  );
}

export default GifList;
