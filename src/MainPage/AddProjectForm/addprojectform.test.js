import React from "react";
import ReactDOM from "react-dom";
import AddProjectForm from "./AddProjectForm";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddProjectForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
