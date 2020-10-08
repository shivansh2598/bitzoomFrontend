const axios = require("axios");
const { baseIp } = require("../../config");
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    const jwt = localStorage.getItem("token");
    return axios.get(`${baseIp}/auth/verifytoken`, {
      headers: {
        "x-access-token": jwt,
      },
    });
  }
}

export default new Auth();
