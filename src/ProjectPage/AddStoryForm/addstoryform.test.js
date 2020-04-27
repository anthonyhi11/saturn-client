import React from "react";
import ReactDOM from "react-dom";
import AddStoryForm from "./AddStoryForm";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddStoryForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
