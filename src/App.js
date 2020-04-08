import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MoreInfo from "./LandingPage/MoreInfo/MoreInfo";
import MainPage from "./MainPage/MainPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import { ProjectContext } from "./ProjectContext/ProjectContext";
import IssuePage from "./ProjectPage/issuePage/IssuePage";
import PersonalSettings from "./Settings/PersonalSettings";
import OrgSettings from "./Settings/OrgSettings";
import TeamSettings from "./Settings/TeamSettings";
import ProjectSettings from "./Settings/ProjectSettings";
import "./Settings/Settings.css";

function App() {
  let [state] = useContext(ProjectContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/learn">
          <MoreInfo />
        </Route>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route
          exact
          path="/projects/:project_id"
          render={(routeProps) => (
            <ProjectPage
              project={state.Data.projects.find(
                (project) =>
                  project.id.toString() === routeProps.match.params.project_id
              )}
              issues={state.Data.issues.filter(
                (issue) =>
                  issue.projectId.toString() ===
                  routeProps.match.params.project_id
              )}
              route={routeProps}
            />
          )}
        />
        <Route
          exact
          path="/issue/:issue_id"
          render={(routeProps) => (
            <IssuePage
              issue={state.Data.issues.find(
                (issue) =>
                  issue.id.toString() === routeProps.match.params.issue_id
              )}
              route={routeProps}
            />
          )}
        />
        <Route exact path="/settings/personal" component={PersonalSettings} />
        <Route exact path="/settings/organization" component={OrgSettings} />
        <Route exact path="/settings/team" component={TeamSettings} />
        <Route exact path="/settings/projects" component={ProjectSettings} />
      </Switch>
    </Router>
  );
}

export default App;
