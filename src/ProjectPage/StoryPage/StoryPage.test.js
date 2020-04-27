import React from "react";
import ReactDOM from "react-dom";
import StoryPage from "./StoryPage";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../../Header/Header", () => "header");
jest.mock("../../MainPage/UserInfo/UserInfo", () => "user-info");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StoryPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
