import React, { Component } from 'react'
import axios from 'axios'
import { baseIp } from '../../config'

export default class login extends Component {
 
  login=(event)=>{
      event.preventDefault();
      axios.post(`${baseIp}/login`,{
        email:this.email.value,
        password:this.pass.value
      })
      .then((response)=>{
         if(response.data.status===200){
          localStorage.setItem('token',response.data.token)
          this.props.function(response.data.auth)
         }
         else
         alert(response.data.message)
      })

  }  

  render() {
    return (
      
          <div>
          <form onSubmit={(event)=>{this.login(event)}}>

          <input className='float-right'
           style={{textAlign:'center',borderRadius:'9999em',width:'50%'}}
           type='password'
           placeholder='enter password'
           autoComplete='true'
           ref={(ref)=>{
               this.pass=ref
           }}
          />

         <input className='float-right'
         style={{textAlign:'center',borderRadius:'9999em',width:'50%'}}
          type="email"
          placeholder="xyz@gmail.com"
          ref={(ref)=>{
              this.email=ref;
          }}
          />
         
          <br/>
          <br/>
          <button className='float-right btn btn-danger' type='submit' style={{width:'200px', marginTop:'-5px', borderRadius:'9999em', height:'35px', marginRight:'25%'}}>Login</button>
          
          </form>
        </div>
      
    )
  }
}
