import React, { Component } from "react";
// import axios from 'axios'
// import Post from './Post/Post'
import Semester from "./Semester";

class DisplayImg extends Component {
  constructor() {
    super();
    this.state = {
      check: 0,
      value: {},
    };
  }

  changestate = (response) => {
    this.setState({
      check: response,
    });
  };

  getvalue = (valuez) => {
    this.setState(
      {
        value: valuez,
      },
      () => {
        this.setState({
          check: 1,
        });
      }
    );
  };

  render() {
    const fyear = "First Year";
    if (this.state.check === 1)
      return (
        <div>
          <br />
          <Semester semester={this.state.value} function={this.changestate} />
        </div>
      );
    else {
      const value1 = {
        value1: 1,
        value2: 2,
      };
      const value2 = {
        value1: 3,
        value2: 4,
      };
      const value3 = {
        value1: 5,
        value2: 6,
      };
      const value4 = {
        value1: 7,
        value2: 8,
      };
      return (
        <div>
          <br />
          <h2 style={{ fontWeight: "bolder", color: "white" }}>
            Or go year wise...
          </h2>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.getvalue(value1);
                  }}
                  style={{
                    width: "90%",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "15px",
                  }}
                >
                  {fyear}
                </button>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.getvalue(value2);
                  }}
                  style={{
                    width: "90%",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "15px",
                  }}
                >
                  Second year
                </button>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.getvalue(value3);
                  }}
                  style={{
                    width: "90%",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "15px",
                  }}
                >
                  Third year
                </button>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.getvalue(value4);
                  }}
                  style={{
                    width: "90%",
                    height: "50px",
                    margin: "20px",
                    borderRadius: "15px",
                  }}
                >
                  Fourth year
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DisplayImg;
