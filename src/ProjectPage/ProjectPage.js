import React from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import Stage from "./Stage";

export default function ProjectPage(props) {

  return (
    <>
      <Header />
      <div className="project-info">
        <h2>{props.project.name}</h2>
        <p>Release Day: {props.project.target}</p>
        <button className="buttons">Delete Project</button>
      </div>
      <section className="stages-container">
        <Stage name={"New"} issues={props.issues} />
        <Stage name={"In Progress"} issues={props.issues}/>
        <Stage name={"Blocked"} issues={props.issues}/>
        <Stage name={"Ready"} issues={props.issues}/>
      </section>
    </>
  );
}
