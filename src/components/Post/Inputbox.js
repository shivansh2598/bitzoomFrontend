import React, {Component} from 'react'

class Inputbox extends Component
{
    
  constructor()
  {
      super()
      this.state={
          sem:0,
          branch:'CSE',
          isdisabled:false
      }
      this.handleUploadImage = this.handleUploadImage.bind(this);
      this.GetFileSize=this.GetFileSize.bind(this)
  }

  handleUploadImage(ev) {
    ev.preventDefault();
     this.setState({
         isdisabled:true
     })

     const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('branch',this.branches.value)
    data.append('subject', this.subject.value);
    data.append('semester', this.semester.value);
    data.append('year', this.year.value);

    fetch('http://192.168.157.128:4000/upload', {
        method: 'POST',
        body: data,
        headers:{
            'x-access-token':localStorage.getItem('token')
        }
    })
    .then((response)=> {
        return response.json();
      })
      .then((myJson) =>{
        if(myJson.status!==200){
        alert(myJson.msg)
        this.setState({
            isdisabled:false
        })

        }
        else
        window.location.reload(true)
      })
    .catch((err)=>{
        this.setState({
            isdisabled:false
        })
    });
     

}


GetFileSize() {
    var fi = document.getElementById('file'); // GET THE FILE INPUT.
    
    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
    
    if (fi.files.length > 0) {
            // RUN A LOOP TO CHECK EACH SELECTED FILE.
                var i=0;
                    var fsize = fi.files.item(i).size; 
              // THE SIZE OF THE FILE.
                    document.getElementById('fp').innerHTML = 
                                    '<b>' + Math.round((fsize / 1024)) + '</b> KB';
                                    if((fsize/1024)<30*1024)
                                    {
                                        document.getElementById('fp').setAttribute("style", "background-color: green; color:white")
                                        this.setState({
                                            isdisabled:false
                                        })
                                    }
                                    else
                                    {
                                            document.getElementById('fp').setAttribute("style", "background-color: black; color:white")
                                            this.setState({
                                                isdisabled:true
                                            })
                                    }

            
    }
}

  change(semes)
  {
     this.setState({
         sem:semes.value
     })
  }

  change_branch(branchz)
  {
    //   console.log("branchz",branchz.value)
     this.setState({
         branch:branchz.value
     })
  }

getvalue(semest,branch)
{
    // console.log("value",semest,branch)
    if(semest==1&&branch=='CSE')
    {
    return(
        <datalist id="browsers">
        <option value="English"/>
        {/* <option value="Physics"/> */}
        <option value="M1"/>
        {/* <option value="PEE(Electrical)"/> */}
        <option value="PEE(Electronics"/>
        <option value="Mechanical"/>
        <option value="Chem"/>
        {/* <option value="Physics Lab"/> */}
         </datalist>
    )
    }
    else if(semest==2&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="PEE(Electrical)"/>
        <option value="M2"/>
        <option value="PPS"/>
        <option value="Datastructures"/>
        <option value="Physics"/>
        {/* <option value="EM"/> */}
        {/* <option value="Chem Lab"/> */}
        {/* <option value="BEE(Electrical) Lab"/>
        <option value="BEE(Electronics) Lab"/>
        <option value="Datastructures Lab"/> */}
         </datalist>
        )
    }
  
