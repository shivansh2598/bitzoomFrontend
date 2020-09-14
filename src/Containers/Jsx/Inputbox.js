import React, { Component } from "react";
import { baseIp } from "../../config";
import axios from "axios";
import { getFileSize , handleUploadImage}  from "../../helper.js"
// import { Input } from "react-bootstrap";

class Inputbox extends Component {
  constructor() {
    super();
    this.state = {
      sem: 1,
      branch: "Cse",
      subjectLst: [],
      subject: "English",
      year: 2014,
    };
  }

  componentDidUpdate() {
    axios
      .get(`${baseIp}/subjects/sem_branch`, {
        params: {
          semester: this.state.sem,
          branch: this.state.branch,
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (
          response.data.data.length !== this.state.subjectLst.length ||
          (response.data.data.length !== 0 &&
            response.data.data[0].Subject !== this.state.subjectLst[0].Subject)
        ) {
          this.setState({
            subjectLst: response.data.data,
          });
        }
      })
      .catch((err) => {
        alert("something went wrong, try refresh");
      });
  }

  componentDidMount() {
    axios
      .get(`${baseIp}/subjects/sem_branch`, {
        params: {
          semester: this.state.sem,
          branch: this.state.branch,
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.setState({
          subjectLst: response.data.data,
        });
      })
      .catch((err) => {
        alert("something went wrong, try refresh");
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const branchLst = [
      { value: "Cse" },
      { value: "Ece" },
      { value: "Eee" },
      { value: "Mech" },
    ];
    const semesterLst = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
    ];
    const yearLst = [
      { value: 2014 },
      { value: 2015 },
      { value: 2016 },
      { value: 2017 },
      { value: 2018 },
      { value: 2019 },
      { value: 2020 },
      { value: 2021 },
    ];
    return (
      <div>
        <form onSubmit={(event)=>{handleUploadImage(event, this.uploadInput, this.state.branch, this.state.sem, this.state.subject, this.state.year)}}>
          <div>
            <input
              id="file"
              onChange={getFileSize}
              ref={(ref) => {
                this.uploadInput = ref;
              }}
              type="file"
              style={{ display: "inline-block", color: "white" }}
            />
            <span id="fp"></span>
          </div>
          <br />

          <div>
            <select
              name="branch"
              onChange={(event) => {
                this.handleChange(event);
              }}
              value={this.state.branch}
              placeholder="Enter the branch name"
              style={{
                borderRadius: "9999em",
                textAlignLast: "center",
                display: "inline-block",
                width: "300px",
              }}
            >
              {branchLst.map((elem, key) => {
                return (
                  <option key={key} value={elem.value}>
                    {elem.value}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <div>
            <select
              name="sem"
              value={this.state.sem}
              placeholder="Enter the semester in number"
              style={{
                borderRadius: "9999em",
                textAlignLast: "center",
                display: "inline-block",
                width: "300px",
              }}
              onChange={(event) => {
                this.handleChange(event);
              }}
            >
              {semesterLst.map((elem, key) => {
                return (
                  <option key={key} value={elem.value}>
                    {elem.value}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <div>
            <select
              name="subject"
              value={this.state.subject}
              onChange={(event) => {
                this.handleChange(event);
              }}
              style={{
                borderRadius: "9999em",
                textAlignLast: "center",
                width: "300px",
              }}
            >
              {this.state.subjectLst.map((item, key) => {
                return (
                  <option key={key} value={item.Subject}>
                    {item.Subject}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <div>
            <select
              name="year"
              value={this.state.year}
              onChange={(event) => this.handleChange(event)}
              style={{
                borderRadius: "9999em",
                textAlignLast: "center",
                width: "300px",
              }}
              placeholder="Year Eg:- 2015 (optional)"
            >
              {" "}
              {yearLst.map((item, key) => {
                return (
                  <option key={key} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
          </div>
          <br />
          <button className="btn btn-danger">
            Upload
          </button>
          <br />
          <br />
          <h1 style={{ fontWeight: "bold", color: "white" }}>
            Uploaded Images & docs:-
          </h1>
        </form>
      </div>
    );
  }
}
export default Inputbox;
