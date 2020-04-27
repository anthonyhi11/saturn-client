import React from "react";
import ReactDOM from "react-dom";
import StageMobile from "./StageMobile";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StageMobile project={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
