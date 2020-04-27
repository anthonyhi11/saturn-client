import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Comment comment={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
