import React, { useContext } from "react";
import "./StageMobile.css";
import { ProjectContext } from "../../ProjectContext/ProjectContext";
import { useHistory } from "react-router-dom";

export default function StageMobile(props) {
  let history = useHistory();
  let [state] = useContext(ProjectContext);

  let issues = state.Data.issues.filter(
    (issue) =>
      issue.stage === props.name && issue.projectId === props.project.id
  );

  let issueNumber = issues.length;
  return (
    <tr
      className="table-row"
      onClick={(e) =>
        history.push(`/projects/${props.project.id}/${props.name}`)
      }
    >
      <td>{props.name}</td>
      <td>{issueNumber}</td>
      {/* <td>
        <Link
          to={`/projects/${props.project.id}/${props.name}`}
          className="link"
        >
          <button>View More</button>
        </Link>
      </td> */}
    </tr>
  );
}
