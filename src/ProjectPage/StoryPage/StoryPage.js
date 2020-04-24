import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./IssuePage.css";
import { useMediaQuery } from "react-responsive";
import StorySideBar from "./StorySideBar";
import CommentsSection from "./CommentsSection";
import UsersService from "../../services/users-service";
import ProjectsService from "../../services/projects-service";
import StoriesService from "../../services/stories-service";
import { useHistory } from "react-router-dom";
import UserInfo from "../../MainPage/UserInfo/UserInfo";
import EditStoryForm from "./EditStoryForm/EditStoryForm";

export default function StoryPage(props) {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  let [showEdit, setShowEdit] = useState(false);
  let [story, setStory] = useState({});
  let history = useHistory();
  let [users, setUsers] = useState([]);
  let [projects, setProjects] = useState([]);
  let [user, setUser] = useState([]);

  const isMobile = useMediaQuery({
    query: "(max-device-width: 1100px)",
  });

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

  function handleShowEdit(e) {
    setShowEdit(true);
  }
  function handleCancel(e) {
    setShowDeleteWarning(false);
    setShowEdit(false);
  }

  function deleteStory(e) {
    e.preventDefault();
    let storyId = story.id;
    StoriesService.deleteStory(storyId).then(() => {
      history.goBack(1);
    });
  }
  return (
    <div className="story-page-div">
      <Header />
      <img
        src="/images/arrow1.png"
        className="back-arrow"
        alt="arrow"
        role="button"
        onClick={(e) => history.goBack()}
      />
      {user.role === "Admin" && (
        <p className="edit-story" onClick={(e) => handleShowEdit(e)}>
          Edit
        </p>
      )}

      {showEdit && (
        <EditStoryForm
          story={story}
          handleCancel={handleCancel}
          setStory={setStory}
        />
      )}
      {showDeleteWarning && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            <button onClick={(e) => deleteStory(e)}>Yes, Delete!</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="issue-page-container">
        {!isMobile && <UserInfo />}

        <div className="issuePage-div">
          {!isMobile && (
            <p className="story-page-goback" onClick={(e) => history.goBack()}>
              &larr; Back to Kanban
            </p>
          )}
          <h1 className="story-title-header">{title}</h1>{" "}
          <div className="story-content">
            <h2 className="story-desc-header">Description</h2>
            <p className="story-desc">{story_desc}</p>
          </div>
          {user.role === "Admin" && (
            <div className="delete-story" onClick={(e) => handleShowDelete(e)}>
              Delete Story
            </div>
          )}
          <CommentsSection story={id} users={users} key={id} />
        </div>
        <StorySideBar
          story={story}
          project={projects.find((project) => project.id === story.project_id)}
          handleSetStory={(e) => handleSetStory(e)}
          user={users.find((user) => user.id === story.user_id)}
        />
      </div>
    </div>
  );
}

StoryPage.defaultProps = {
  story: JSON.parse(localStorage.getItem("story")),
};
