import config from "../config";
import TokenService from "./token-services";

const CommentsService = {
  getComments(storyId) {
    return fetch(`${config.API_ENDPOINT}/comments/${storyId}`, {
      method: "GET",
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  addComment(storyId, newComment) {
    return fetch(`${config.API_ENDPOINT}/comments/${storyId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newComment),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default CommentsService;
