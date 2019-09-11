import React, { Component } from 'react'
import axios from 'axios'

export default class sessiondetail extends Component {
   
    fetchdetils=()=>{
        axios.get('http://localhost:4000/getuserdetail')
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
