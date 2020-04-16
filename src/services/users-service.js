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
};

export default UsersService;
