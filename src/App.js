import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MoreInfo from "./LandingPage/MoreInfo/MoreInfo";
import MainPage from "./MainPage/MainPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import StoryPage from "./ProjectPage/StoryPage/StoryPage";
import PersonalSettings from "./Settings/PersonalSettings";
import OrgSettings from "./Settings/OrgSettings";
import TeamSettings from "./Settings/TeamSettings";
import ProjectSettings from "./Settings/ProjectSettings";
import StagePageMobile from "./StagePageMobile/StagePageMobile";
import "./Settings/Settings.css";
import "./App.css";
import PrivateRoute from "./services/private-route";
import TokenService from "./services/token-services";

function App() {
  let [projects, setProjects] = useState([]);
  let [stories, setStories] = useState([]);

  function setProjectsState(projects) {
    //this is to pass to main page so it only triggers the call when you log in
    setProjects(projects);
  }

  function setStoriesState(stories) {
    setStories(stories);
  }

  let isAuthenticated = TokenService.hasAuthToken();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/learn">
          <MoreInfo />
        </Route>

        <Route
          exact
          path="/main"
          render={() =>
            isAuthenticated ? (
              <MainPage setProjectsState={(e) => setProjectsState(e)} />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )
          }
        />

        <Route
          exact
          path="/projects/:project_id"
          render={(routeProps) =>
            isAuthenticated ? (
              <ProjectPage
                project={projects.find(
                  (project) =>
                    project.id.toString() === routeProps.match.params.project_id
                )}
                setStoriesState={(e) => setStoriesState(e)}
                route={routeProps}
              />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )
          }
        />
        <Route
          exact
          path="/story/:story_id"
          render={(routeProps) =>
            isAuthenticated ? (
              <StoryPage
                story={stories.find(
                  (story) =>
                    story.id.toString() === routeProps.match.params.story_id
                )}
                route={routeProps}
              />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )
          }
        />
        <PrivateRoute
          exact
          path="/settings/personal"
          component={PersonalSettings}
        />
        <PrivateRoute
          exact
          path="/settings/organization"
          component={OrgSettings}
        />
        <PrivateRoute exact path="/settings/team" component={TeamSettings} />
        <PrivateRoute
          exact
          path="/settings/projects"
          component={ProjectSettings}
        />
        <Route
          exact
          path="/projects/:project_id/:stage"
          render={(routeProps) =>
            isAuthenticated ? (
              <StagePageMobile routeProps={routeProps} />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                }}
              />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
