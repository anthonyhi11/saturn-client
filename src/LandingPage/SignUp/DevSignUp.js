import React from "react";
import { useHistory } from "react-router-dom";

export default function DevSignUp(props) {
  let history = useHistory();
  return (
    <div className="modal-container">
      <div className="create-org-div">
        <h2>Tell us more about your yourself</h2>
        <p>
          Fill out the below form. A developer account will be created. You'll
          need your organization passcode. Reach out to your team lead to get
          it!
        </p>
        <form className="org-form">
          <input
            type="text"
            id="org-name"
            name="org-name"
            placeholder="Organization Passcode"
            required
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name (what your team will see)"
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
            name="password-confirm"
            id="password-confirm"
            placeholder="Confirm Password"
          />

          <button
            className="buttons"
            type="submit"
            onClick={e => history.push("/main")}
          >
            Create Developer Account
          </button>
          <button
            className="buttons"
            type="reset"
            onClick={e => props.handleCancel(e)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
