import React, { useState } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import Stage from "./Stage/Stage";
import AddIssueForm from "./AddIssueForm";
import { useMediaQuery } from "react-responsive";
import StageMobile from "./StageMobile/StageMobile";

export default function ProjectPage(props) {
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
        <p>Release Day: {props.project.target}</p>
        <button className="buttons" onClick={() => setShowAddIssue(true)}>
          Add Issue
        </button>
      </div>
      {isDesktopOrLaptop && (
        <section className="stages-container">
          <Stage name={"New"} issues={props.issues} />
          <Stage name={"Working"} issues={props.issues} />
          <Stage name={"Blocked"} issues={props.issues} />
          <Stage name={"Done"} issues={props.issues} />
        </section>
      )}
      {isMobile && (
        <table className="issue-table">
          <thead>
            <tr className="table-row">
              <th>Stage</th>
              <th>Stories</th>
            </tr>
          </thead>
          <StageMobile name="New" project={props.project} />
          <StageMobile name="Working" project={props.project} />
          <StageMobile name="Blocked" project={props.project} />
          <StageMobile name="Ready" project={props.project} />
        </table>
      )}
    </>
  );
}
