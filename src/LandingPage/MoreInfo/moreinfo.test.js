import React from "react";
import ReactDOM from "react-dom";
import MoreInfo from "./MoreInfo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MoreInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
