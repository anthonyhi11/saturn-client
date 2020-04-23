import React, { useState } from "react";
import "./LandingPage.css";
import { useHistory } from "react-router-dom";
import OrgSignUp from "./SignUp/OrgSignUp";
import DevSignUp from "./SignUp/DevSignUp";
import LogIn from "./LogIn/LogIn";
import LoginService from "../services/login-service";
import TokenService from "../services/token-services";
import MoreInfo from "./MoreInfo/MoreInfo";

export default function LandingPage() {
  let history = useHistory();
  const [orgFormShown, setOrgFormShown] = useState(false);
  const [devFormShown, setDevFormShown] = useState(false);
  const [logInShown, setLogInShown] = useState(false);
  const [moreInfoShown, setMoreInfoShown] = useState(false);
  let [success, setSuccess] = useState(false);

  function handleCancel() {
    setOrgFormShown(false);
    setDevFormShown(false);
    setLogInShown(false);
    setMoreInfoShown(false);
  }

  function handleDemoClick(e) {
    setSuccess(true);
    let credentials = {
      email: "john@fakemail.com",
      password: "AAaa11!!",
    };

    LoginService.loginUser(credentials)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
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
      {moreInfoShown && <MoreInfo handleCancel={handleCancel} />}
      {orgFormShown && <OrgSignUp handleCancel={handleCancel} />}
      {devFormShown && <DevSignUp handleCancel={handleCancel} />}
      {logInShown && <LogIn handleCancel={handleCancel} />}
      <img className="hero-logo" src="./images/saturn-logo.svg" alt="logo" />
      {success && <div className="success">Success! Loading...</div>}

      <h2>WHO ARE YOU?</h2>
      <div className="create-container">
        <div
          className="create-new-div new-org-div"
          onClick={() => setOrgFormShown(true)}
        >
          <img src="./images/ellipse1.png" alt="spaceship" className="img" />
          <p className="createnew-div-p">Organization</p>
        </div>
        <p className="createnew-div-p">OR</p>
        <div
          className="create-new-div new-dev-div"
          onClick={() => setDevFormShown(true)}
        >
          <img src="./images/polygon1.png" alt="spaceperson" className="img" />
          <p className="createnew-div-p">Developer</p>
        </div>
      </div>
      <section className="landing-page-buttons">
        <button className="login-button" onClick={() => setLogInShown(true)}>
          Login
        </button>
        <button className="login-button" onClick={(e) => handleDemoClick(e)}>
          Demo
        </button>

        <p className="learnMore" onClick={(e) => setMoreInfoShown(true)}>
          Learn More
        </p>
      </section>
    </div>
  );
}
