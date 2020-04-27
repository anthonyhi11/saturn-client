import React from "react";
import ReactDOM from "react-dom";
import ProjectPage from "./ProjectPage";
import header from "../Header/Header";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ProjectPage project={[]}>
      <header />
    </ProjectPage>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
