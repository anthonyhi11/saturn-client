import React from "react";
import Header from "../Header/Header";
import "./StagePageMobile.css";
import { useHistory } from "react-router-dom";

export default function StagePageMobile(props) {
  let history = useHistory();

  let issues = props.issues
    .filter((issue) => issue.stage === props.routeProps.match.params.stage)
    .map((issue) => {
      return (
        <tr key={issue.id} onClick={(e) => history.push(`/issue/${issue.id}`)}>
          <td>{issue.id}</td>
          <td>{issue.title}</td>
          <td>{issue.dev}</td>
        </tr>
      );
    });

  return (
    <div>
      <Header />
      <h1 className="issue-table-h1" onClick={(e) => history.goBack(1)}>
        {props.routeProps.match.params.stage} Stories
      </h1>
      <table className="issue-table">
        <thead>
          <tr className="table-row">
            <th>Issue ID</th>
            <th>Title</th>
            <th>Assigned to</th>
          </tr>
        </thead>
        <tbody>{issues}</tbody>
      </table>
    </div>
  );
}
