import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
// import OrganizationsApiService from '../services/'

export default function Header() {
  let history = useHistory();

  // let Organization;
  //use effect? OrganizationsApiService.getOrganization()
  return (
    <header className="header">
      <h1 className="hero-org" onClick={(e) => history.push("/main")}>
        Organization Name
      </h1>

      <p className="logout-button" onClick={(e) => history.push("/")}>
        Logout
      </p>
    </header>
  );
}
