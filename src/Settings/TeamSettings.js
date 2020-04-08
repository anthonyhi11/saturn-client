import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import { ProjectContext } from "../ProjectContext/ProjectContext";

export default function TeamSettings() {
  let [state, setState] = useContext(ProjectContext);
  let [showDeleteWarning, setShowDeleteWarning] = useState(false);
  let [memberToDelete, setMemberToDelete] = useState(null);

  function deleteTeamMember(e) {
    console.log("deleted");
    let newData = { ...state.Data };
    newData.team = newData.team.filter(
      (member) => member.id !== memberToDelete
    );
    setState({ Data: newData });
    setShowDeleteWarning(false);
  }

  function handleShowDelete(e, id) {
    setShowDeleteWarning(true);
    setMemberToDelete(id);
  }
  function handleCancel(e) {
    setShowDeleteWarning(false);
  }

  let team = state.Data.team.map((member) => {
    return (
      <div className="team-member" key={member.id}>
        <p>{member.name}</p>
        <p>{member.role}</p>
        <p>{member.email}</p>
        <div className="buttons-settings">
          <button onClick={(e) => handleShowDelete(e, member.id)}>
            Remove from team
          </button>
          <button>Make Admin</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
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
        <h2>Make changes to your team</h2>
        {team}
      </section>
    </>
  );
}
