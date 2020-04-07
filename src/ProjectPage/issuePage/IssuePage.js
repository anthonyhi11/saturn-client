import React, { useState, useContext } from "react";
import Header from "../../Header/Header";
import "./IssuePage.css";
import IssueSideBar from "./IssueSideBar";
import CommentsSection from "./CommentsSection";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import { useHistory } from "react-router-dom";

export default function IssuePage(props) {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  let [state, setState] = useContext(ProjectContext);
  let history = useHistory();

  // ask about this... kind of a bad workaround :(
  if (!props.issue) {
    return <div></div>;
  }

  let { id, stage, title, desc } = props.issue;

  function handleShowDelete(e) {
    setShowDeleteWarning(true);
  }
  function handleCancel(e) {
    setShowDeleteWarning(false);
  }

  function deleteIssue(e) {
    e.preventDefault();
    let newData = { ...state.Data };
    newData.issues = newData.issues.filter((issue) => issue.id !== id);
    setState({ Data: newData });
    history.goBack(1);
  }

  return (
    <div>
      <Header />
      {showDeleteWarning && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            <button onClick={(e) => deleteIssue(e)}>Yes, Delete!</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="issue-page-container">
        <IssueSideBar issue={props.issue} />
        <div className="issuePage-div">
          <h2>{title}</h2>{" "}
          <p className="delete-issue" onClick={(e) => handleShowDelete(e)}>
            x
          </p>
          <p>{stage}</p>
          <p>{desc}</p>
          <CommentsSection issue={id} /> {/* work through COMMENTS*/}
        </div>
      </div>
    </div>
  );
}
