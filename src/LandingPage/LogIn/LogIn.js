import React, { useState } from "react";
import "./LogIn.css";
import { useHistory } from "react-router-dom";
import TokenService from "../../services/token-services";
import LoginService from "../../services/login-service";

export default function LogIn(props) {
  let history = useHistory();
  let [error, setError] = useState(null);
  let [success, setSuccess] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    let credentials = {
      email,
      password,
    };
    LoginService.loginUser(credentials)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        setSuccess(true);
        setTimeout(function () {
          history.push("/main");
        }, 1200);
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }

  return (
    <div className="login-div">
      {success && (
        <div className="success">
          Success! If not redirected,
          <button onClick={history.push("/main")}>Click Here</button>
        </div>
      )}
      <h2>Let's get to work!</h2>
      <div className="error">
        {error && <p className="error-alert">{error}</p>}
      </div>
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
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

        <button className="login-buttons" type="submit">
          Log in
        </button>
        <button
          className="login-buttons"
          type="reset"
          onClick={(e) => props.handleCancel(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
