import React, { Component } from "react";
import "./App.css";
import DisplayImg from "./components/DisplayImg";
import Footer from "./components/Footer";
import Inputbox from "./components/Post/Inputbox";
import Searchbar from "./components/searchbar";
import Feedback from "./components/Feedback";
import Login from "./components/login";
import Signup from "./components/signup";
import axios from "axios";
import logo from "./bitzoomLogo.png"

class App extends Component {
  constructor() {
    super();
    this.state = {
      verified: false
    };
  }

  changestate = response => {
    this.setState({
      verified: response
    });
  };

  componentWillMount = () => {
    var tokenz = localStorage.getItem("token");
    if (tokenz === "null" || tokenz === "" || tokenz === "undefined") {
      this.setState({
        verified: false
      });
    } else {
      axios
        .get("http://192.168.157.128:4000/verifytoken", {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        })
        .then(response => {
          if (response.data.auth) {
            this.setState({
              verified: true
            });
          } else {
            this.setState({
              verified: false
            });
          }
        });
    }
  };

  render() {
    if (this.state.verified === true) {
      return (
        <div className="App">
          <div className="container-fluid" style={{backgroundColor:"rgba(0,0,0,.2)"}}>
            <div className="row">
              <div className="col-lg-4">
				  <br/>
                <div
                  className="fb-like"
                  data-href="https://www.facebook.com/bitzoom2.0/"
                  data-width="300"
                  data-layout="button_count"
                  data-action="like"
                  data-size="large"
                  data-show-faces="true"
				  data-share="true"
                ></div>
              </div>
              <div className="col-lg-4">
                <span className="heading1"> <img className = "bitzoomLogo" src={logo} /> <b>Bitzoom</b></span>
              </div>
              <div className="col-lg-4">
                <Feedback function={this.changestate} />
              </div>
            </div>
          </div>
          <h1 style={{ fontWeight: "bold" , color:"white" }}>Upload File Here</h1>
          <Inputbox />
          <br />
          <h2 style={{ fontWeight: "bolder", color:"white", marginBottom: "15px" }}>
            Search Specific Content
          </h2>
          <Searchbar />
          <br />
          <DisplayImg />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <div >
            <center>
              <span className="heading"> <img className = "bitzoomLogo" src={logo} /> <b>Bitzoom</b></span>
              <span className="float-right" style={{ marginTop: "10px" }}>
                <Login function={this.changestate} />
              </span>
            </center>
          </div>
          <Signup function={this.changestate} />
        </div>
      );
    }
  }
}
export default App;
