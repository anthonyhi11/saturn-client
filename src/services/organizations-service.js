import config from "../config";
import TokenService from "./token-services";

const OrganizationsApiService = {
  getOrganization() {
    return fetch(`${config.API_ENDPOINT}/organizations`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default OrganizationsApiService;
