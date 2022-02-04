import React, { createContext } from "react";

// TODO Figure out if there is where we data fetch?
let ProjectContext = createContext([{}, () => {}]);

const ProjectProvider = (props) => {
  return <ProjectContext.Provider>{props.children}</ProjectContext.Provider>;
};

export { ProjectContext, ProjectProvider };
