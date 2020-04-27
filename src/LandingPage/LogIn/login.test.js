import React from "react";
import ReactDOM from "react-dom";
import LogIn from "./LogIn";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LogIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});
