import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupService from "../../services/signup-service";
import TokenService from "../../services/token-services";
import LoginService from "../../services/login-service";

export default function DevSignUp(props) {
  let history = useHistory();
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(false);

  function handleDevSignup(e) {
    e.preventDefault();
    let passcode = e.target.passcode.value;
    let first_name = e.target.first_name.value;
    let last_name = e.target.last_name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password_confirm = e.target.password_confirm.value;
    let signupAttempt = {
      passcode,
      first_name,
      last_name,
      email,
      password,
      password_confirm,
    };
    SignupService.signupDev(signupAttempt)
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
        <h2>Tell us more about your yourself</h2>
        <p>
          Fill out the below form. You'll need your organization passcode. Reach
          out to your team lead to get it!
        </p>
        <div>
          <form className="org-form" onSubmit={(e) => handleDevSignup(e)}>
            <input
              type="text"
              id="passcode"
              name="passcode"
              placeholder="Organization Passcode"
              required
            />
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
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
              Create Account
            </button>
            <p className="cancel-click" onClick={(e) => props.handleCancel(e)}>
              Cancel
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
