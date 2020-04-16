import config from "../config";
import TokenService from "./token-services";

const StagesService = {
  getStages() {
    return fetch(`${config.API_ENDPOINT}/stages`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateStages(newStage) {
    return fetch(`${config.API_ENDPOINT}/stages`, {
      method: "PATCH",
      header: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newStage),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default StagesService;
