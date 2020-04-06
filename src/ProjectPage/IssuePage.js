import React from "react";
import Header from "../Header/Header";
import "./IssuePage.css";

export default function IssuePage(props) {
  let { dev, id, stage, title, desc } = props.issue;
  return (
    <div>
      <Header />
      <div className="issuePage-div">
        <h2>Issue #{id}</h2>
        <p>assigned to: {dev}</p>
        <p>{title}</p>
        <p>{stage}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
