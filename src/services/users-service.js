import config from "../config";
import TokenService from "./token-services";

const UsersService = {
  getUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getUsers() {
    return fetch(`${config.API_ENDPOINT}/users/all`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  updateUser(update) {
    return fetch(`${config.API_ENDPOINT}/users/personalsettings`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(update),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
      })
      .then(TokenService.clearAuthToken());
  },
};

export default UsersService;
