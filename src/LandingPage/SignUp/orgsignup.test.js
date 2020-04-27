import React from "react";
import ReactDOM from "react-dom";
import OrgSignUp from "./OrgSignUp";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OrgSignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
