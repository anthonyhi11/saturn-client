//component for main page to show user
// their info. Simple component drawing info from
// database on fetch calls from MainPage
import React, { useState, useEffect } from "react";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import UsersService from "../../services/users-service";

export default function UserInfo(props) {
  let [userName, setUserName] = useState(null);
  let [userRole, setUserRole] = useState(null);

  useEffect(() => {
    UsersService.getUser().then((user) => {
      setUserName(user.first_name);
      setUserRole(user.role);
    });
  }, []);

  return (
    <div className="user-info-container">
      <h2 className="user-name">{userName}</h2>
      <p className="title">{userRole}</p>
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
