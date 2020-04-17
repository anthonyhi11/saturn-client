import React from "react";

export default function Comment(props) {
  return (
    <div className="individual-comment">
      <p className="author">
        {props.user.first_name} {props.user.last_name}
      </p>
      <p id="text">{props.comment.comment}</p>
    </div>
  );
}

Comment.defaultProps = {
  user: "pending",
};
