import React from "react";
import "./LogIn.css";
import { useHistory } from "react-router-dom";

export default function LogIn(props) {
  let history = useHistory();

  return (
    <div className="login-div">
      <h2>Let's get to work!</h2>
      <form className="login-form">
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

        <button
          class="login-buttons"
          type="submit"
          onClick={e => history.push("/main")}
        >
          Log in
        </button>
        <button
          class="login-buttons"
          type="reset"
          onClick={e => props.handleCancel(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
