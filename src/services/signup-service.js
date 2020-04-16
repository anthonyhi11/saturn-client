import config from "../config";
//implement signing up dev and signing up admin accounts... both should automatically log in
const SignupService = {
  signupDev(signupAttempt) {
    return fetch(`${config.API_ENDPOINT}/users/devsignup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupAttempt),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  signupOrg(signupAttempt) {
    return fetch(`${config.API_ENDPOINT}/users/adminsignup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupAttempt),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default SignupService;
