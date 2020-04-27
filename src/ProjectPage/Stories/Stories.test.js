import React from "react";
import ReactDOM from "react-dom";
import Stories from "./Stories";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stories info={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
