import React, { useContext } from "react";
import rn from "random-number";
import "./AddProjectForm.css";
import { ProjectContext } from "../ProjectContext/ProjectContext";

export default function AddProjectForm(props) {
  let [state, setState] = useContext(ProjectContext);

  let options = {
    min: 4,
    max: 15,
    integer: true
  };

  function addNewProject(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const target = e.target.target.value;
    const newProject = {
      name: name,
      id: rn(options),
      date_created: new Date(),
      status: "Active",
      target: target
    };
    let newData = { ...state.Data };
    newData.projects.push(newProject);
    setState({ Data: newData });
    props.handleCancel(e);
  }
  return (
    <div className="add-project-form">
      <form onSubmit={e => addNewProject(e)}>
        <h2>Add New Project</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name of Project"
          required
        />
        <label htmlFor="target">Target Completion Date: </label>
        <input
          type="date"
          id="target"
          name="target"
          placeholder="Target Completion Date"
          required
        />
        <button type="submit">Add Project</button>
        <p className="cancel-p" onClick={e => props.handleCancel(e)}>
          Cancel
        </p>
      </form>
    </div>
  );
}
