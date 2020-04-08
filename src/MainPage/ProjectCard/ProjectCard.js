import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <Link to={`/projects/${props.info.id}`} className="link-project">
      <div className="project-card">
        <h2 className="project-card-p">{props.info.name}</h2>
        <p className="project-card-p">{props.info.status}</p>
      </div>
    </Link>
  );
}
