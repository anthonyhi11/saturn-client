import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stories from "../Stories/Stories";
import StoriesService from "../../services/stories-service";
import "./Stage.css";
import UsersService from "../../services/users-service";

export default function Stage(props) {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    UsersService.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  let storiesList = props.stories
    .filter((story) => story.stage_id === props.id)
    .map((story) => {
      return (
        <Link className="issue-links" key={story.id} to={`/story/${story.id}`}>
          <Stories
            info={story}
            key={story.id}
            users={users.find((user) => user.id === story.user_id)}
          />
        </Link>
      );
    });

  //making the database touch
  function handleChangeStory(storyId, changes) {
    StoriesService.updateStory(storyId, changes).then((stories) => {
      return StoriesService.getStories(stories.project_id).then((stories) => {
        props.changeStoriesState(stories);
      });
    });
  }

  function drop(e) {
    const target = e.currentTarget.id; //sets the id of the container
    const draggedIssue = e.dataTransfer.getData("story"); //gets the id of the dragged issue
    const newChanges = {
      //sets the newChanges to send to database
      stage_id: target,
    };
    handleChangeStory(draggedIssue, newChanges); //calls the fetch
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div
      className="stage-container"
      id={props.id}
      onDrop={(e) => drop(e)}
      onDragOver={(e) => allowDrop(e)}
    >
      <div className="stage-container-container">
        <div className="stage-header">
          <p className="stage-name">{props.name}</p>
        </div>
        <div className="stages-box">{storiesList}</div>
      </div>
    </div>
  );
}
