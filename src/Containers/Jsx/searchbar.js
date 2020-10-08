import React, { Component } from "react";
import axios from "axios";
import Post1 from "../../Components/Jsx/Post1";
import "../Css/searchbar.css";
import { baseIp } from "../../config";

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      check: 1,
      subjectLst: [],
    };
  }

  getdata = () => {
    axios
      .get(`${baseIp}/pic/filterdata`, {
        params: {
          subject: this.subject1.value,
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data[0] === undefined || response.data[0] === null) {
          alert("No data found , please try again");
          this.setState({
            check: 1,
          });
        } else {
          this.setState(
            {
              list: response,
            },
            () => {
              this.setState({
                check: 0,
              });
            }
          );
        }
      });
  };

  componentWillMount() {
    axios
      .get(`${baseIp}/subjects/all`)
      .then((response) => {
        this.setState({
          subjectLst: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changestate = (response) => {
    this.setState({
      check: response,
    });
  };

  render() {
    if (this.state.check === 1) {
      return (
        <div>
          <span>
            <select
              ref={(ref) => {
                this.subject1 = ref;
              }}
              className="searchcss"
            >
              {this.state.subjectLst.map((item, key) => {
                return (
                  <option key={key} value={item.Subject}>
                    {item.Subject}
                  </option>
                );
              })}
            </select>
          </span>

          <button
            className="btn btn-danger"
            onClick={() => {
              this.getdata();
            }}
          >
            Search
          </button>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <span>
            <select
              ref={(ref) => {
                this.subject1 = ref;
              }}
              className="searchcss"
            >
              {this.state.subjectLst.map((item, key) => {
                return (
                  <option key={key} value={item.Subject}>
                    {item.Subject}
                  </option>
                );
              })}
            </select>
          </span>

          <button
            className="btn btn-danger"
            onClick={() => {
              this.getdata();
            }}
          >
            Search
          </button>
          <br />
          <Post1 array={this.state.list.data} function={this.changestate} />
          <br />
          <button
            className="btn btn-danger"
            onClick={() => {
              this.setState({
                check: 1,
              });
            }}
            style={{
              width: "300px",
              margin: "40px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            Go Back
          </button>
        </div>
      );
    }
  }
}

export default Searchbar;
