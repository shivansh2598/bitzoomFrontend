import React, { Component } from "react";
import axios from "axios";
import { baseIp } from "../../config";
import auth from "../../Components/Jsx/auth";

class Feedback extends Component {
  constructor(props) {
    super();
  }
  submit = () => {
    axios
      .post(
        `${baseIp}/main/feedback`,
        {
          name: this.name.value,
          branch: this.branch.value,
          suggestion: this.suggestion.value,
          email: this.email.value,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert(response.data.msg);
      });
  };

  logout = () => {
    auth.logout(() => {
      localStorage.setItem("token", null);
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <span className="container">
        <div className="container">
          <button
            type="button"
            className="btn btn-info btn-lg"
            data-toggle="modal"
            data-target="#myModal"
          >
            @feedback
          </button>
          <button
            className="btn btn-danger btn-lg"
            style={{ marginLeft: "10px" }}
            onClick={this.logout}
          >
            log out
          </button>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 style={{ marginRight: "320px" }} className="modal-title">
                    Feedback Box
                  </h4>
                </div>

                <div className="modal-body">
                  <h4 style={{ fontWeight: "bold" }}>
                    We would love to listen your suggestions and feedbacks
                  </h4>
                  <legend>Name</legend>
                  <input
                    type="string"
                    placeholder="Your name"
                    style={{
                      textAlign: "center",
                      width: "300px",
                      borderRadius: "9999em",
                      fontSize: "20px",
                    }}
                    ref={(ref) => {
                      this.name = ref;
                    }}
                  />
                  <legend>Branch</legend>
                  <input
                    type="string"
                    placeholder="Your branch"
                    style={{
                      textAlign: "center",
                      width: "300px",
                      borderRadius: "9999em",
                      fontSize: "20px",
                    }}
                    ref={(ref) => {
                      this.branch = ref;
                    }}
                  />
                  <legend>Email</legend>
                  <input
                    type="string"
                    placeholder="Optional"
                    style={{
                      textAlign: "center",
                      width: "300px",
                      borderRadius: "9999em",
                      fontSize: "20px",
                    }}
                    ref={(ref) => {
                      this.email = ref;
                    }}
                  />
                  <legend>Suggestion</legend>
                  <input
                    type="string"
                    placeholder="Your suggestion"
                    style={{
                      textAlign: "center",
                      width: "500px",
                      height: "50px",
                      borderRadius: "9999em",
                      fontSize: "20px",
                    }}
                    ref={(ref) => {
                      this.suggestion = ref;
                    }}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    onClick={() => {
                      this.submit();
                    }}
                    data-dismiss="modal"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default Feedback;
