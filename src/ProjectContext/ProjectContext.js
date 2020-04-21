import React, { createContext } from "react";

let ProjectContext = createContext([{}, () => {}]);

const ProjectProvider = (props) => {
  return <ProjectContext.Provider>{props.children}</ProjectContext.Provider>;
};

export { ProjectContext, ProjectProvider };
