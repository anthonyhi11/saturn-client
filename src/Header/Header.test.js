import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
    location: { pathname: "/something" },
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
