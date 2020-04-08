//component for main page to show user
// their info. Simple component drawing info from
// database on fetch calls from MainPage
import React from "react";
import "./UserInfo.css";
import { Link } from "react-router-dom";

export default function UserInfo(props) {
  return (
    <div className="user-info-container">
      <h2 className="user-name">Anthony Hill</h2>
      <p className="title">Developer</p>
      <img
        className="profile-pic"
        src="https://image.flaticon.com/icons/svg/2026/2026521.svg"
        alt="profile pic"
      />

      <Link to="/settings/personal">
        <button className="edit-profile-button">Edit Profile</button>
      </Link>
    </div>
  );
}
