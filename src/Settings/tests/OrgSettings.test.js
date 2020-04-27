import React from "react";
import ReactDOM from "react-dom";
import OrgSettings from "../OrgSettings";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  NavLink: () => "nav-link",
}));

jest.mock("../../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OrgSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
