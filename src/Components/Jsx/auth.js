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
        return  axios.get(`${baseIp}/verifytoken`, {
            headers: {
              "x-access-token": jwt,
            },
          })
        //   .then((response)=>{
        //     if (response.data.auth) {
        //       this.authenticated = true;
        //       return true;
        //     } else {
        //       this.authenticated = false;
        //       return false;
        //     }
        //   })
        // .catch ((error) => {
        // console.log(error);
        // this.authenticated = false;
        // return false;
        // })
    // }
  }
}

export default new Auth();
