import React, { Component } from "react";
import './Post.css'

class Post1 extends Component {
    constructor(props){
        super(props)
        // console.log(props.array)
        this.state={
          array:props.array
        }
    }
    
  render() {


     const {array}=this.props
     console.log(array)
    

    return (
    <div>
    {array.map((dataitem) => (
    <span key={dataitem._id} style={{display:'inline-block',width:'200px',margin:'20px'}}>
      <span style={{fontWeight:'bold',color:'black'}}>{(dataitem.imageurl).substring(7,30)} {dataitem.year}</span>
      <embed src= {'http://192.168.157.128:4000/'+dataitem.imageurl} alt={dataitem.year} style={{height:'200px',width:'200px',margin:'15px'}}/>
    <a href={'http://192.168.157.128:4000/'+dataitem.imageurl} target='_blank' className="btn btn-danger" style={{borderRadius:'9999em'}}>View/Download</a>
   </span>
     ))}
     <br/>
     {/* <button className='btn btn-danger' onClick={()=>{this.props.function(1)}} style={{width:'400px',margin:'40px', border:'15%'}}>Go Back</button> */}
     <button className='btn btn-danger' onClick={()=>{this.props.function(1)}} style={{width:'300px',margin:'40px',borderRadius:'15px'}}>Go Back</button>

    </div>


    );
    
  }
}
    export default Post1;