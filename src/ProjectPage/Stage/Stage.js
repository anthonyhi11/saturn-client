import React from "react";
import { Link } from "react-router-dom";
import Issues from "../Issues/Issues";
import { useContext } from "react";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import "./Stage.css";
export default function Stage(props) {
  //eslint-disable-next-line
  const [state, setState] = useContext(ProjectContext);

  let issues = props.issues
    .filter((issue) => issue.stage === props.name)
    .map((issue) => {
      return (
        <Link className="issue-links" key={issue.id} to={`/issue/${issue.id}`}>
          <Issues info={issue} key={issue.id} />
        </Link>
      );
    });

  function drop(e) {
    const newData = { ...state.Data }; // gets all issues from context
    const target = e.currentTarget.id; //sets the id of the container
    const draggedIssue = e.dataTransfer.getData("issue"); //gets the id of the dragged issue
    newData.issues = newData.issues.map((issue) => {
      //eslint-disable-next-line
      if (issue.id == draggedIssue) {
        return { ...issue, stage: target };
      } else {
        return issue;
      }
    });
    setState({ Data: newData }); //should set state
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div
      className="stage-container"
      id={props.name}
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
    >
      <div className="stage-header">
        <p className="stage">{props.name}</p>
      </div>
      <div>{issues}</div>
    </div>
  );
}