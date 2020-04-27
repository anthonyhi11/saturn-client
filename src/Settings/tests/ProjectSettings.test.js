import React from "react";
import ReactDOM from "react-dom";
import ProjectSettings from "../ProjectSettings";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  NavLink: () => "nav-link",
}));

jest.mock("../../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProjectSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
