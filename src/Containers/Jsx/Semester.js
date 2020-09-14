import React, { Component } from "react";
import "../Css/Semester.css";
import FetchSubjectList from "../Jsx/FetchSubjects"

class Semester extends Component {
  constructor(props) {
    super();
    this.state = {
      check: 0,
      sem: 0,
    };
  }

  changemystate = (value1) => {
    this.setState(
      {
        sem: value1,
      },
      () => {
        this.setState({
          check: 1,
        });
      }
    );
  };

  changemystateagain = (sth) => {
    this.setState({
      check: sth,
    });
  };

  render() {
    if (this.state.check === 0) {
      var semA = this.props.semester.value1;
      var semB = this.props.semester.value2;

      return (
        <div>
          <br />
          <h2 style={{ fontWeight: "bolder", color: "white" }}>
            Choose the semester
          </h2>
          <button
            className="btn btn-danger bttnee"
            onClick={() => {
              this.changemystate(semA);
            }}
          >
            {semA} semester
          </button>
          <button
            className="btn btn-danger bttnee"
            onClick={() => {
              this.changemystate(semB);
            }}
          >
            {semB} semester
          </button>
          <br />
          <button
            className="btn btn-danger bttnee"
            onClick={() => {
              this.props.function(0);
            }}
          >
            Go Back
          </button>
        </div>
      );
    } else {
      return (
        <div>
            <FetchSubjectList sem = {this.state.sem} />
          <button
            className="btn btn-danger bttnee"
            onClick={() => {
              this.changemystateagain(0);
            }}
          >
            Go Back
          </button>
        </div>
      );
    } 
  }
}

export default Semester;
