import React, { useState } from "react";
import "./OrgSignUp.css";
import { useHistory } from "react-router-dom";
import SignupService from "../../services/signup-service";
import LoginService from "../../services/login-service";
import TokenService from "../../services/token-services";

export default function OrgSignUp(props) {
  let history = useHistory();
  let [error, setError] = useState(null);

  function handleCancel() {
    props.handleCancel();
  }

  function handleOrgSignup(e) {
    e.preventDefault();
    let org_name = e.target.org_name.value;
    let first_name = e.target.first_name.value;
    let last_name = e.target.last_name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password_confirm = e.target.password_confirm.value;

    let signupAttempt = {
      org_name,
      first_name,
      last_name,
      email,
      password,
      password_confirm,
    };

    SignupService.signupOrg(signupAttempt)
      .then((res) => {
        let email = res.email;
        let loginAttempt = {
          email,
          password,
        };
        LoginService.loginUser(loginAttempt).then((res) => {
          TokenService.saveAuthToken(res.authToken);
          history.push("/main");
        });
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }

  return (
    <div className="modal-container">
      <div className="create-org-div">
        <div>{error && <p className="error-alert">{error}</p>}</div>
        <h2>Tell us more about your team!</h2>
        <p>
          Fill out the below form. An admin account associated to your email
          will be automatically created for the organization.
        </p>
        <form className="org-form" onSubmit={(e) => handleOrgSignup(e)}>
          <input
            type="text"
            id="org_name"
            name="org_name"
            placeholder="Organization Name"
            required
          />

          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First name"
            required
          />
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
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
            placeholder="Confirm Password"
          />

          <button className="buttons" type="submit">
            Create Organization Account
          </button>
          <button
            className="buttons"
            type="reset"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
