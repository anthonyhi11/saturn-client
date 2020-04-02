import React from "react";
import Header from "../Header/Header";
import UserInfo from "./UserInfo/UserInfo";
import "./MainPage.css";
export default function MainPage() {
  return (
    <>
      <Header />
      <div className="mainpage-container">
        <UserInfo />
        <div className="projectcard-container">
          <h3 className="projects-h3">Projects</h3>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}
