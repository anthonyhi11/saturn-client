import React, { useState } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import Stage from "./Stage";
import AddIssueForm from "./AddIssueForm";

export default function ProjectPage(props) {
  let [showAddIssue, setShowAddIssue] = useState(false);

  function handleCancel(e) {
    setShowAddIssue(false);
  }

  return (
    <>
      <Header />
      {showAddIssue && (
        <AddIssueForm
          project={props.project.id}
          handleCancel={(e) => handleCancel(e)}
        />
      )}
      <div className="project-info">
        <h2>{props.project.name}</h2>
        <p>Release Day: {props.project.target}</p>
        <button className="buttons" onClick={() => setShowAddIssue(true)}>
          Add Issue
        </button>
      </div>
      <section className="stages-container">
        <Stage name={"New"} issues={props.issues} />
        <Stage name={"In Progress"} issues={props.issues} />
        <Stage name={"Blocked"} issues={props.issues} />
        <Stage name={"Ready"} issues={props.issues} />
      </section>
    </>
  );
}
