import React, {Component} from 'react';
import '../Css/Authentication.css'
import Login from "./login";
import Signup from "./signup";
import logo from "../../Images/bitzoomLogo.png";


class Authentication extends Component {
    constructor(props)
    {
        super();
    }

    render(){
        return(
            <div className="Authentication">
            <div>
            <center>
              <span className="heading">
                {" "}
                <img className="bitzoomLogo" src={logo} alt="" /> <b>Bitzoom</b>
              </span>
              <span className="float-right" style={{ marginTop: "10px" }}>
                <Login function={this.props.func} />
              </span>
            </center>
          </div>
          <Signup function={this.props.func} />
          </div>
        )
    }
}

export default Authentication;