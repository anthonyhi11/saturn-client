import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MoreInfo from "./LandingPage/MoreInfo/MoreInfo";
import MainPage from "./MainPage/MainPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/learn">
          <MoreInfo />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
