import React from "react";
import "./MoreInfo.css";

export default function MoreInfo(props) {
  return (
    <div className="modal-container-moreinfo">
      <div className="moreInfo-body">
        <div className="more-info-content">
          <h2>WHAT IS SATURN?</h2>
          <p className="moreInfo-p">
            Saturn is a project management tool for remote software development
            teams. Working on a software project remotely can increase the
            difficulty of keeping track of feature requests and/or bugs. The
            typical use case of this application would be a small team of 2-4
            developers working remotely. I plan on using Saturn to work on open
            source projects with other junior developers as I continue my job
            search.
          </p>
          <h2 className="how-do-i">HOW DO I USE IT?</h2>
          <div className="how-to-p">
            <ul>
              <li className="how-to-p-p">
                <span className="title-span">1. Create an organization</span>{" "}
                Share the passcode found in organization settings with your team
                and have them create their own accounts. As an admin, you can
                make changes to the organization, team, and projects.
              </li>
              <li className="how-to-p-p">
                <span className="title-span">
                  {" "}
                  2. Create a project (Admin only)
                </span>
              </li>
              <li className="how-to-p-p">
                <span className="title-span">3. Add Stories </span> Create a
                story, assign it to a developer. Get your team to work move
                stories through the kanban and push out new features!
              </li>
            </ul>
          </div>
          <h2 id="any-questions">QUESTIONS?</h2>
          <p className="drop-a-line">
            <a href="mailto:antdavhill@gmail.com">Drop us a line!</a>
          </p>
          <div
            className="button-more-info"
            onClick={(e) => props.handleCancel(e)}
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
}
