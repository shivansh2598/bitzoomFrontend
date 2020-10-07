import React from 'react';
import logo from "../../Images/bitzoomLogo.png";

import '../Css/login.css'
export default function Header(){
    return(
        <div className="login_container">
        <div>
          <span className="login_heading">
            {" "}
            <img className="login_bitzoomLogo" src={logo} alt="" /> <b>Bitzoom</b>
          </span>
        </div>
      </div>
    )
}