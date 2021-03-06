import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import StoriesService from "../../../services/stories-service";
import StagesService from "../../../services/stages-service";
import UsersService from "../../../services/users-service";

export default function EditStoryForm(props) {
  let history = useHistory();
  let [stages, setStages] = useState([]);
  let [users, setUsers] = useState([]);
  let [error, setError] = useState(null);

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

  function handleEditStory(e) {
    e.preventDefault();
    let title = e.target.title.value;
    let stage = e.target.stage.value;
    let desc = e.target.desc.value;
    let user_id = e.target.dev.value;

    if (stage === "Stage" || user_id === "Assigned to:") {
      setError({
        message: "Please change Stage and/or Assigned to valid input",
      });
      return;
    }

    let updatedStory = {
      title: title,
      stage_id: stage,
      story_desc: desc,
      user_id: user_id,
    };

    StoriesService.updateStory(props.story.id, updatedStory).then((story) => {
      props.handleCancel(e);
      props.setStory(story);
      history.goBack();
    });
  }

  return (
    <div className="add-form-container">
      {error !== null && <p>{error.message}</p>}
      <form className="add-form" onSubmit={(e) => handleEditStory(e)}>
        <h2>Edit Story</h2>
        <input
          type="text"
          id="title"
          name="title"
          required
          defaultValue={props.story.title}
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
          defaultValue={props.story.story_desc}
          placeholder="Full Description"
        />
        <button type="submit">Edit Story</button>
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
