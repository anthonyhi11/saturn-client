import React from "react";
import "./AddProjectForm.css";
// import { ProjectContext } from "../../ProjectContext/ProjectContext";
import ProjectsService from "../../services/projects-service";

export default function AddProjectForm(props) {
  function addNewProject(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const newProject = {
      name: name,
      status: "Active",
    };
    ProjectsService.addProject(newProject).then((project) => {
      props.handleAddProject(project);
      props.handleCancel(e);
    });
  }
  return (
    <div className="add-project-form">
      <form onSubmit={(e) => addNewProject(e)}>
        <h2>NEW PROJECT</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name of Project"
          required
        />
        <button type="submit">Add Project</button>
        <p className="cancel-p" onClick={(e) => props.handleCancel(e)}>
          x
        </p>
      </form>
    </div>
  );
}
