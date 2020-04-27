import React from "react";
import ReactDOM from "react-dom";
import Stage from "./Stage";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stage stories={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
