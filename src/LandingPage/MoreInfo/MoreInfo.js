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
            teams. Anyone who has worked on a software project knows the
            difficulty of keeping track of feature requests and bugs. I thought
            of this project while being socially distanced and wanting to work
            on projects with other junior developers to hour our skills while we
            begin our job search.
          </p>
          <h2 className="how-do-i">HOW DO I USE IT?</h2>
          <div className="how-to-p">
            <ul>
              <li className="how-to-p-p">
                <span className="title-span">1. Create an organization</span>{" "}
                Share the passcode with your team and have them create their own
                accounts As an admin, you can make changes to the organization,
                team, and projects. Delete issues and archive projects along the
                way.
              </li>
              <li className="how-to-p-p">
                <span className="title-span">
                  {" "}
                  2. Create a project (Admin only)
                </span>
              </li>
              <li className="how-to-p-p">
                <span className="title-span">3. Add features </span> You can add
                comments to issues by clicking into the issues. Assign them to
                devs and get to work!
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
