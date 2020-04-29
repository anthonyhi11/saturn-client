import React from "react";
import ReactDOM from "react-dom";
import UserInfo from "./UserInfo";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: () => null,
}));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
