import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import "./MainPage.css";
import { useMediaQuery } from "react-responsive";
import ProjectCard from "./ProjectCard/ProjectCard";
import AddProjectForm from "./AddProjectForm/AddProjectForm";
import ProjectsService from "../services/projects-service";
import UsersService from "../services/users-service";
import { useHistory } from "react-router-dom";

export default function MainPage(props) {
  let history = useHistory();
  let [showAddProject, setShowAddProject] = useState(false);
  let [projects, setProjects] = useState([]);
  let [newProject, setNewProject] = useState([]);
  let [user, setUser] = useState(false);

  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });

  function handleProjectCancel(e) {
    setShowAddProject(false);
  }

  function handleAddProject(project) {
    setNewProject(project);
  }

  useEffect(() => {
    UsersService.getUser().then((user) => {
      setUser(true);
    });
  }, []);

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

  if (!user) {
    return (
      <div>
        Loading... if not redirected click:{" "}
        <button onClick={(e) => history.push("/")}>Go back</button>
      </div>
    );
  }

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
        {!isSmall && <UserInfo />}

        <div className="entire project-container">
          <div className="project-header-contain">
            <h3 className="projects-h3">PROJECTS</h3>{" "}
            {!isSmall && (
              <button
                className="add-project-button"
                onClick={(e) => setShowAddProject(true)}
              >
                + Add Project
              </button>
            )}
            {isSmall && (
              <button
                className="add-project-button"
                onClick={(e) => setShowAddProject(true)}
              >
                Add
              </button>
            )}
          </div>
          <div className="projectcard-container">
            <div className="projectCards">{projectList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
