import React from "react";

export default function Issues(props) {
  //need to set timeout
  function dragStart(e, info) {
    const target = e.target;
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
    e.dataTransfer.setData("issue", info.id);
    e.dataTransfer.setData("style", target);
  }

  function dragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div
      className="rings"
      draggable
      onDragStart={e => {
        dragStart(e, props.info);
      }}
      onDragOver={e => {
        dragOver(e);
      }}
    >
      <p>Issue # {props.info.id}</p>
      <p>Assigned to: {props.info.dev}</p>
      <p>Request: {props.info.title}</p>
    </div>
  );
}
