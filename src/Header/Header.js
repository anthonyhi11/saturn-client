import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import OrganizationsApiService from "../services/organizations-service";
import TokenService from "../services/token-services";

export default function Header() {
  let history = useHistory();
  let [organizationName, setOrganizationName] = useState(null);

  useEffect(() => {
    OrganizationsApiService.getOrganization().then((org) => {
      setOrganizationName(org.name);
    });
  }, []);

  return (
    <header className="header">
      <img
        src={`${process.env.PUBLIC_URL}/images/saturn-icon.svg`}
        className="saturn-icon"
        alt="saturn-icon"
      ></img>
      <h1 className="hero-org" onClick={(e) => history.push("/main")}>
        {organizationName}
      </h1>

      <p
        className="logout-button"
        onClick={(e) => {
          TokenService.clearAuthToken();
          history.push("/");
        }}
      >
        Logout
      </p>
      {history.location.pathname.includes("settings") && (
        <p
          className="settings-button"
          onClick={(e) => {
            TokenService.clearAuthToken();
            history.push("/");
          }}
        >
          Logout
        </p>
      )}
      {!history.location.pathname.includes("settings") && (
        <p
          className="settings-button"
          onClick={(e) => history.push("/settings/personal")}
        >
          Settings
        </p>
      )}
    </header>
  );
}
