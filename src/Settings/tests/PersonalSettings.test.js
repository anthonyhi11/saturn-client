import React from "react";
import ReactDOM from "react-dom";
import PersonalSettings from "../PersonalSettings";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  NavLink: () => "nav-link",
}));

jest.mock("../../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PersonalSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
