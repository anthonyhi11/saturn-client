import React from "react";
import "./Stories.css";

export default function Stories(props) {
  function dragStart(e, info) {
    const target = e.target;
    e.dataTransfer.setData("story", info.id);
    e.dataTransfer.setData("name", target);
  }
  return (
    <div
      className="issues"
      draggable
      onDragStart={(e) => {
        dragStart(e, props.info);
      }}
    >
      <p>Story # {props.info.id}</p>
      <p>Assigned to: {props.users.first_name}</p>
      <p>Request: {props.info.title}</p>
    </div>
  );
}

Stories.defaultProps = {
  users: "Pending",
};
