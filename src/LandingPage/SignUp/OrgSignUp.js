import React from "react";
import "./OrgSignUp.css";
import { useHistory } from "react-router-dom";

export default function OrgSignUp(props) {
  let history = useHistory();

  function handleCancel() {
    props.handleCancel();
  }

  return (
    <div className="modal-container">
      <div className="create-org-div">
        <h2>Tell us more about your team!</h2>
        <p>
          Fill out the below form. An admin account associated to your email
          will be automatically created for the organization.
        </p>
        <form className="org-form">
          <input
            type="text"
            id="org-name"
            name="org-name"
            placeholder="Organization Name"
            required
          />
          <select defaultValue="Organization Size" id="org-type">
            <option defaultValue="" disabled hidden>
              Organization Size
            </option>
            <option value="Small">Small (2-4 devs)</option>
            <option value="Medium">Medium (5-8 devs)</option>
            <option value="Large">Large (9-13 devs)</option>
            <option value="Enterprise">Enterprise (14+ devs)</option>
          </select>
          <input
            type="text"
            id="org-industry"
            name="org-industry"
            placeholder="Industry"
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
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
            Create Organization Account
          </button>
          <button
            className="buttons"
            type="reset"
            onClick={e => handleCancel(e)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
