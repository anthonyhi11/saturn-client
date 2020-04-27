import React from "react";
import ReactDOM from "react-dom";
import EditStoryForm from "./EditStoryForm";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditStoryForm story={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
