import React, { useState } from "react";
import "./LandingPage.css";
import { Link, useHistory } from "react-router-dom";
import OrgSignUp from "./SignUp/OrgSignUp";
import DevSignUp from "./SignUp/DevSignUp";
import LogIn from "./LogIn/LogIn";
import LoginService from "../services/login-service";
import TokenService from "../services/token-services";

export default function LandingPage() {
  let history = useHistory();
  const [orgFormShown, setOrgFormShown] = useState(false);
  const [devFormShown, setDevFormShown] = useState(false);
  const [logInShown, setLogInShown] = useState(false);
  const [authToken, setAuthToken] = useState(false);
  let [success, setSuccess] = useState();

  function handleCancel() {
    setOrgFormShown(false);
    setDevFormShown(false);
    setLogInShown(false);
  }

  function handleDemoClick(e) {
    let credentials = {
      email: "john@fakemail.com",
      password: "AAaa11!!",
    };
    LoginService.loginUser(credentials)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        setAuthToken(true);
        if (authToken === true) {
          setSuccess(true);
        }
      })
      .then(() => {
        setTimeout(function () {
          history.push("/main");
        }, 1200);
      });
  }
  return (
    <div
      className="main-content-landing"
      onClick={(event) => {
        if (event.target.className === "modal-container") {
          return handleCancel(event);
        }
      }}
    >
      {orgFormShown && <OrgSignUp handleCancel={handleCancel} />}
      {devFormShown && <DevSignUp handleCancel={handleCancel} />}
      {logInShown && <LogIn handleCancel={handleCancel} />}
      <h1 className="hero-title">Saturn</h1>
      {success && (
        <div className="success">
          Success! If not redirected, click here:{" "}
          <button onClick={(e) => history.push("/main")}>Click</button>
        </div>
      )}

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
        <button onClick={(e) => handleDemoClick(e)}>DEMO ACCOUNT</button>
      </section>
    </div>
  );
}
