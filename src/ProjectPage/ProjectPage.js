import React, { useState } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import Stage from "./Stage/Stage";
import AddIssueForm from "./AddIssueForm/AddIssueForm";
import { useMediaQuery } from "react-responsive";
import StageMobile from "./StageMobile/StageMobile";
import { useHistory } from "react-router-dom";

export default function ProjectPage(props) {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
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
        <p className="release-day-issue">Release Day: {props.project.target}</p>
        <button
          className="issue-add-button"
          onClick={() => setShowAddIssue(true)}
        >
          Add Issue
        </button>
      </div>
      {isDesktopOrLaptop && (
        <section className="stages-container">
          <Stage name={"New"} issues={props.issues} />
          <Stage name={"Working"} issues={props.issues} />
          <Stage name={"Blocked"} issues={props.issues} />
          <Stage name={"Ready"} issues={props.issues} />
        </section>
      )}
      {isMobile && (
        <div>
          <table className="issue-table">
            <thead>
              <tr className="table-row">
                <th>Stage</th>
                <th>Stories</th>
              </tr>
            </thead>
            <tbody>
              <StageMobile name="New" project={props.project} />
              <StageMobile name="Working" project={props.project} />
              <StageMobile name="Blocked" project={props.project} />
              <StageMobile name="Done" project={props.project} />
            </tbody>
          </table>
          <button onClick={(e) => history.goBack()}>Go Back</button>
        </div>
      )}
    </>
  );
}
