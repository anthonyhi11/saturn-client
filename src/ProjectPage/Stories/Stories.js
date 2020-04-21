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
      className="stories"
      draggable
      onDragStart={(e) => {
        dragStart(e, props.info);
      }}
    >
      <p className="story-title">{props.info.title}</p>
      <div className="assignment-container">
        <div className="dev-info">
          <img
            src="../images/ellipse2.png"
            className="profile-small"
            alt="profile-png"
          />
          <p className="assignment">{props.users.first_name}</p>
        </div>
        <p className="story-num">#{props.info.id}</p>
      </div>
    </div>
  );
}

Stories.defaultProps = {
  users: "Pending",
};
