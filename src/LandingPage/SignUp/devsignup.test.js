import React from "react";
import ReactDOM from "react-dom";
import DevSignUp from "./DevSignUp";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DevSignUp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
