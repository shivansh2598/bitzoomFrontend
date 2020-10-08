import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import { CircleToBlockLoading } from "react-loadingg";

class ProtectedRoute extends React.Component {
  state = {
    isAuthenticated: "loading",
  };

  componentDidMount = () => {
    auth
      .isAuthenticated()
      .then((Response) => {
        Response
          ? this.setState({ isAuthenticated: "success" })
          : this.setState({ isAuthenticated: "failed" });
      })
      .catch((err) => {
        this.setState({ isAuthenticated: "failed" });
      });
  };

  render() {
    const Component = this.props.component;
    const rest = this.props.rest;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (this.state.isAuthenticated === "loading") {
            return <CircleToBlockLoading size="large" {...props} />;
          } else if (this.state.isAuthenticated === "success") {
            return <Component {...props} />;
          } else {
            auth.logout(() => {
              localStorage.setItem("token", null);
            });
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    );
  }
}

export default ProtectedRoute;
