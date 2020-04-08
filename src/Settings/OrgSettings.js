import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

export default function OrgSettings() {
  return (
    <>
      <Header />
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
        <h2>Make changes to Organization</h2>
        <form className="settings-form">
          <input
            type="text"
            name="org-name"
            id="org-name"
            placeholder="Organization Name"
          />
          <input
            type="text"
            name="org-passcode"
            id="org-passcode"
            placeholder="Organization Passcode"
          />
        </form>
        <button className="settings-change-button" type="submit">Make Changes</button>
      </section>
    </>
  );
}
