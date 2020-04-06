import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import "./IssueSideBar.css";
export default function IssueSideBar(props) {
  let [state, useState] = useContext(ProjectContext);
  let project = state.Data.projects.find(
    project => project.id == props.issue.projectId
  );
  return (
    <div className="issue-side-bar">
      <h1>{project.name}</h1>
      <h2 className="issue-id">Issue # {props.issue.id}</h2>
      <p>Assigned to: {props.issue.dev}</p>
    </div>
  );
}
