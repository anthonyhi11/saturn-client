import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import "./IssueSideBar.css";
import { useHistory } from "react-router-dom";

export default function IssueSideBar(props) {
  let history = useHistory();
  let [state, setState] = useContext(ProjectContext);
  let project = state.Data.projects.find(
    //eslint-disable-next-line
    (project) => project.id == props.issue.projectId
  );

  function handleStageChange(e) {
    let newData = { ...state.Data };
    //eslint-disable-next-line
    let changedIssue = newData.issues.find(
      (issue) => issue.id === props.issue.id
    );
    changedIssue = changedIssue.stage = e.target.value;
    setState({ Data: newData });
  }

  return (
    <div className="issue-side-bar">
      <h1 onClick={(e) => history.goBack(1)}>{project.name}</h1>
      <h2 className="issue-id">Issue # {props.issue.id}</h2>
      <p>Assigned to: {props.issue.dev}</p>
      <label htmlFor="current-status">Change Stage</label>
      <select
        id="current-status"
        className="current-status"
        defaultValue={props.issue.stage}
        onChange={(e) => handleStageChange(e)}
      >
        <option value={props.issue.stage} disabled>
          {props.issue.stage}
        </option>
        <option value="New">New</option>
        <option value="Working">Working</option>
        <option value="Blocked">Blocked</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}
