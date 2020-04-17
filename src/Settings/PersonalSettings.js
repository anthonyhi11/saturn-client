import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import UsersService from "../services/users-service";
import LoginService from "../services/login-service";
import TokenService from "../services/token-services";

export default function PersonalSettings() {
  let [isSuccessful, setIsSuccessful] = useState(false);
  function handlePersonalChanges(e) {
    e.preventDefault();
    console.log("ran");
    let first_name = e.target.first_name.value;
    let last_name = e.target.last_name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password_confirm = e.target.password_confirm.value;

    let personalChanges = {
      first_name,
      last_name,
      email,
      password,
      password_confirm,
    };

    UsersService.updateUser(personalChanges).then((user) => {
      let credentials = {
        email,
        password,
      };
      console.log("success");
      LoginService.loginUser(credentials).then((res) => {
        TokenService.saveAuthToken(res.authToken);
        setIsSuccessful(true);
      });
    });
  }

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
        <form
          className="settings-form"
          onSubmit={(e) => handlePersonalChanges(e)}
        >
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
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
            name="password_confirm"
            id="password_confirm"
            placeholder="Confirm password"
          />
          <button className="settings-change-button" type="submit">
            Make Changes
          </button>
        </form>
        {isSuccessful && <p>Success!</p>}
      </section>
    </>
  );
}
