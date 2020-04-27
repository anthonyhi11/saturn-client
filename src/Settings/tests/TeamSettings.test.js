import React from "react";
import ReactDOM from "react-dom";
import TeamSettings from "../TeamSettings";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  NavLink: () => "nav-link",
}));

jest.mock("../../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TeamSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
