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

  updateOrg(orgId, newInfo) {
    return fetch(`${config.API_ENDPOINT}/organizations/ ${orgId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
    });
  },
};

export default OrganizationsApiService;
