import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import OrganizationsService from "../services/organizations-service";

export default function OrgSettings() {
  let [organization, setOrganization] = useState([]);
  let [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    OrganizationsService.getOrganization().then((org) => {
      setOrganization(org);
    });
  }, [isSuccess]);

  function handleOrganizationChanges(e) {
    e.preventDefault();
    console.log("clicked");
    let name = e.target.org_name.value;
    let newInfo = {
      name: name,
    };
    OrganizationsService.updateOrg(organization.id, newInfo).then((org) => {
      setIsSuccess(true);
      setTimeout(function () {
        setIsSuccess(false);
      }, 1200);

      if (name !== organization.name)
        setTimeout(function () {
          window.location.reload(false);
        }, 1100);
    });
  }
  return (
    <>
      <Header />
      <div className="settings-contain">
        <nav className="settings-nav-contain">
          <ul className="settings-nav">
            <li>
              <NavLink className="nav-link" to="/settings/personal">
                Personal
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/organization">
                Organization
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/team">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/settings/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="settings-changes">
          {isSuccess && <div className="success">Success!</div>}

          <h2 className="header-settings">Organization</h2>
          <form
            className="settings-form"
            onSubmit={(e) => handleOrganizationChanges(e)}
          >
            <label htmlFor="org_name">Organization Name</label>
            <input
              type="text"
              name="org_name"
              id="org_name"
              defaultValue={organization.name}
              placeholder="Organization Name"
            />
            <div className="passcode-div">
              <p className="passcode">Organization Passcode:</p>
              <p className="passcode">{organization.org_passcode}</p>
            </div>
            <button className="settings-change-button" type="submit">
              Change
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
