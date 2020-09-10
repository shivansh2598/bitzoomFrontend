import React, { Component } from 'react'
import axios from 'axios'
import baseIp from '../../config'

export default class sessiondetail extends Component {
   
    fetchdetils=()=>{
        axios.get(`${baseIp}/getuserdetail`)
        .then((response)=>{
            console.log(response)
        })
    }
    render() {
    return (
      <div>
        
      </div>
    )
  }
}
