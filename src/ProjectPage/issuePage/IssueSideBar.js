import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import "./IssueSideBar.css";
import { useHistory } from "react-router-dom";

export default function IssueSideBar(props) {
  let history = useHistory();
  let [state] = useContext(ProjectContext);
  let project = state.Data.projects.find(
    //eslint-disable-next-line
    project => project.id == props.issue.projectId
  );
  return (
    <div className="issue-side-bar">
      <h1 onClick={e => history.goBack(1)}>{project.name}</h1>
      <h2 className="issue-id">Issue # {props.issue.id}</h2>
      <p>Assigned to: {props.issue.dev}</p>
    </div>
  );
}
