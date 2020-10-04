import React, { Component } from "react";
import axios from "axios";
import { baseIp } from "../../config";
import FirstPage from "./FirstPage";
import Authentication from "./Authentication";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      verified: false,
    };
  }

  changestate = (response) => {
    this.setState({
      verified: response,
    });
  };

  componentWillMount = () => {
    var tokenz = localStorage.getItem("token");
    if (tokenz === "null" || tokenz === "" || tokenz === "undefined") {
      this.setState({
        verified: false,
      });
    } else {
      axios
        .get(`${baseIp}/verifytoken`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          if (response.data.auth) {
            this.setState({
              verified: true,
            });
          } else {
            this.setState({
              verified: false,
            });
          }
        });
    }
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Authentication func={this.changestate} />
        </Route>
        <Route path="/main" exact>
          <FirstPage func={this.changestate} />
        </Route>
        <Route>
          <div>
            <h1>404 Error</h1>
          </div>
        </Route>
      </Switch>
    );
  }
}
export default Main;
