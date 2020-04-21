import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./IssuePage.css";
import StorySideBar from "./StorySideBar";
import CommentsSection from "./CommentsSection";
import UsersService from "../../services/users-service";
import ProjectsService from "../../services/projects-service";
import StoriesService from "../../services/stories-service";
import { useHistory } from "react-router-dom";
import UserInfo from "../../MainPage/UserInfo/UserInfo";

export default function StoryPage(props) {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  let [story, setStory] = useState({});
  let history = useHistory();
  let [users, setUsers] = useState([]);
  let [projects, setProjects] = useState([]);
  let [user, setUser] = useState([]);

  useEffect(() => {
    setStory(props.story);
    //eslint-disable-next-line
  }, [story]);

  useEffect(() => {
    UsersService.getUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    ProjectsService.getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  useEffect(() => {
    UsersService.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  localStorage.setItem("story", JSON.stringify(story));

  let { id, title, story_desc } = story;

  function handleSetStory(story) {
    setStory(story);
  }

  function handleShowDelete(e) {
    setShowDeleteWarning(true);
  }
  function handleCancel(e) {
    setShowDeleteWarning(false);
  }

  function deleteIssue(e) {
    e.preventDefault();
    let storyId = story.id;
    StoriesService.deleteStory(storyId).then(() => {
      history.goBack(1);
    });
  }

  return (
    <div>
      <Header />
      {showDeleteWarning && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            <button onClick={(e) => deleteIssue(e)}>Yes, Delete!</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="issue-page-container">
        <UserInfo />
        <div className="issuePage-div">
          <h1 className="story-title-header">{title}</h1>{" "}
          <div className="story-content">
            <h2 className="story-desc-header">Description</h2>
            <p className="story-desc">{story_desc}</p>
          </div>
          <CommentsSection story={id} users={users} key={id} />
        </div>
        <StorySideBar
          story={story}
          project={projects.find((project) => project.id === story.project_id)}
          handleSetStory={(e) => handleSetStory(e)}
          user={users.find((user) => user.id === story.user_id)}
        />
        {user.role === "Admin" && (
          <p className="delete-issue" onClick={(e) => handleShowDelete(e)}>
            x
          </p>
        )}
      </div>
    </div>
  );
}

StoryPage.defaultProps = {
  story: JSON.parse(localStorage.getItem("story")),
};
