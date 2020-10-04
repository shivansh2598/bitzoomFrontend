import React, { Component } from "react";
import DisplayImg from "./DisplayImg";
import Footer from "../../Components/Jsx/Footer";
import Inputbox from "./Inputbox";
import Searchbar from "./searchbar";
import Feedback from "./Feedback";
import logo from "../../Images/bitzoomLogo.png";

import "../Css/FirstPage.css";

class FirstPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="FirstPage">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgba(0,0,0,.2)" }}
        >
          <div className="row">
            <div className="col-lg-4">
              <br />
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
              <span className="heading1">
                {" "}
                <img className="bitzoomLogo" src={logo} alt="" /> <b>Bitzoom</b>
              </span>
            </div>
            <div className="col-lg-4">
              <Feedback function={this.props.func} />
            </div>
          </div>
        </div>
        <br />
        <Inputbox />
        <br />
        <h2
          style={{
            fontWeight: "bolder",
            color: "white",
            marginBottom: "15px",
          }}
        >
          Search Specific Content
        </h2>
        <Searchbar />
        <br />
        <DisplayImg />
        <Footer />
      </div>
    );
  }
}

export default FirstPage;
