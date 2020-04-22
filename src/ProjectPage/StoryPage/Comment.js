import React from "react";
import CommentsService from "../../services/comments-service";

export default function Comment(props) {
  function handleDelete(e, id) {
    CommentsService.deleteComment(id).then(() => {
      window.location.reload(false);
    });
  }
  return (
    <div className="individual-comment">
      <p className="author">
        {props.user.first_name} {props.user.last_name}
      </p>
      <p id="text">{props.comment.comment}</p>
      <div
        className="deleteClick"
        onClick={(e) => handleDelete(e, props.comment.id)}
      >
        x
      </div>
    </div>
  );
}

Comment.defaultProps = {
  user: "pending",
};
