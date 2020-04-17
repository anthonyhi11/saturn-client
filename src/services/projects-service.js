import config from "../config";
import TokenService from "./token-services";

const ProjectsService = {
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addProject(project) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(project),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updateProject(body) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(body),
    });
  },
};

export default ProjectsService;
