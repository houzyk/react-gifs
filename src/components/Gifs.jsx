import React from "react";

import Gif from "./Gif";

function Gifs (props) {
  return (
    <div className="gif-list">
      {props.ids.map((id) =>
        <Gif clickFunction={props.clickFunction}
          id={id}
          key={id}
        />
      )}
    </div>
  );
}

export default Gifs;
