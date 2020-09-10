import React , {Component} from 'react'
import axios from 'axios'
import Post1 from '../../Components/Jsx/Post1'
import '../Css/Semester.css'
import { baseIp } from '../../config'

class Semester extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:props.semester,
            check:0,
            list:[],
            semval:0
        }     
    }


    getimgs=(value1)=>{
        axios.get(`${baseIp}/getimgs`,{
            params: {
                valuez:value1
              }
        })
        .then((response)=>{
            if(response.data===undefined||response.data===null||response.data[0]===undefined)
            {
                alert("Sorry no data present!")
            }
            else{
            // console.log(response.data)
            this.setState({
                list:response.data
            },()=>{
                this.setState({
                    check:2
                })
            })
        }
            
        })
    }


    changemystate=(value1)=>{
        this.setState({
            semval:value1
        },()=>{
            this.setState({
                check:1
            })
        })
    }

    changemystateagain=(sth)=>{
        this.setState({
            check:sth
        })
    }



getsubject(semest)
{
  if(semest==1)
    {
    return(
        <div>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('English')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>English</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('M1')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>M1(Maths)</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Chem')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Chemistry</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('PEE(Electronics')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>EC</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('EG')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>EG</button> */}
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Mechanical')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Mechanical</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Physics Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Physics Lab</button> */}
       </div>
    )
    }
    else if(semest==2)
    {
        return(
        <div>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Physics')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Physics</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('PEE(Electrical)')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>BEE</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('M2')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>M2</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('EVS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>EVS</button> */}
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Datastructures')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Datastructures</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('PME')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>PME</button> */}
        <button className='btn btn-danger' onClick={()=>{this.getimgs('PPS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>PPS</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Chem Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Chem Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Datastructures Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Datastructures Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('BEE(Electrical) Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>BEE(Electrical) Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('BEE(Electronics) Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>BEE(Electronics) Lab</button> */}
       </div>
         
        )
    }
  
    else if(semest==3)
    {
        return(  
        <div>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('OOPS Java')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>OOPS Java</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Digital Electronics')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Digital Electronics</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('DMS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>DMS</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('DACA')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>DACA</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Biology')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Biology</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Mechanical Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Mechanical Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('OOPS Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>OOPS Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('DE Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>DE Lab</button> */}
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Modern Instrument & Measurement')}} style={{width:'280px',height:'40px',margin:'20px',borderRadius:'15px'}}>Modern Instrument & Measurement</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Semiconductor Devices')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Semiconductor Devices</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Network Theory')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Network Theory</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Modern Instrument Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Modern Instrument Lab</button> */}
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Introduction to System Theory')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Introduction to System Theory</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Electric Energy Genereration & control')}} style={{width:'300px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electric Energy Genereration & control</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Thermodynamics')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Thermodynamics</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Fluid Mechanics & Hydraulics')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Fluid Mechanics & Hydraulics</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Mechanics of Solids')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Mechanics of Solids</button>
        <button className='btn btn-danger' onClick={()=>{this.getimgs('Metallurgy')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Metallurgy</button>
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Fluid Mechanics Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Fluid Mechanics Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Mechanics of Solids Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Mechanics of Solids Lab</button> */}
        {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Engg Measurement Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Engg Measurement Lab</button> */}
       </div>
         
        )
    }
    else if(semest==4)
    {
        return(
    <div>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('PSNT')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>PSNT</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('OS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>OS</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('DBMS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>DBMS</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('CSA')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>CSA</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('German')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>German</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('French')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>French</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('OS Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>OS Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('PSNT Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>PSNT Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('DBMS Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>DBMS Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('ACS')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>ACS</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Microprocessor')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microprocessor</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Electromagnetic Theory')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electromagnectic Theory</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('VLSI design')}} style={{width:'220px',height:'40px',margin:'20px',borderRadius:'15px'}}>VLSI Design</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Analog Communication Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Analog Communication Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Microprocessor Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microprocessor Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Electrical Machines')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electrical Machines</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Digital Signal Processing')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Digital Signal Processing</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Engineering Electromagnetics')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Engineering Electromagnetics</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Measurement & Electronic Instrumentation Lab')}} style={{width:'400px',height:'40px',margin:'20px',borderRadius:'15px'}}>Measurement & Electronic Instrumentation Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Electrical Machines Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electrical Machines Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Digital Signal Processing Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Digital Signal Processing Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('MOM')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>MOM</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Manufacturing Process-1')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Manufacturing Process-1</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Non-Conventional Energy')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Non-Conventional Energy</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Mechanical Engg Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Mechanical Engg Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Non-Conventional Energy Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Non-Conventional Energy Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Manufacturing Process-1 Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Manufacturing Process-1 Lab</button> */}
   </div>

        )
    }
    else if(semest==5)
    {
        return(

            <div>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Networks')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Networks</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Microprocessor')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microprocessor</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Automata Theory')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Automata Theory</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('AI and Expert Systems')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>AI and Expert Systems</button>
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Networks Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Networks Lab</button> */}
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Microprocessor Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microprocessor Lab</button> */}
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('AI lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>AI lab</button> */}
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Digital Communication System')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Digital Communication System</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Microwave engineering')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microwave engineering</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Data Communication')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Data Communication</button>
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Microwave Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Microwave Lab</button> */}
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Electrical Machines-2')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electrical Machines-2</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Power Electronics')}} style={{width:'220px',height:'40px',margin:'20px',borderRadius:'15px'}}>Power Electronics</button>
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Power Electronics Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Power Electronics Lab</button> */}
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Power System-1')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Power System-1</button>
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Electrical Machine Lab-2')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electrical Machine Lab-2</button> */}
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Kinematics & Kinetics of Machines')}} style={{width:'280px',height:'40px',margin:'20px',borderRadius:'15px'}}>Kinematics & Kinetics of Machines</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Manufacturing Process-2')}} style={{width:'220px',height:'40px',margin:'20px',borderRadius:'15px'}}>Manufacturing Process-2</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('IC Engine & Gas Turbine')}} style={{width:'270px',height:'40px',margin:'20px',borderRadius:'15px'}}>IC Engine & Gas Turbine</button>
            <button className='btn btn-danger' onClick={()=>{this.getimgs('Design of Machine Elements')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Design of Machine Elements</button>
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Digital Signal Processing Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Digital Signal Processing Lab</button> */}
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('IC Engine Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>IC Engine Lab</button> */}
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Energy Engg Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Energy Engg Lab</button> */}
            {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('CADD Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>CADD Lab</button> */}
           </div>

        )
    }
    else if(semest==6)
    {
        return(
    
    <div>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Compiler Design')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Compiler Design</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Graphics and Multimedia')}} style={{width:'280px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Graphics and Multimedia</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Compiler Design Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Compiler Design Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Graphics and Multimedia Lab')}} style={{width:'300px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Graphics and Multimedia Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Software Engineering')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Software Engineering</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Software Engg Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Software Engg Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('System Programming')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>System Programming</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Intelligent Instrumentation')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Intelligent Instrumentation</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Fibre Optics')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Fibre Optics</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Fibre Optics Lab')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Fibre Optics Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Networks')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Networking</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Control Theory')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Control Theory</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Industrial Instrumentation Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Industrial Instrumentation Lab</button> */}
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Wireless Communication Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Wireless Communication Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Power System-2')}} style={{width:'200px',height:'40px',margin:'20px',borderRadius:'15px'}}>Power System-2</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Industrial Drives and Control')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Industrial Drives and Control</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Control System Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Control System Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Computer Aided Machine Design')}} style={{width:'270px',height:'40px',margin:'20px',borderRadius:'15px'}}>Computer Aided Machine Design</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Electrical Workshop')}} style={{width:'220px',height:'40px',margin:'20px',borderRadius:'15px'}}>Electrical Workshop</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Automobile Engg')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Automobile Engg</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Automobile Engg Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Automobile Engg Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Heat and Mass Transfer')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Heat and Mass Transfer</button>
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Dynamics of Machines')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Dynamics of Machines</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Dynamics of Machine Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Dynamics of Machine Lab</button> */}
    <button className='btn btn-danger' onClick={()=>{this.getimgs('Design of Mechanical Systems')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Design of Mechanical Systems</button>
    {/* <button className='btn btn-danger' onClick={()=>{this.getimgs('Heat Transfer Lab')}} style={{width:'250px',height:'40px',margin:'20px',borderRadius:'15px'}}>Heat Transfer Lab</button> */}
   </div>

        )
    }
    else
    {
        return(
            <h4 style={{color:'white'}}>Sorry , No data found. Try again!!</h4>
        )
    }
}



    render()
    {
        if(this.state.check===0)
        {
           var semA=this.state.value.value1
           var semB=this.state.value.value2

        return(
            <div>
                <br/>
                    <h2 style={{fontWeight:'bolder' , color:"white"}}>Choose the semester</h2>
                    <button className='btn btn-danger bttnee' onClick={()=>{this.changemystate(semA)}} >{semA} semester</button>
                    <button className='btn btn-danger bttnee' onClick={()=>{this.changemystate(semB)}} >{semB} semester</button>  
                    <br/>
                    <button className='btn btn-danger bttnee' onClick={()=>{this.props.function(0)}} >Go Back</button>
            </div>
        )
        }
        else if(this.state.check===1)
        {
            return(
           <div>
               <br/>
               {this.getsubject(this.state.semval)}
               <button className='btn btn-danger bttnee' onClick={()=>{this.changemystateagain(0)}} >Go Back</button>

           </div>
            )
        }
        else
        {
            return(
            <div>
             <Post1 array={this.state.list} function={this.changemystateagain} /> 
             {/* <button className='btn btn-danger' onClick={()=>{this.changemystateagain(1)}} style={{width:'400px',margin:'40px',borderRadius:'15px'}}>Go Back</button> */}
            </div>
            )
        }
    }
}

export default Semester