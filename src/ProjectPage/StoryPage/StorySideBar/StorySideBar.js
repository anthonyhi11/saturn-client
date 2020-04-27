import React, { useEffect, useState } from "react";
import "./IssueSideBar.css";
import StoriesService from "../../../services/stories-service";
import StagesService from "../../../services/stages-service";

export default function StorySideBar(props) {
  let [stages, setStages] = useState([]);

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

  function handleStageChange(e, id) {
    let changes = parseInt(e.target.value);
    let newInfo = {
      stage_id: changes,
    }; //used to pass the stage change to StoryPage and update the state
    StoriesService.updateStory(id, newInfo).then((stories) => {
      return StoriesService.getStories(stories.project_id).then((stories) => {
        props.handleSetStory(stories);
      });
    });
  }

  return (
    <div className="issue-side-bar">
      <select
        id="current_stage"
        className="current_stage"
        defaultValue="Change Stage"
        onChange={(e) => handleStageChange(e, props.story.id)}
      >
        <option value="Change Stage" hidden>
          Change Stage &nbsp; &#9660;
        </option>
        {stageChoices}
      </select>
      <h2 className="issue-id">#{props.story.id}</h2>
      <h3 className="assigned">Assignee</h3>
      <p className="assigned-user">
        {" "}
        {props.user.first_name || "Pending"} {props.user.last_name || "Pending"}
      </p>
    </div>
  );
}

StorySideBar.defaultProps = {
  story: "Pending",
  user: "Pending",
  project: "pending",
};
