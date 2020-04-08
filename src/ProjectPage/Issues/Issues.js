import React from "react";
import "./Issues.css";

export default function Issues(props) {
  function dragStart(e, info) {
    const target = e.target;
    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
    e.dataTransfer.setData("issue", info.id);
    e.dataTransfer.setData("style", target);
  }

  return (
    <div
      className="issues"
      draggable
      onDragStart={(e) => {
        dragStart(e, props.info);
      }}
    >
      <p>Issue # {props.info.id}</p>
      <p>Assigned to: {props.info.dev}</p>
      <p>Request: {props.info.title}</p>
    </div>
  );
}
