import React from "react";
import ReactDOM from "react-dom";
import StagePageMobile from "./StagePageMobile";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../Header/Header", () => "header");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StagePageMobile routeProps={{ match: { params: "" } }} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
