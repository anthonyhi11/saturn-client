import React, { useContext } from "react";
import Header from "../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import "./MainPage.css";
import ProjectCard from "./ProjectCard/ProjectCard";
// import Data from "../DATA";
import { ProjectContext } from "../ProjectContext/ProjectContext";

export default function MainPage() {
  //eslint-disable-next-line
  let [state, setState] = useContext(ProjectContext);

  let projects = state.Data.projects.map(project => {
    return <ProjectCard info={project} key={project.id} />;
  });

  return (
    <>
      <Header />
      <div className="mainpage-container">
        <UserInfo />
        <div className="projectcard-container">
          <h3 className="projects-h3">Projects</h3>
          <div className="projectCards">{projects}</div>
        </div>
      </div>
    </>
  );
}
