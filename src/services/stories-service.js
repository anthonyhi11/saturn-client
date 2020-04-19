import config from "../config";
import TokenService from "./token-services";

const StoriesService = {
  getStories(projectId) {
    return fetch(`${config.API_ENDPOINT}/stories/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  addStory(projectId, newStory) {
    return fetch(`${config.API_ENDPOINT}/stories/${projectId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newStory),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updateStory(storyId, newStory) {
    return fetch(`${config.API_ENDPOINT}/stories/${storyId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newStory),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteStory(storyId) {
    return fetch(`${config.API_ENDPOINT}/stories/${storyId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
    });
  },
};

export default StoriesService;
