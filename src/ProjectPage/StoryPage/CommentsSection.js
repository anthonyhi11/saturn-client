import React, { useEffect, useState } from "react";
import "./Comments.css";
import Comment from "./Comment";
import CommentsService from "../../services/comments-service";

export default function CommentsSection(props) {
  let [comments, setComments] = useState([]);
  let [story, setStory] = useState([]);

  useEffect(() => {
    CommentsService.getComments(props.story).then((comments) => {
      setComments(comments);
    });
    //eslint-disable-next-line
  }, [story]);
  useEffect(() => {
    setStory(props.story);
    //eslint-disable-next-line
  }, [comments]);

  let commentsList = comments.map((comment) => {
    return (
      <Comment
        key={comment.id}
        comment={comment}
        user={props.users.find((user) => user.id === comment.user_id)}
      />
    );
  });

  function addComment(e) {
    e.preventDefault();
    let comment = e.target.comment.value;
    let newComment = {
      comment: comment,
    };
    CommentsService.addComment(story, newComment).then((comment) => {
      setComments([...comments, comment]);
    });
    e.target.comment.value = "";
  }

  return (
    <div className="comments-container">
      <h2 className="comment-header">Comments</h2>
      <div className="comment-section">{commentsList}</div>
      <form onSubmit={(e) => addComment(e)}>
        <input
          type="text"
          name="comment"
          placeholder="Add Comment"
          className="add-comment-input"
        />{" "}
        <button type="submit" className="comment-button">
          Add
        </button>
      </form>
    </div>
  );
}

CommentsSection.defaultProps = {
  story: 0,
};
