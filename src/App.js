import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import MoreInfo from "./LandingPage/MoreInfo/MoreInfo";
import MainPage from "./MainPage/MainPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import { ProjectContext } from "./ProjectContext/ProjectContext";
import StoryPage from "./ProjectPage/StoryPage/StoryPage";
import PersonalSettings from "./Settings/PersonalSettings";
import OrgSettings from "./Settings/OrgSettings";
import TeamSettings from "./Settings/TeamSettings";
import ProjectSettings from "./Settings/ProjectSettings";
import StagePageMobile from "./StagePageMobile/StagePageMobile";
import "./Settings/Settings.css";
import "./App.css";

function App() {
  let [state] = useContext(ProjectContext);
  let [projects, setProjects] = useState([]);
  let [stories, setStories] = useState([]);

  function setProjectsState(projects) {
    //this is to pass to main page so it only triggers the call when you log in
    setProjects(projects);
  }

  function setStoriesState(stories) {
    setStories(stories);
  }

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
          <MainPage setProjectsState={(e) => setProjectsState(e)} />
        </Route>
        <Route
          exact
          path="/projects/:project_id"
          render={(routeProps) => (
            <ProjectPage
              project={projects.find(
                (project) =>
                  project.id.toString() === routeProps.match.params.project_id
              )}
              setStoriesState={(e) => setStoriesState(e)}
              route={routeProps}
            />
          )}
        />
        <Route
          exact
          path="/story/:story_id"
          render={(routeProps) => (
            <StoryPage
              story={stories.find(
                (story) =>
                  story.id.toString() === routeProps.match.params.story_id
              )}
              route={routeProps}
            />
          )}
        />
        <Route exact path="/settings/personal" component={PersonalSettings} />
        <Route exact path="/settings/organization" component={OrgSettings} />
        <Route exact path="/settings/team" component={TeamSettings} />
        <Route exact path="/settings/projects" component={ProjectSettings} />
        <Route
          exact
          path="/projects/:project_id/:stage"
          render={(routeProps) => (
            <StagePageMobile
              issues={state.Data.issues.filter(
                (issue) =>
                  issue.projectId.toString() ===
                  routeProps.match.params.project_id
              )}
              routeProps={routeProps}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
