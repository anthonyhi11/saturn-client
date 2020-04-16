import React, { createContext, useState } from "react";
import Data from "../DATA";

let ProjectContext = createContext([{}, () => {}]);

const ProjectProvider = (props) => {
  const [state, setState] = useState({ Data });

  return (
    <ProjectContext.Provider value={[state, setState]}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
