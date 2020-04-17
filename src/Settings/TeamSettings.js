import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import UsersService from "../services/users-service";

export default function TeamSettings() {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  // let [showAdmin, setShowAdmin] = useState(false);
  // let [showRevoke, setShowRevoke] = useState(false);
  let [memberToDelete, setMemberToDelete] = useState(null);
  let [users, setUsers] = useState([]);
  let [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    UsersService.getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function deleteTeamMember(e) {
    UsersService.deleteUser(memberToDelete).then(() => {
      setIsSuccessful(true);
      setTimeout(function () {
        setIsSuccessful(false);
      }, 2000);
      setTimeout(function () {
        window.location.reload(false);
      }, 1800);
    });
    setShowDeleteWarning(false);
  }

  function handleShowDelete(e, id) {
    setShowDeleteWarning(true);
    setMemberToDelete(id);
  }
  function handleCancel(e) {
    setShowDeleteWarning(false);
  }

  // function handleShowAdmin(e, id) {
  //   setShowAdmin(true);
  //   setMemberToDelete(id);
  // }

  // function handleShowRevoke(e, id) {
  //   setShowRevoke(true);
  //   setMemberToDelete(id);
  // }

  let team = users.map((member) => {
    return (
      <div className="team-member" key={member.id}>
        <p>
          {member.first_name} {member.last_name}
        </p>
        <p>{member.role}</p>
        <p>{member.email}</p>
        <div className="buttons-settings">
          <button onClick={(e) => handleShowDelete(e, member.id)}>
            Remove from team
          </button>
          {/* {member.role === "Developer" && (
            <button onClick={(e) => handleShowAdmin(e, member.id)}>
              Make Admin
            </button>
          )}
          {member.role === "Admin" && (
            <button onClick={(e) => handleShowRevoke(e, member.id)}>
              Revoke Admin
            </button>
          )} */}
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      {isSuccessful && <div className="success">Deleted</div>}
      {showDeleteWarning && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            <button onClick={(e) => deleteTeamMember(e)}>Yes, Remove!</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )}

      {/* {showAdmin && (
        <div className="delete-modal">
          <h2>Are you sure?</h2>
          <div className="delete-button-div">
            <button onClick={(e) => deleteTeamMember(e)}>Make Admin!</button>
            <button onClick={(e) => handleCancel(e)}>Cancel</button>
          </div>
        </div>
      )} */}
      <nav className="settings-nav-contain">
        <ul className="settings-nav">
          <li>
            <NavLink className="nav-link" to="/settings/personal">
              Personal
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/settings/organization">
              Organization
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/settings/team">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/settings/projects">
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="settings-changes">
        <h2>Make changes to your team</h2>
        {team}
      </section>
    </>
  );
}
