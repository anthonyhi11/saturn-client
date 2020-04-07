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

  // function dragOver(e) {
  //   e.preventDefault();
  // }

  return (
    <div
      className="rings"
      id={props.info.stage}
      draggable
      onDragStart={e => {
        dragStart(e, props.info);
      }}
      // onDragOver={e => {
      //   dragOver(e);
      // }}
    >
      <p id={props.info.stage}>Issue # {props.info.id}</p>
      <p id={props.info.stage}>Assigned to: {props.info.dev}</p>
      <p id={props.info.stage}>Request: {props.info.title}</p>
    </div>
  );
}
