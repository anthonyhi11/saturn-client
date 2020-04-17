import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./IssuePage.css";
import StorySideBar from "./StorySideBar";
import CommentsSection from "./CommentsSection";
// import { ProjectContext } from "../../ProjectContext/ProjectContext";
// import { useHistory } from "react-router-dom";
import UsersService from "../../services/users-service";
import ProjectsService from "../../services/projects-service";

export default function StoryPage(props) {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  // let [state, setState] = useContext(ProjectContext);
  // let history = useHistory();
  let [story, setStory] = useState({});
  let [users, setUsers] = useState([]);
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    setStory(props.story);
    //eslint-disable-next-line
  }, [story]);

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

  // function deleteIssue(e) {
  //   e.preventDefault();
  //   let newData = { ...state.Data };
  //   newData.issues = newData.issues.filter((issue) => issue.id !== id);
  //   setState({ Data: newData });
  //   history.goBack(1);
  // }

  return (
    <div>
      <Header />
      {showDeleteWarning && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            {/* <button onClick={(e) => deleteIssue(e)}>Yes, Delete!</button> */}
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )}
      <div className="issue-page-container">
        <StorySideBar
          story={story}
          project={projects.find((project) => project.id === story.project_id)}
          handleSetStory={(e) => handleSetStory(e)}
          user={users.find((user) => user.id === story.user_id)}
        />
        <div className="issuePage-div">
          <h2>{title}</h2>{" "}
          <p className="delete-issue" onClick={(e) => handleShowDelete(e)}>
            x
          </p>
          <p>{story_desc}</p>
          <CommentsSection story={id} users={users} key={id} />
        </div>
        <button
          onClick={(e) => handleShowDelete(e)}
          className="delete-issue-button"
        >
          Delete Issue
        </button>
      </div>
    </div>
  );
}

StoryPage.defaultProps = {
  story: JSON.parse(localStorage.getItem("story")),
};
