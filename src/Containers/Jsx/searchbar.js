import React , { Component } from 'react'
import axios from 'axios'
import Post1 from '../../Components/Jsx/Post1'
import '../Css/searchbar.css'
import { baseIp } from '../../config'

class Searchbar extends Component
{

    constructor()
    {
        super()
        this.state={
          list:[],
          check:1
        }
    }


    getdata=()=>{
        axios.get(`${baseIp}/filterdata`,{
            params:{
            subject:this.subject1.value
            }
        })
        .then((response)=>{
            if(response.data[0]===undefined||response.data[0]===null)
            {
                alert("No data found , please try again")
                this.setState({
                    check:1
                })
            }
            else
            {
            this.setState({
                list:response
            },()=>{
                this.setState({
                    check:0
                })
            })
        }
        })

    }

find()
{
    if(true)
    {
    return(
        <datalist id="bro">
        {/* <option value="English"/>
        <option value="Physics"/>
        <option value="Mathematics"/>
        <option value="PEE(Electrical)"/>
        <option value="EC"/>
        <option value="EG"/>
        <option value="Unix and C"/> */}
        {/* <option value="Physics Lab"/> */}
        {/* <option value="PEE(Electronics"/>
        <option value="M2"/>
        <option value="EVS"/>
        <option value="Datastructures"/>
        <option value="PME"/>
        <option value="EM"/> */}
        {/* <option value="Chem Lab"/>
        <option value="BEE(Electrical) Lab"/>
        <option value="BEE(Electronics) Lab"/>
        <option value="Datastructures Lab"/> */}
        <option value="PEE(Electrical)"/>
        <option value="M2"/>
        <option value="PPS"/>
        <option value="Datastructures"/>
        <option value="Physics"/>

        <option value="English"/>
       
       <option value="M1"/>

       <option value="PEE(Electronics"/>
       <option value="Mechanical"/>
       <option value="Chem"/>

        <option value="OOPS Java"/>
        <option value="Digital Electronics"/>
        <option value="DMS"/>
        <option value="DACA"/>
        <option value="Biology"/>
        {/* <option value="Mechanical Lab"/>
        <option value="OOPS Lab"/>
        <option value="DE Lab"/> */}
        <option value="PSNT"/>
        <option value="OS"/>
        <option value="DBMS"/>
        <option value="CSA"/>
        <option value="French"/>
        <option value="German"/>
        {/* <option value="DBMS Lab"/>
        <option value="OS Lab"/>
        <option value="PSNT Lab"/> */}
        <option value="Computer Networks"/>
        <option value="Microprocessor"/>
        <option value="Automata Theory"/>
        <option value="AI and Expert Systems"/>
        {/* <option value="Computer Networks Lab"/>
        <option value="Microprocessor Lab"/>
        <option value="AI lab"/> */}
        <option value="Breadth Subject(CSE 5)"/>
        <option value="Compiler Design"/>
        <option value="Computer Graphics and Multimedia"/>
        <option value="Software Engineering"/>
        <option value="System Programming"/>
        <option value="Breadth Subject(CSE 6)"/>
        {/* <option value="Compiler Design Lab"/>
        <option value="Software Engg Lab"/>
        <option value="Computer Graphics and Multimedia Lab"/> */}
        <option value="Modern Instrument and Measurements"/>
        <option value="Semiconductor Devices"/>
        <option value="Network Theory"/>
        {/* <option value="Modern Instrument and Measurement Lab"/> */}
        <option value="Digital Communication System"/>
        <option value="Microwave engineering"/>
        <option value="Data Communication"/>
        <option value="Digital Signal Processing"/>
        <option value="Breadth Subject(ECE 5)"/>
        {/* <option value="Digital Communication Lab"/>
        <option value="Microwave Lab"/>
        <option value="Digital Signal Processing Lab"/> */}
        <option value="VLSI design"/>
        <option value="ACS"/>
        <option value="Microprocessor"/>
        <option value="Electromagnetic Theory"/>
        {/* <option value="VLSI Design Lab"/>
        <option value="Analog Communication Lab"/>
        <option value="Microprocessor Lab"/> */}
        <option value="Intelligent Instrumentation"/>
        <option value="Fibre Optics"/>
        <option value="Computer Networking"/>
        <option value="Control Theory"/>
        <option value="Breadth Subject(ECE 6)"/>
        {/* <option value="Industrial Instrumentation Lab"/>
        <option value="Fibre Optics Lab"/>
        <option value="Wireless Communication Lab"/> */}
        <option value="Introduction to System Theory"/>
        <option value="Electric Energy Generation & Control"/>
        <option value="Computing Lab"/>
        <option value="Electrical Machines"/>
        <option value="Digital Signal Processing"/>
        <option value="Engineering Electromagnetics"/>
        <option value="Electrical Measurement & Instrumentation"/>
        {/* <option value="Measurement & Electronic Instrumentation Lab"/> */}
        {/* <option value="Electrical Machines Lab"/>
        <option value="Electrical Machine Lab-2"/>
        <option value="Power Electronics Lab"/> */}
        <option value="Electrical Machines-2"/>
        <option value="Power Electronics"/>
        <option value="Power System-1"/>
        <option value="Control Theory"/>
        <option value="Power System-2"/>
        <option value="Industrial Drives and Control"/>
        <option value="Breadth Subject(EEE 6)"/>
        {/* <option value="Control System Lab"/> */}
        <option value="Computer Aided Machine Design"/>
        <option value="Electrical Workshop"/>
        <option value="Automobile Engg"/>
        <option value="Heat and Mass Transfer"/>
        <option value="Dynamics of Machines"/>
        <option value="Design of Mechanical Systems"/>
        <option value="Breadth Subject(Mech 6)"/>
        {/* <option value="Automobile Engg Lab"/>
        <option value="Heat Transfer Lab"/> */}
        <option value="Thermodynamics"/>
        <option value="Fluid Mechanics & Hydraulics"/>
        <option value="Mechanics of Solids"/>
        <option value="Metallurgy"/>
        {/* <option value="Dynamics of Machine Lab"/>
        <option value="Fluid Mechanics Lab"/>
        <option value="Mechanics of Solids Lab"/>
        <option value="Engg Measurement Lab"/> */}
        <option value="Heat Power Conversion"/>
        <option value="MOM"/>
        <option value="Manufacturing Process-1"/>
        <option value="Non-Conventional Energy"/>
        <option value="Biology"/>
        {/* <option value="Mechanical Engg Lab"/>
        <option value="Non-Conventional Energy Lab"/>
        <option value="Manufacturing Process-1 Lab"/> */}
        <option value="IC Engine & Gas Turbine"/>
        <option value="Kinematics & Kinetics of Machines"/>
        <option value="Manufacturing Process-2"/>
        <option value="Design of Machine Elements"/>
        <option value="Breadth Subject(Mech 5)"/>
        {/* <option value="IC Engine Lab"/>
        <option value="Energy Engg Lab"/>
        <option value="CADD Lab"/> */}
         </datalist>
    )
    }


}


changestate=(response)=>{
        this.setState({
            check:response
        })
    }

    render()
    {
        
        if(this.state.check===1)
        {
        return(
              <div>
               <span>
                  <input placeholder="enter the subject name ( names of the subject are either in full or in short form)"
                   ref={ref => {
                       this.subject1 = ref;
                   }}
                   className='searchcss'
                   list="bro"
                
                 />

                 {this.find(this.state.sem1,this.state.branch1)}

        
                     
               </span>
               
               <button className='btn btn-danger' onClick={()=>{
                   this.getdata()
               }}>Search</button>
               <br/>
               </div>
        )
        }
        else{
        return(
            <div>
               <span>
                  <input placeholder="enter the subject name"
                   ref={ref => {
                       this.subject1 = ref;
                   }}
                   style={{textAlign:'center', margin:'5px',borderRadius:'9999em',width:'600px',height:'40px'}}
                   list="bro"
                
                 />

                 {this.find(this.state.sem1,this.state.branch1)}

        
                     
               </span>
               
               <button className='btn btn-danger' onClick={()=>{
                   this.getdata()
               }}>Search</button>
               <br/>
               <Post1 array={this.state.list.data} function={this.changestate} />
            </div>
        )
      }
    }
}

export default Searchbar