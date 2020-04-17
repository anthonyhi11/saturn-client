import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import "./MainPage.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import AddProjectForm from "./AddProjectForm/AddProjectForm";
import ProjectsService from "../services/projects-service";
export default function MainPage(props) {
  let [showAddProject, setShowAddProject] = useState(false);
  let [projects, setProjects] = useState([]);
  let [newProject, setNewProject] = useState([]);

  function handleProjectCancel(e) {
    setShowAddProject(false);
  }

  function handleAddProject(project) {
    setNewProject(project);
  }

  useEffect(() => {
    ProjectsService.getProjects().then((projects) => {
      setProjects(projects);
      props.setProjectsState(projects);
    });
    //eslint-disable-next-line
  }, [newProject]);

  let projectList = projects
    .filter((project) => project.status === "Active")
    .map((project) => {
      return <ProjectCard info={project} key={project.id} />;
    });

  return (
    <>
      <Header />
      {showAddProject && (
        <AddProjectForm
          handleCancel={(e) => handleProjectCancel(e)}
          handleAddProject={(e) => handleAddProject(e)}
        />
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
          <div className="projectCards">{projectList}</div>
        </div>
      </div>
    </>
  );
}
