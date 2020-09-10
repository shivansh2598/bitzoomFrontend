import React, { Component } from 'react'
import '../Css/signup.css'
import axios from 'axios'
import { baseIp } from '../../config'


export default class signup extends Component {
  signup=(event)=>{
    event.preventDefault();
    axios.post(`${baseIp}/signup`,{
      name:this.name.value,
      email:this.email.value,
      roll:this.roll.value,
      password:this.password.value,
      passwordconf:this.passwordconf.value
    })
    .then((response)=>{
      if(response.data.status===200)
      {
        localStorage.setItem('token',response.data.token)
          if(response.data.auth)
            this.props.function(response.data.auth)
      }
      else
      {
        alert(response.data.message)
      }
    })
  }

  render() {
    return (
      <div>
      <div className='main'> 
      <center>
        <h1 className='signhead'>Sign up</h1>
        <form onSubmit={(event)=>{this.signup(event)}}>
        <div className='inputbox'>
            <span>
                <label>Name :-</label>
                <input 
                   type="text"
                   style={{marginLeft: '30px'}}
                   ref={(ref)=>{
                      this.name=ref;
                   }}
                />
            </span>
            <br/>
            <span>
                <label>Roll no :-</label>
                <input 
                   type="text"
                   ref={(ref)=>{
                    this.roll=ref;
                 }}
                />
            </span>
            <br/>
            <span>
                <label>Email_id :-</label>
                <input 
                   type="email"
                   ref={(ref)=>{
                    this.email=ref;
                 }}
                />
            </span>
            <br/>
            <span>
                <label>password :-</label>
                <input 
                   type="password"
                   autoComplete='true'
                   style={{marginLeft: '30px'}}
                   ref={(ref)=>{
                    this.password=ref;
                 }}
                />
            </span>
            <br/>
            <span>
                <label>conf password :-</label>
                <input 
                   type="password"
                   autoComplete='true'
                   ref={(ref)=>{
                    this.passwordconf=ref;
                 }}
                />
            </span>
            <br/>
            <button type='submit' className='btn btn-danger signup_btn'>submit</button>

        </div>
        </form>
        </center>
      </div>
      <div className='forgotpass'>
        <center>
        <p>In case you forget your password mail us at bitzoom2k19@gmail.com.</p>
        </center>
      </div>
      </div>
    )
  }
}