    else if(semest==3&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="OOPS Java"/>
        <option value="Digital Electronics"/>
        <option value="DMS"/>
        <option value="DACA"/>
        <option value="Biology"/>
        <option value="Mechanical Lab"/>
        <option value="OOPS Lab"/>
        <option value="DE Lab"/>
         </datalist>
        )
    }
    else if(semest==4&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="PSNT"/>
        <option value="OS"/>
        <option value="DBMS"/>
        <option value="CSA"/>
        <option value="French"/>
        <option value="German"/>
        <option value="DBMS Lab"/>
        <option value="OS Lab"/>
        <option value="PSNT Lab"/>
         </datalist>
        )
    }
    else if(semest==5&&branch=='CSE')
    {
        return(
            <datalist id="browsers">
            <option value="Computer Networks"/>
            <option value="Microprocessor"/>
            <option value="Automata Theory"/>
            <option value="AI and Expert Systems"/>
            <option value="Computer Networks Lab"/>
            <option value="Microprocessor Lab"/>
            <option value="AI lab"/>
            <option value="Breadth Subject(CSE 5)"/>
         </datalist>
        )
    }
    else if(semest==6&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="Compiler Design"/>
        <option value="Computer Graphics and Multimedia"/>
        <option value="Software Engineering"/>
        <option value="System Programming"/>
        <option value="Breadth Subject(CSE 6)"/>
        <option value="Compiler Design Lab"/>
        <option value="Software Engg Lab"/>
        <option value="Computer Graphics and Multimedia Lab"/>
         </datalist>
        )
    }
    else if(semest==7&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==8&&branch=='CSE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==1&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="English"/>
        {/* <option value="Physics"/> */}
        <option value="M1"/>
        {/* <option value="PEE(Electrical)"/> */}
        <option value="EC"/>
        <option value="Mechanical"/>
        <option value="Chem"/>
         </datalist>
        )
    }
    else if(semest==2&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="BEE"/>
        <option value="M2"/>
        <option value="PPS"/>
        <option value="Datastructures"/>
        <option value="Physics"/>
         </datalist>
        )
    }
    else if(semest==3&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="Digital Electronics"/>
        <option value="Modern Instrument and Measurements"/>
        <option value="Semiconductor Devices"/>
        <option value="Network Theory"/>
        <option value="Biology"/>
        <option value="Engg Mechanics Lab"/>
        <option value="DE Lab"/>
        <option value="Modern Instrument and Measurement Lab"/>
         </datalist>
        )
    }
    else if(semest==5&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="Digital Communication System"/>
        <option value="Microwave engineering"/>
        <option value="Data Communication"/>
        <option value="Digital Signal Processing"/>
        <option value="Breadth Subject(ECE 5)"/>
        <option value="Digital Communication Lab"/>
        <option value="Microwave Lab"/>
        <option value="Digital Signal Processing Lab"/>
         </datalist>
        )
    }
    else if(semest==4&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="VLSI design"/>
        <option value="ACS"/>
        <option value="Microprocessor"/>
        <option value="Electromagnetic Theory"/>
        <option value="French"/>
        <option value="German"/>
        <option value="VLSI Design Lab"/>
        <option value="Analog Communication Lab"/>
        <option value="Microprocessor Lab"/>
         </datalist>
        )
    }
    else if(semest==6&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="Intelligent Instrumentation"/>
        <option value="Fibre Optics"/>
        <option value="Computer Networking"/>
        <option value="Control Theory"/>
        <option value="Breadth Subject(ECE 6)"/>
        <option value="Industrial Instrumentation Lab"/>
        <option value="Fibre Optics Lab"/>
        <option value="Wireless Communication Lab"/>
         </datalist>
        )
    }
    else if(semest==7&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==8&&branch=='ECE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==1&&branch=='EEE')
    {
        return(
            <datalist id="browsers">
         <option value="English"/>
        {/* <option value="Physics"/> */}
        <option value="M1"/>
        {/* <option value="PEE(Electrical)"/> */}
        <option value="EC"/>
        <option value="Mechanical"/>
        <option value="Chem"/>
            </datalist>
        )
    }
    else if(semest==2&&branch=='CSE')
    {
        return(
            <datalist id="browsers">
            <option value="BEE"/>
            <option value="M2"/>
            <option value="PPS"/>
            <option value="Datastructures"/>
            <option value="Physics"/>
             </datalist>
        )
    }
    else if(semest==3&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Introduction to System Theory"/>
        <option value="Network Theory"/>
        <option value="Electric Energy Generation & Control"/>
        <option value="Digital Electronics"/>
        <option value="French"/>
        <option value="German"/>
        <option value="Mechanical Lab"/>
        <option value="DE Lab"/>
        <option value="Computing Lab"/>
         </datalist>
        )
    }
    else if(semest==4&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Electrical Measurement & Instrumentation"/>
        <option value="Electrical Machines"/>
        <option value="Digital Signal Processing"/>
        <option value="Engineering Electromagnetics"/>
        <option value="Biology"/>
        <option value="Measurement & Electronic Instrumentation Lab"/>
        <option value="Electrical Machines Lab"/>
        <option value="Digital Signal Processing Lab"/>
         </datalist>
        )
    }
    else if(semest==5&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Microprocessor"/>
        <option value="Electrical Machines-2"/>
        <option value="Power Electronics"/>
        <option value="Power System-1"/>
        <option value="Breadth Subject(EEE 5)"/>
        <option value="Microprocessor Lab"/>
        <option value="Electrical Machine Lab-2"/>
        <option value="Power Electronics Lab"/>
         </datalist>
        )
    }
    else if(semest==6&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Control Theory"/>
        <option value="Power System-2"/>
        <option value="Industrial Drives and Control"/>
        <option value="Breadth Subject(EEE 6)"/>
        <option value="Control System Lab"/>
        <option value="Computer Aided Machine Design"/>
        <option value="Electrical Workshop"/>
         </datalist>
        )
    }
    else if(semest==7&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==8&&branch=='EEE')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==1&&branch=='IT')
    {
        return(
            <datalist id="browsers">
      <option value="English"/>
        {/* <option value="Physics"/> */}
        <option value="M1"/>
        {/* <option value="PEE(Electrical)"/> */}
        <option value="EC"/>
        <option value="Mechanical"/>
        <option value="Chem"/>
            </datalist>
        )
    }
    else if(semest==2&&branch=='IT')
    {
        return(
            <datalist id="browsers">
        <option value="BEE"/>
        <option value="M2"/>
        <option value="PPS"/>
        <option value="Datastructures"/>
        <option value="Physics"/>
         </datalist>
        )
    }
    else if(semest==3&&branch=='IT')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==4&&branch=='IT')
    {
        return(
        <datalist id="browsers">
         <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==5&&branch=='IT')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==6&&branch=='IT')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==7&&branch=='IT')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==8&&branch=='IT')
    {
        return(
        <datalist id="browsers">
        <option value="PSNT"/>
        <option value="OS"/>
        <option value="DACA"/><option value="PSNT"/>
        <option value="OS"/>
        <option value="DACA"/><option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==1&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
           <datalist id="browsers">
           <option value="English"/>
       
           <option value="M1"/>
   
           <option value="EC"/>
           <option value="Mechanical"/>
           <option value="Chem"/>
            </datalist>
         </datalist>
        )
    }
    else if(semest==2&&branch=='MECH')
    {
        return(
            <datalist id="browsers">
            <option value="BEE"/>
            <option value="M2"/>
            <option value="PPS"/>
            <option value="Datastructures"/>
            <option value="Physics"/>
             </datalist>
        )
    }
    else if(semest==3&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="Thermodynamics"/>
        <option value="Fluid Mechanics & Hydraulics"/>
        <option value="Mechanics of Solids"/>
        <option value="Metallurgy"/>
        <option value="French"/>
        <option value="German"/>
        <option value="Mechanics Lab"/>
        <option value="Fluid Mechanics Lab"/>
        <option value="Mechanics of Solids Lab"/>
        <option value="Engg Measurement Lab"/>
         </datalist>
        )
    }
    else if(semest==4&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="Heat Power Conversion"/>
        <option value="MOM"/>
        <option value="Manufacturing Process-1"/>
        <option value="Non-Conventional Energy"/>
        <option value="Biology"/>
        <option value="Mechanical Engg Lab"/>
        <option value="Non-Conventional Energy Lab"/>
        <option value="Manufacturing Process-1 Lab"/>
         </datalist>
        )
    }
    else if(semest==5&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="IC Engine & Gas Turbine"/>
        <option value="Kinematics & Kinetics of Machines"/>
        <option value="Manufacturing Process-2"/>
        <option value="Design of Machine Elements"/>
        <option value="Breadth Subject(Mech 5)"/>
        <option value="IC Engine Lab"/>
        <option value="Energy Engg Lab"/>
        <option value="CADD Lab"/>
         </datalist>
        )
    }
    else if(semest==6&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="Automobile Engg"/>
        <option value="Heat and Mass Transfer"/>
        <option value="Dynamics of Machines"/>
        <option value="Design of Mechanical Systems"/>
        <option value="Breadth Subject(Mech 6)"/>
        <option value="Automobile Engg Lab"/>
        <option value="Heat Transfer Lab"/>
        <option value="Dynamics of Machine Lab"/>
         </datalist>
        )
    }
    else if(semest==7&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else if(semest==8&&branch=='MECH')
    {
        return(
        <datalist id="browsers">
        <option value="Nothing Available"/>
         </datalist>
        )
    }
    else
    {
        return(
        <datalist id="browsers">
        <option value="Enter Branch and Semester"/>
         </datalist>
        )
    }
}

    render(){
        var semes=0;
        var branchz='CSE';
        if(this.state.sem===0)
        {
        return(
            <div>
                <form onSubmit={this.handleUploadImage}>
                <div>
						<input id='file' onChange={this.GetFileSize}
							ref={ref => {
								this.uploadInput = ref;
							}}
                            type="file"
                            style={{display:'inline-block', color:"white"}}
						/>
						<span id="fp"></span>
					</div>
					<br/>
                
                <div>
            <input
                ref={ref => {
                    this.branches = ref;
                    branchz=ref;
                }}
                type="string"
                placeholder="Enter the branch name"
                list="branch name"
                style={{borderRadius:'9999em', textAlign:'center',display:'inline-block',width:'300px'}}
                onChange={()=>{this.change_branch(branchz)}}
            />
              <datalist id="branch name">
              <option value="CSE"/>
              {/* <option value="IT"/> */}
              <option value="ECE"/>
              <option value="EEE"/>
              <option value="MECH"/>
              </datalist>
             </div>
             <br/>
            <div>
            <input
                ref={ref => {
                    this.semester = ref;
                    semes=ref;
                }}
                placeholder="Enter the semester in number"
                list='semester'
                style={{borderRadius:'9999em', textAlign:'center',display:'inline-block',width:'300px'}}

                onChange={()=>{this.change(semes)}}
            />
            <datalist id="semester">
                 <option value="1"/>
                 <option value="2"/>
                 <option value="3"/>
                 <option value="4"/>
                 <option value="5"/>
                 <option value="6"/>
                 <option value="7"/>
                 <option value="8"/>
                 </datalist>
        </div>
        <br/>
            <div>
               <input list="browsers" placeholder="enter the subject name"
				ref={ref => {
					this.subject = ref;
                }}
                style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
			  />
               {this.getvalue(this.state.sem,this.state.branch)}
            </div>
            <br/>
					<div>
						<input
							ref={ref => {
								this.year = ref;
							}}
                            list='years'
                            style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
							placeholder="Year Eg:- 2015 (optional)"
						/>
						  <datalist id="years">
                       <option value="2011"/>
                       <option value="2012"/>
                       <option value="2013"/>
                       <option value="2014"/>
                       <option value="2015"/>
                       <option value="2016"/>
                       <option value="2017"/>
                       <option value="2018"/>
                       <option value='2019'/>
            </datalist>
						
					</div>
					<br />
					<div>
                        <h3 style={{fontWeight:'bold', color:"white"}}>Avoid uploading duplicate content</h3>
                        <br/>
                        <h3 style={{fontWeight:'bold', color:"white"}}>Like and share our facebook page!!</h3>
                        <br/>
						<button className="btn btn-danger" disabled={this.state.isdisabled}>Upload</button>
					</div>
					<br />
                    <br />
					<h1 style={{fontWeight:'bold', color:"white"}}>Uploaded Images & docs:-</h1>
                    </form>
            </div>
            	
        )
    }
    else
    {
        return(
            <div>
                <form onSubmit={this.handleUploadImage}>
                  <div>
						<input id='file' onChange={this.GetFileSize} 
							ref={ref => {
								this.uploadInput = ref;
                            }}
                            style={{borderRadius:'9999em',width:'300px', color:"white"}}
							type="file"
						/>
						<span id="fp"></span>
					</div>
					<br/>
                <div>
            <input
                ref={ref => {
                    this.branches = ref;
                    branchz=ref;
                }}
                type="string"
                placeholder="Enter the branch"
                style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
                onChange={()=>{this.change_branch(branchz)}}
                list="branch name"
            />
                  <datalist id="branch name">
        <option value="CSE"/>
        {/* <option value="IT"/> */}
        <option value="ECE"/>
        <option value="EEE"/>
        <option value="MECH"/>
         </datalist>
        </div>
        <br/>
            <div>
            <input
                ref={ref => {
                    this.semester = ref;
                    semes=ref;
                }}
                style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
                placeholder="Enter the semester in number"
                list='semester'
                onChange={()=>{this.change(semes)}}
            />
            <datalist id="semester">
                 <option value="1"/>
                 <option value="2"/>
                 <option value="3"/>
                 <option value="4"/>
                 <option value="5"/>
                 <option value="6"/>
                 <option value="7"/>
                 <option value="8"/>
            </datalist>
        </div>
        <br/>
            <div>
               <input list="browsers" placeholder="enter the subject name"
				ref={ref => {
					this.subject = ref;
                }}
                style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
			  />
               {this.getvalue(this.state.sem,this.state.branch)}
            </div>
            <br/>
					<div>
						<input
							ref={ref => {
								this.year = ref;
							}}
                            placeholder="Year Eg:- 2015 (optional)"
                            style={{borderRadius:'9999em', textAlign:'center',width:'300px'}}
                            list="years"
						/>
                         <datalist id="years">
                       <option value="2011"/>
                       <option value="2012"/>
                       <option value="2013"/>
                       <option value="2014"/>
                       <option value="2015"/>
                       <option value="2016"/>
                       <option value="2017"/>
                       <option value="2018"/>
                       <option value='2019'/>
            </datalist>
						
					</div>
					<br />
					<div>
                        <h3 style={{fontWeight:'bold' , color:"white"}}>Avoid uploading duplicate content</h3>
						<button className="btn btn-danger" disabled={this.state.isdisabled}>Upload</button>
					</div>
					<br />
                    <br />
					<h1 style={{fontWeight:'bold' , color:"white"}}>Uploaded Images & docs:-</h1>
                    </form>
            </div>
            	
        )
    }
}
}

export default Inputbox