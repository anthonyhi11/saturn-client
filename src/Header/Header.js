import React from "react";
import { useHistory } from "react-router-dom";
import './Header.css';

export default function Header() {
  let history = useHistory();
  return (
    <header>
      <h1 className="hero-org">Organization Name</h1>
      <p className="logout-button" onClick={e => history.push("/")}>
        Logout
      </p>
    </header>
  );
}
