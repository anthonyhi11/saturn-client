import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./StagePageMobile.css";
import { useHistory } from "react-router-dom";
import StoriesService from "../services/stories-service";
import StagesService from "../services/stages-service";

export default function StagePageMobile(props) {
  let history = useHistory();
  let [stories, setStories] = useState([]);
  let [stages, setStages] = useState([]);

  useEffect(() => {
    StagesService.getStages().then((stages) => {
      setStages(stages);
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    StoriesService.getStories(props.routeProps.match.params.project_id).then(
      (stories) => {
        setStories(stories);
      }
    );
    //eslint-disable-next-line
  }, []);

  let currentStage = stages.find(
    (stage) => stage.name === props.routeProps.match.params.stage
  );

  if (currentStage === undefined) {
    return (
      <div>
        <p>Loading... Click here to take you there :)</p>
        <button onClick={(e) => history.push("/main")}>Fix it</button>
      </div>
    );
  }

  let currentStories = stories
    .filter((story) => story.stage_id === currentStage.id)
    .map((currentStory) => {
      return (
        <div
          className="story-mobile-card"
          key={currentStory.id}
          onClick={(e) => history.push(`/story/${currentStory.id}`)}
        >
          <p>{currentStory.title}</p>
          <p>#{currentStory.id}</p>
        </div>
      );
    });

  return (
    <div>
      <Header />
      <div className="issue-table-h1" onClick={(e) => history.goBack()}>
        <h2>{props.routeProps.match.params.stage} Stories</h2>
      </div>
      <div className="issue-table">{currentStories}</div>
      <img
        src="/images/arrow1.png"
        className="back-arrow"
        alt="arrow"
        role="button"
        onClick={(e) => history.goBack()}
      />
    </div>
  );
}
