import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";

export default function PersonalSettings() {
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
        <h2>Make changes to your personal account</h2>
        <form className="settings-form">
          <input
            type="text"
            name="display-name"
            id="display-name"
            placeholder="Display Name"
          />
          <input type="text" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="password-confirm"
            id="password-confirm"
            placeholder="Confirm password"
          />
        </form>
        <button className="settings-change-button" type="submit">
          Make Changes
        </button>
      </section>
    </>
  );
}
