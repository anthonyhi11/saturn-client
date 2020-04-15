import React, { useState } from "react";
import "./LogIn.css";
import { useHistory } from "react-router-dom";
import TokenService from "../../services/token-services";
import LoginService from "../../services/login-service";

export default function LogIn(props) {
  let history = useHistory();
  let [error, setError] = useState(null);

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
        history.push("/main");
      })
      .catch((res) => {
        setError(res.error);
      });
  }

  return (
    <div className="login-div">
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
