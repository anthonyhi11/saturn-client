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
        <tr
          key={currentStory.id}
          onClick={(e) => history.push(`/story/${currentStory.id}`)}
        >
          <td>{currentStory.id}</td>
          <td>{currentStory.title}</td>
          <td>{currentStory.user_id}</td>
        </tr>
      );
    });

  return (
    <div>
      <Header />
      <h1 className="issue-table-h1" onClick={(e) => history.goBack()}>
        {props.routeProps.match.params.stage} Stories
      </h1>
      <table className="issue-table">
        <thead>
          <tr className="table-row">
            <th>Issue ID</th>
            <th>Title</th>
            <th>Assigned to</th>
          </tr>
        </thead>
        <tbody>{currentStories}</tbody>
      </table>
      <button onClick={(e) => history.goBack()}>Go Back</button>
    </div>
  );
}
