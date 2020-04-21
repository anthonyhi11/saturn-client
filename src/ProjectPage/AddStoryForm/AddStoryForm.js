import React, { useState, useEffect } from "react";
import "./AddIssueForm.css";
import StoriesService from "../../services/stories-service";
import StagesService from "../../services/stages-service";
import UsersService from "../../services/users-service";

export default function AddStoryForm(props) {
  let [stages, setStages] = useState([]);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    UsersService.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  useEffect(() => {
    StagesService.getStages().then((stages) => {
      setStages(stages);
    });
  }, []);

  let stageChoices = stages.map((stage) => {
    return (
      <option value={stage.id} key={stage.id}>
        {stage.name}
      </option>
    );
  });

  let userChoices = users.map((user) => {
    return (
      <option value={user.id} key={user.id}>
        {user.first_name}
      </option>
    );
  });

  function handleAddStory(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let stage = e.target.stage.value;
    let desc = e.target.desc.value;
    let user_id = e.target.dev.value;
    let projectId = props.project;

    let newStory = {
      title: title,
      stage_id: stage,
      story_desc: desc,
      user_id: user_id,
    };

    StoriesService.addStory(projectId, newStory).then(() => {
      props.handleCancel(e);
      window.location.reload(false);
    });
  }

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={(e) => handleAddStory(e)}>
        <h2>Add a new story</h2>
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
          {stageChoices}
        </select>

        <select
          defaultValue="Assigned to:"
          id="dev"
          name="dev"
          className="select"
          required
        >
          <option defaultValue="Assigned to:" disabled hidden>
            Assigned to:
          </option>
          {userChoices}
        </select>
        <textarea
          type="text"
          id="desc"
          name="desc"
          placeholder="Full Description"
        />
        <button type="submit">Add Story</button>
        <img
          alt="cancel"
          src="../images/vector1.png"
          className="cancel-add-form-button"
          onClick={(e) => props.handleCancel(e)}
        />
      </form>
    </div>
  );
}
