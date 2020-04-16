import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import OrganizationsApiService from "../services/organizations-service";

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
      <h1 className="hero-org" onClick={(e) => history.push("/main")}>
        {organizationName}
      </h1>

      <p className="logout-button" onClick={(e) => history.push("/")}>
        Logout
      </p>
    </header>
  );
}
