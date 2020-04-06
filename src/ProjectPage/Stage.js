import React from "react";
import { Link } from "react-router-dom";
import Issues from "./Issues";
import { useContext } from "react";
import { ProjectContext } from "../ProjectContext/ProjectContext";

export default function Stage(props) {
  //eslint-disable-next-line
  const [state, setState] = useContext(ProjectContext);

  function handleAddIssue() {
    console.log("click");
  }

  let issues = props.issues
    .filter(issue => issue.stage === props.name)
    .map(issue => {
      return (
        <Link className="issue-links" key={issue.id} to={`/issue/${issue.id}`}>
          <Issues info={issue} key={issue.id} />
        </Link>
      );
    });

  function drop(e) {
    // console.log("before state", state);
    let allIssues = state.Data.issues;
    const target = e.target.id;
    const draggedIssue = e.dataTransfer.getData("issue");
    //eslint-disable-next-line
    let correct = allIssues.find(issue => issue.id == draggedIssue);

    correct.stage = target;
    setState({ state });
    // console.log("after", state);
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div
      className="stage-container"
      id={props.name}
      onDrop={e => drop(e)}
      onDragOver={e => allowDrop(e)}
    >
      <div className="stage-header">
        <p className="stage">{props.name}</p>
        <p className="issue-add-button" onClick={e => handleAddIssue(e)}>
          {" "}
          +
        </p>
      </div>
      {issues}
    </div>
  );
}
