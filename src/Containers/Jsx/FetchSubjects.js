import React, { Component } from "react";
import axios from "axios";
import { baseIp } from "../../config";
import Post1 from "../../Components/Jsx/Post1";

class FetchSubjects extends Component {
  constructor(props) {
    super();
    this.state = {
      subjectLstPerSem: [],
      list: [],
    };
  }

  componentDidMount() {
    const { sem: semest } = this.props;

    axios
      .get(`${baseIp}/subjects/semester`, {
        params: {
          semester: semest,
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          subjectLstPerSem: response.data.data,
        });
      })
      .catch((err) => {
        console.log("some error occured in subject/semester");
      });
  }

  getimgs = (value1) => {
    axios
      .get(`${baseIp}/getimgs`, {
        params: {
          valuez: value1,
        },
      })
      .then((response) => {
        if (
          response.data === undefined ||
          response.data === null ||
          response.data[0] === undefined
        ) {
          alert("Sorry no data present!");
          this.setState({
            list: response.data,
          });
        } else {
          // console.log(response.data)
          this.setState(
            {
              list: response.data,
            }
            // ,
            // () => {
            //   this.setState({
            //     check: this.state.check ^ true,
            //   });
            // }
          );
        }
      });
  };

  render() {
    if (!this.state.check)
      return (
        <div>
          {this.state.subjectLstPerSem.map((elem, key) => {
            return (
              <button
                key={key}
                className="btn btn-danger"
                onClick={() => {
                  this.getimgs(elem.Subject);
                }}
                style={{
                  width: "auto",
                  height: "40px",
                  margin: "20px",
                  borderRadius: "15px",
                }}
              >
                {elem.Subject}
              </button>
            );
          })}
          <div>
            <Post1 array={this.state.list} function={this.changemystateagain} />
          </div>
        </div>
      );
  }
}

export default FetchSubjects;
