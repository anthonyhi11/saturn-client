import React from "react";

export default function Comment(props) {
  return (
    <div className="individual-comment">
      <p className="author">{props.info.author}</p>
      <p id="text">{props.info.text}</p>
    </div>
  );
}
