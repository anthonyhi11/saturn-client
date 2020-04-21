import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import ProjectsService from "../services/projects-service";

export default function ProjectSettings() {
  let [projects, setProjects] = useState([]);
  let [success, setSuccess] = useState(false);

  useEffect(() => {
    ProjectsService.getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  function handleArchive(e, project) {
    let name = project.name;
    let id = project.id;
    let update = {
      name,
      id,
      status: "Archive",
    };
    ProjectsService.updateProject(update).then((project) => {
      setSuccess(true);
      setTimeout(function () {
        setSuccess(false);
      }, 1500);
      setTimeout(function () {
        window.location.reload(false);
      }, 1000);
    });
  }

  function handleActivate(e, project) {
    let name = project.name;
    let id = project.id;
    let update = {
      name,
      id,
      status: "Active",
    };
    ProjectsService.updateProject(update).then((project) => {
      setSuccess(true);
      setTimeout(function () {
        setSuccess(false);
      }, 1500);
      setTimeout(function () {
        window.location.reload(false);
      }, 1000);
    });
  }

  let projectList = projects.map((project) => {
    return (
      <div
        className={
          project.status === "Active" ? "active-class" : "archive-class"
        }
        key={project.id}
      >
        <p className="project-name">{project.name}</p>
        <div className="buttons-settings">
          {project.status === "Active" && (
            <button onClick={(e) => handleArchive(e, project)}>Archive</button>
          )}
          {project.status === "Archive" && (
            <button onClick={(e) => handleActivate(e, project)}>
              Activate
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="settings-contain">
        {success && <div className="success">Success!</div>}
        <nav className="settings-nav-contain">
          <ul className="settings-nav">
            <li>
              <NavLink className="nav-link" to="/settings/personal">
                Personal
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/organization">
                Organization
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/team">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="settings-changes">
          <h2 className="header-settings">Projects</h2>
          {projectList}
        </section>
      </div>
    </>
  );
}
