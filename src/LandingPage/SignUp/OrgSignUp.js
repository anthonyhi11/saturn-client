import React, { useState } from "react";
import "./OrgSignUp.css";
import { useHistory } from "react-router-dom";
import SignupService from "../../services/signup-service";
import LoginService from "../../services/login-service";
import TokenService from "../../services/token-services";

export default function OrgSignUp(props) {
  let history = useHistory();
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(false);

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
          setSuccess(true);
          setTimeout(function () {
            history.push("/main");
          }, 2000);
        });
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }

  return (
    <div className="modal-container">
      {success && (
        <div className="success">
          Success! Taking you to the main page! Click{" "}
          <span onClick={(e) => history.push("/main")}>here</span> if not
          re-directed in 30 seconds...{" "}
        </div>
      )}
      <div className="create-org-div">
        <div>{error && <p className="error-alert">{error}</p>}</div>
        <h2>Tell us more about your team!</h2>
        <p>
          Fill out the below form. An admin account associated to your email
          will be automatically created for the organization.
        </p>
        <div>
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
              Create Organization
            </button>
            <p className="cancel-click" onClick={(e) => handleCancel(e)}>
              Cancel
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
