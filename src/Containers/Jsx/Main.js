import React, { Component } from "react";
// import axios from "axios";
// import { baseIp } from "../../config";
import FirstPage from "./FirstPage";
import SignUp from "./signup";
import Login from "./login"
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../../Components/Jsx/protected.route"

class Main extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/app" exact component = {FirstPage} />
        <Route path="/login" exact component = {Login} />
        <Route path="/" exact component = {SignUp} />
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
