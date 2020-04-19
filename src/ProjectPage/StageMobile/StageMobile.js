import React, { useState, useEffect } from "react";
import "./StageMobile.css";
import { useHistory } from "react-router-dom";
import StoriesService from "../../services/stories-service";

export default function StageMobile(props) {
  let history = useHistory();
  let [stories, setStories] = useState([]);

  useEffect(() => {
    StoriesService.getStories(props.project.id).then((stories) => {
      setStories(stories);
    });
    //eslint-disable-next-line
  }, []);

  let currentStories = stories.filter((story) => story.stage_id === props.id);
  let length = currentStories.length;

  return (
    <tr
      className="table-row"
      onClick={(e) =>
        history.push(`/projects/${props.project.id}/${props.name}`)
      }
    >
      <td>{props.name}</td>
      <td>{length}</td>
    </tr>
  );
}
