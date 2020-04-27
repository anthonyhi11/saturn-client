import React from "react";
import ReactDOM from "react-dom";
import StorySideBar from "./StorySideBar";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StorySideBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
