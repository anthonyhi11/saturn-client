import React, { useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import OrgSignUp from "./SignUp/OrgSignUp";
import DevSignUp from "./SignUp/DevSignUp";
import LogIn from "./LogIn/LogIn";

export default function LandingPage() {
  // eslint-disable-next-line
  const [orgFormShown, setOrgFormShown] = useState(false);
  // eslint-disable-next-line
  const [devFormShown, setDevFormShown] = useState(false);
  // eslint-disable-next-line
  const [logInShown, setLogInShown] = useState(false);

  function handleCancel() {
    setOrgFormShown(false);
    setDevFormShown(false);
    setLogInShown(false);
  }

  return (
    <div>
      {orgFormShown && <OrgSignUp handleCancel={handleCancel} />}
      {devFormShown && <DevSignUp handleCancel={handleCancel} />}
      {logInShown && <LogIn handleCancel={handleCancel} />}
      {/* <img
        className="hero-img"
        alt="Saturn Logo"
        src="./images/saturn.png"
      /> */}
      <h1>Saturn</h1>
      <h2>Who are you and why are you here?</h2>
      <div className="create-container">
        <div
          className="create-new-div new-org-div"
          onClick={() => setOrgFormShown(true)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/124/124635.svg"
            alt="spaceship"
            className="img"
          />
          <p className="createnew-div-p">Organization</p>
        </div>
        <p>or</p>
        <div
          className="create-new-div new-dev-div"
          onClick={() => setDevFormShown(true)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/2026/2026521.svg"
            alt="spaceperson"
            className="img"
          />
          <p className="createnew-div-p">Developer</p>
        </div>
      </div>
      <section className="landing-page-buttons">
        <Link to="/learn">
          <button>Learn More</button>
        </Link>
        <button onClick={() => setLogInShown(true)}>Log in</button>
      </section>
    </div>
  );
}
