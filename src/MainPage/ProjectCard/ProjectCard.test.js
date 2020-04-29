import React from "react";
import ReactDOM from "react-dom";
import ProjectCard from "./ProjectCard";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: () => null,
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProjectCard info={[]}></ProjectCard>, div);
  ReactDOM.unmountComponentAtNode(div);
});
