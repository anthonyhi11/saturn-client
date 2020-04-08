import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import "./MainPage.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectContext } from "../ProjectContext/ProjectContext";
import AddProjectForm from "./AddProjectForm/AddProjectForm";

export default function MainPage() {
  let [state] = useContext(ProjectContext);
  let [showAddProject, setShowAddProject] = useState(false);

  function handleProjectCancel(e) {
    setShowAddProject(false);
  }

  let projects = state.Data.projects
    .filter((project) => project.archive !== true)
    .map((project) => {
      return <ProjectCard info={project} key={project.id} />;
    });

  return (
    <>
      <Header />
      {showAddProject && (
        <AddProjectForm handleCancel={(e) => handleProjectCancel(e)} />
      )}{" "}
      <div className="mainpage-container">
        <UserInfo />
        <div className="projectcard-container">
          <h3 className="projects-h3">Projects</h3>{" "}
          <button
            className="add-project-button"
            onClick={(e) => setShowAddProject(true)}
          >
            Add
          </button>
          <div className="projectCards">{projects}</div>
        </div>
      </div>
    </>
  );
}
