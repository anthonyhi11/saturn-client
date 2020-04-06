import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MoreInfo from "./LandingPage/MoreInfo/MoreInfo";
import MainPage from "./MainPage/MainPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import { ProjectContext } from "./ProjectContext/ProjectContext";
import IssuePage from "./ProjectPage/issuePage/IssuePage";

function App() {
  //eslint-disable-next-line
  let [state, setState] = useContext(ProjectContext);

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
        {console.log("state from app", state)}
        <Route
          path="/projects/:project_id"
          render={routeProps => (
            <ProjectPage
              project={state.Data.projects.find(
                project =>
                  project.id.toString() === routeProps.match.params.project_id
              )}
              issues={state.Data.issues.filter(
                issue =>
                  issue.projectId.toString() ===
                  routeProps.match.params.project_id
              )}
              route={routeProps}
            />
          )}
        />
        <Route
          path="/issue/:issue_id"
          render={routeProps => (
            <IssuePage
              issue={state.Data.issues.find(
                issue =>
                  issue.id.toString() === routeProps.match.params.issue_id
              )}
              route={routeProps}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
