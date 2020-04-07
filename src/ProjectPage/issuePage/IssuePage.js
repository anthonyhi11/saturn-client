import React from "react";
import Header from "../../Header/Header";
import "./IssuePage.css";
import IssueSideBar from "./IssueSideBar";
import CommentsSection from "./CommentsSection";

export default function IssuePage(props) {
  let { id, stage, title, desc } = props.issue;
  return (
    <div>
      <Header />
      <div className="issue-page-container">
        <IssueSideBar issue={props.issue} />
        <div className="issuePage-div">
          <h2>{title}</h2>
          <p>{stage}</p>
          <p>{desc}</p>
          <CommentsSection issue={id} /> {/* work through COMMENTS*/}
        </div>
      </div>
    </div>
  );
}
