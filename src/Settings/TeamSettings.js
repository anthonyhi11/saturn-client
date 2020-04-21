import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import UsersService from "../services/users-service";

export default function TeamSettings() {
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
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

  let team = users.map((member) => {
    return (
      <tr className="table-row-team" key={member.id}>
        <td>
          {member.first_name} {member.last_name}
        </td>
        <td>{member.role}</td>
        <td>{member.email}</td>
        <td className="buttons-settings">
          <button onClick={(e) => handleShowDelete(e, member.id)}>
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Header />
      <div className="settings-contain">
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
          <h2 className="header-settings">Team</h2>
          <table className="team-table">
            <thead>
              <tr className="team-table-header">
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{team}</tbody>
          </table>
        </section>
      </div>
    </>
  );
}
