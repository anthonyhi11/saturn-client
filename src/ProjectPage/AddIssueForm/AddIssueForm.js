import React, { useContext } from "react";
import "./AddIssueForm.css";
import rn from "random-number";
import { ProjectContext } from "../../ProjectContext/ProjectContext";

export default function AddIssueForm(props) {
  let [state, setState] = useContext(ProjectContext);

  let options = {
    min: 1003,
    max: 5152,
    integer: true,
  };

  function handleAddIssue(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let stage = e.target.stage.value;
    let desc = e.target.desc.value;
    let dev = e.target.dev.value;

    let newIssue = {
      id: rn(options),
      projectId: props.project,
      title: title,
      stage: stage,
      desc: desc,
      dev: dev,
    };
    const newData = { ...state.Data };
    newData.issues.push(newIssue);
    setState({ Data: newData });
    props.handleCancel(e);
  }
  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={(e) => handleAddIssue(e)}>
        <h2>Add a new issue</h2>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Title"
        />
        <select
          defaultValue="Stage"
          id="stage"
          name="stage"
          className="select"
          required
        >
          <option defaultValue="Stage" disabled hidden>
            Stage
          </option>
          <option value="New">New</option>
          <option value="Working">Working</option>
          <option value="Blocked">Blocked</option>
          <option value="Done">Done</option>
        </select>
        <input
          type="text"
          id="dev"
          name="dev"
          placeholder="Developer Assigned"
        />
        <textarea
          type="text"
          id="desc"
          name="desc"
          placeholder="Full Description"
        />
        <button type="submit">Add Issue</button>
        <button
          className="cancel-add-form-button"
          type="reset"
          onClick={(e) => props.handleCancel(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
