import React, { useContext } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import { ProjectContext } from "../ProjectContext/ProjectContext";

export default function ProjectSettings() {
  let [state, setState] = useContext(ProjectContext);

  function handleArchive(e, id) {
    let newData = { ...state.Data };
    let project = newData.projects.find((project) => project.id === id);
    project.archive = true;
    project.status = "Archived";
    setState({ Data: newData });
  }

  function handleActivate(e, id) {
    let newData = { ...state.Data };
    let project = newData.projects.find((project) => project.id === id);
    project.archive = false;
    project.status = "Active";
    setState({ Data: newData });
  }

  let projects = state.Data.projects.map((project) => {
    return (
      <div className="team-member" key={project.id}>
        <p>{project.name}</p>
        <p>{project.status}</p>
        <div className="buttons-settings">
          <button onClick={(e) => handleArchive(e, project.id)}>Archive</button>
          <button onClick={(e) => handleActivate(e, project.id)}>
            Activate
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
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
        <h2>Make changes to your projects</h2>
        {projects}
        {/* <div className="team-member">
          <p>Project 1</p>
          <p>Date Started</p>
          <p>Date Completed</p>
          <div className="buttons-settings">
            <button>Archive</button>
            <button>Activate</button>
          </div>
        </div>
        <div className="team-member">
          <p>Project 2</p>
          <p>Date Started</p>
          <p>Date Completed</p>
          <div className="buttons-settings">
            <button>Archive</button>
            <button>Activate</button>
          </div>
        </div>
        <div className="team-member">
          <p>Project 3</p>
          <p>Date Started</p>
          <p>Date Completed</p>
          <div className="buttons-settings">
            <button>Archive</button>
            <button>Activate</button>
          </div>
        </div> */}
      </section>
    </>
  );
}
