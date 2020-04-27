import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LandingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
