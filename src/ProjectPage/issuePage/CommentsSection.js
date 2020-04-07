import React, { useContext } from "react";
import "./Comments.css";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import Comment from "./Comment";
import rn from "random-number";

export default function CommentsSection(props) {
  let [state, setState] = useContext(ProjectContext);

  let option = {
    min: 10,
    max: 50,
    integer: true
  };

  function addComment(e) {
    e.preventDefault();
    let comment = e.target.comment.value;
    let newComment = {
      id: rn(option),
      author: "Guest41",
      text: comment,
      issueId: props.issue,
      datePosted: new Date()
    };
    const newData = { ...state.Data };
    newData.comments.push(newComment);
    setState({ Data: newData });
    e.target.comment.value = "";
  }

  let comments = state.Data.comments
    .filter(comment => comment.issueId === props.issue)
    .map(comment => {
      return <Comment info={comment} key={comment.id} />;
    });
  return (
    <div className="comments-container">
      <h2 className="comment-header">Comments</h2>
      <div className="comment-section">{comments}</div>
      <form onSubmit={e => addComment(e)}>
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
