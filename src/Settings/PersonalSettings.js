import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import UsersService from "../services/users-service";
import LoginService from "../services/login-service";
import TokenService from "../services/token-services";

export default function PersonalSettings() {
  let [user, setUser] = useState([]);
  let [isSuccessful, setIsSuccessful] = useState(false);
  let history = useHistory();

  useEffect(() => {
    UsersService.getUser().then((user) => {
      setUser(user);
    });
  }, [isSuccessful]);

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
      LoginService.loginUser(credentials).then((res) => {
        TokenService.saveAuthToken(res.authToken);
        setIsSuccessful(true);
        setTimeout(function () {
          setIsSuccessful(false);
        }, 1800);
        setTimeout(function () {
          window.location.reload(false);
        }, 1500);
      });
    });
  }

  return (
    <>
      <Header />
      <img
        src="/images/arrow1.png"
        className="back-arrow-settings"
        alt="arrow"
        role="button"
        onClick={(e) => history.push('/main')}
      />
      <div className="settings-contain">
        <nav className="settings-nav-contain">
          <ul className="settings-nav">
            <li>
              <NavLink className="nav-link" to="/settings/personal">
                Personal
              </NavLink>
            </li>
            {user.role === "Admin" && (
              <li>
                <NavLink className="nav-link" to="/settings/organization">
                  Org
                </NavLink>
              </li>
            )}
            {user.role === "Admin" && (
              <li>
                <NavLink className="nav-link" to="/settings/team">
                  Team
                </NavLink>
              </li>
            )}
            {user.role === "Admin" && (
              <li>
                <NavLink className="nav-link" to="/settings/projects">
                  Projects
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <section className="settings-changes">
          <h2 className="header-settings">Personal</h2>
          <form
            className="settings-form"
            onSubmit={(e) => handlePersonalChanges(e)}
          >
            <input
              type="text"
              name="first_name"
              id="first_name"
              defaultValue={user.first_name}
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              id="last_name"
              defaultValue={user.last_name}
              placeholder="Last Name"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue={user.email}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password_confirm"
              id="password_confirm"
              placeholder="Confirm password"
              required
            />
            {user.id !== 1 && (
              <button className="settings-change-button" type="submit">
                Make Changes
              </button>
            )}
          </form>
          {isSuccessful && <div className="success">Success!</div>}
        </section>
      </div>
    </>
  );
}
