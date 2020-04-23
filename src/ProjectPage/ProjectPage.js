import React, { useState, useEffect } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import Stage from "./Stage/Stage";
import AddStoryForm from "./AddStoryForm/AddStoryForm";
import { useMediaQuery } from "react-responsive";
import StageMobile from "./StageMobile/StageMobile";
import { useHistory } from "react-router-dom";
import StoriesService from "../services/stories-service";
import StagesService from "../services/stages-service";
import UserInfo from "../MainPage/UserInfo/UserInfo";

export default function ProjectPage(props) {
  let history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1100px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1100px)",
  });
  let [showAddStory, setShowAddStory] = useState(false);
  let [project] = useState(props.project);
  let [stories, setStories] = useState([]);
  let [stages, setStages] = useState([]);

  function handleCancel(e) {
    setShowAddStory(false);
  }

  //try to handle changing the state
  function changeStoriesState(stories) {
    setStories(stories);
  }

  //saves project information in case of reload
  localStorage.setItem("project", JSON.stringify(project));

  useEffect(() => {
    StoriesService.getStories(props.project.id).then((stories) => {
      setStories(stories);
      props.setStoriesState(stories);
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    StagesService.getStages().then((stages) => {
      setStages(stages);
    });
  }, []);

  let stageList = stages.map((stage) => {
    return (
      <Stage
        name={stage.name}
        id={stage.id}
        key={stage.id}
        project={project}
        stories={stories}
        changeStoriesState={(e) => changeStoriesState(e)}
      />
    );
  });

  let stageMobileList = stages.map((stage) => {
    return (
      <StageMobile
        name={stage.name}
        project={props.project}
        id={stage.id}
        key={stage.id}
      />
    );
  });

  return (
    <>
      <Header />
      <button
        className="issue-add-mobile-button"
        onClick={() => setShowAddStory(true)}
      >
        Add
      </button>

      {showAddStory && (
        <AddStoryForm
          project={props.project.id}
          handleCancel={(e) => handleCancel(e)}
        />
      )}
      <div className="project-page-container">
        {isDesktopOrLaptop && <UserInfo />}

        <div className="project-container">
          <div className="project-info">
            <h2>{project.name || localStorage.getItem("project")}</h2>

            <button
              className="issue-add-button"
              onClick={() => setShowAddStory(true)}
            >
              + Add Story
            </button>
            <p
              className="project-page-goback"
              onClick={(e) => history.goBack()}
            >
              &larr; Back to Projects
            </p>
          </div>
          {isDesktopOrLaptop && (
            <section className="stages-container">{stageList}</section>
          )}
          {isMobile && (
            <div className="stages-mobile-container">{stageMobileList}</div>
          )}
        </div>
      </div>
    </>
  );
}

ProjectPage.defaultProps = {
  project: JSON.parse(localStorage.getItem("project")),
  issues: [],
};
