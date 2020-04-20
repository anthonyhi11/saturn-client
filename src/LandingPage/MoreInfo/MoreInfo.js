import React from "react";
import "./MoreInfo.css";
import { useHistory } from "react-router-dom";

export default function MoreInfo(props) {
  let history = useHistory();

  return (
    <div className="moreInfo-body">
      <h2>What is Saturn?</h2>
      <p className="moreInfo-p">
        Saturn is a project management tool for remote software development
        teams. Anyone who has worked on a software project knows the difficulty
        of keeping track of feature requests and bugs. When you add in other
        developers to the mix, the problems increase... I thought of this
        project while being socially distanced and wanting to work on projects
        with other junior developers to hone our skills while we began our job
        search. With Saturn, we are able to create an organization, invite other
        developers to it, and begin to collaborate on the features and bugs of
        the projects you start developing. Saturn, from afar, appears to have
        one large ring. However, when viewed with a high-powered telescope, many
        rings come into focus. The same can be said about any remote team...
        though you are physically distant, when documentation is easily
        accessible, teams can become unified and operate with excellence. (The
        metaphor may be weak... but it's an excuse to use a cool Saturn
        illustration, and who doesn't love space?)
      </p>
      <h2 className="how-do-i">How do I use it?</h2>
      <div className="how-to-p">
        <p className="how-to-p-p">
          1. If you want to start a organization: create an organization account and get your organization passcode from the settings page.
        </p>
        <p className="how-to-p-p">
          2. Share that with any developers you want to join the team and have them create Developer accounts with the passcode. 
        </p>
        <p className="how-to-p-p">
          3. Create your first project with the "Create Project" button on the main page (Admin only).
        </p>
        <p className="how-to-p-p">
          4. Go into the project and start adding features or bugs. You can add comments to issues by clicking into the issue. Assign them to devs and get to work!
        </p>
        <p className="how-to-p-p">
          5. As an admin, you can make changes to the organization, team, and projects. Delete issues if you want as well. </p>
      </div>
      <h2 className="any-questions">Any Questions?</h2>
      <p>
        Drop us a{" "}
        <a href="mailto:antdavhill@gmail.com?Subject=Questions%20about%20Saturn...">
          line!
        </a>
      </p>
      <button className="button-more-info" onClick={(e) => history.go(-1)}>
        Back
      </button>
    </div>
  );
}
