/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';
import firebaseDB from '../firebase';
import logo from "../images/job.png"
import { Card, Col, Row,Upload, message, Button } from 'antd';
import { Layout } from 'antd';
import { UploadOutlined,InboxOutlined} from '@ant-design/icons';
import Foot from "../components/Foot"
const { Header, Footer, Sider, Content } = Layout; 
const { Dragger } = Upload;


const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  const propss = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  
const UploadNonTechnicalDetails=(props)=>{
  const [userdata,setUserData] = useState({
    jid:props.jobi,
    company:props.cname,   
    name:"",
    email:"",
    skills:"",
    phonenumber:"",
    qualification:"",
    about:"",
})
 const changeHandler = e =>{
         setUserData({...userdata,[e.target.name]:e.target.value});
    }
    const {company,name,email,skills,phonenumber,qualification,about} = {...userdata}
    const submitHandler = async(e) =>{
        e.preventDefault();
        var dataAdded = await firebaseDB.child('UsersNonTechnical').push(
            
            userdata,
            err=>{
                if(err){
                    console.log(err);
                }
                else{
                    alert("Application Successfully uploaded")
                }
            }
        )
         setUserData({
            jid:"",
            company:"",
            name:"",
            email:"",
            skills:"",
            phonenumber:"",
            qualification:"",
            about:"",

        })
    }
  return(
<div>
      
      <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off">
        <div className="form-group">
      
        <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={changeHandler}/>
        </div>
        </div>
        
         

        <div className="form-group">
         
        <div className="col-sm-4">          
            <input type="email" className="form-control" placeholder="Email" name="email" value={email} 
            onChange={changeHandler}/>
        </div>
        </div>

        <div className="form-group">
         
        <div className="col-sm-4">          
            <input type="text" className="form-control" placeholder="skills" name="skills" value={skills} 
            onChange={changeHandler}/>
        </div>
        </div>

        <div className="form-group">
         
         <div className="col-sm-4">          
             <input type="text" className="form-control" placeholder="phone number" name="phonenumber" value={phonenumber} 
             onChange={changeHandler}/>
         </div>
         </div>

        <div className="form-group">
         
         <div className="col-sm-4">          
             <input type="text" className="form-control" placeholder="Qualification" name="qualification" value={qualification} 
             onChange={changeHandler}/>
         </div>
         </div>
          <div className="form-group">
 
        <div className="col-sm-4">          
        <textarea rows="4" cols="50" type="text" name="about" form="usrform" className="form-control" value={about}
         onChange={changeHandler} placeholder="Description About you"
        >
                             </textarea>   
        </div>
        </div>
        <div className="form-group">        
        <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-success" 
            value="Submit" />
        </div>
        </div>
  </form>
 
  
  </div>
  )
}
const UserDetails=(props)=>{
  console.log(props.cname);
  const [userdata,setUserData] = useState({
    jid:props.jobids,
    company:props.cname,   
    name:"",
    email:"",
    skills:"",
    phonenumber:"",
    qualification:"",
    about:"",
})
 const changeHandler = e =>{
         setUserData({...userdata,[e.target.name]:e.target.value});
    }
    const {company,name,email,skills,phonenumber,qualification,about} = {...userdata}
    const submitHandler = async(e) =>{
        e.preventDefault();
        var dataAdded = await firebaseDB.child('UsersTechnical').push(
            
            userdata,
            err=>{
                if(err){
                    console.log(err);
                }
                else{
                    alert("Application Successfully uploaded")
                }
            }
        )
         setUserData({
            jid:props.jobids,
            company:"",
            name:"",
            email:"",
            skills:"",
            phonenumber:"",
            qualification:"",
            about:"",

        })
    }
if(props.cource==="NonTechnical"){
  return <UploadNonTechnicalDetails cname={props.cname} jobi={props.jobids}/>
}
  return(
      <div>
      <h3>If you  Want to Apply for this job just fill the below form and submit it </h3>
          <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off">
            <div className="form-group">
          
            <div className="col-sm-4">
                <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={changeHandler}/>
            </div>
            </div>
            
             

            <div className="form-group">
             
            <div className="col-sm-4">          
                <input type="email" className="form-control" placeholder="Email" name="email" value={email} 
                onChange={changeHandler}/>
            </div>
            </div>

            <div className="form-group">
             
            <div className="col-sm-4">          
                <input type="text" className="form-control" placeholder="skills" name="skills" value={skills} 
                onChange={changeHandler}/>
            </div>
            </div>

            <div className="form-group">
             
             <div className="col-sm-4">          
                 <input type="text" className="form-control" placeholder="phone number" name="phonenumber" value={phonenumber} 
                 onChange={changeHandler}/>
             </div>
             </div>

            <div className="form-group">
             
             <div className="col-sm-4">          
                 <input type="text" className="form-control" placeholder="Qualification" name="qualification" value={qualification} 
                 onChange={changeHandler}/>
             </div>
             </div>
              <div className="form-group">
     
            <div className="col-sm-4">          
            <textarea rows="4" cols="50" type="text" name="about" form="usrform" className="form-control" value={about}
             onChange={changeHandler} placeholder="Description About you"
            >
                                 </textarea>   
            </div>
            </div>
            <div className="form-group" style={{marginRight:'60%'}}>        
            <div className="col-sm-offset-2 col-sm-10" >
                <input type="submit" className="btn btn-success" 
                value="Submit" />
            </div>
            </div>
      </form>
     
      
      </div>
  )
}  
class JobDescriptionScreen extends React.Component {
  constructor(props){
    super(props),
      
    this.state={
     job:props.location.aboutjob
    }
  }
    render(){
    const { Meta } = Card;
    
    console.log(this.state.job.jobdes);
    return (
        <Layout>
        <Header>
             <Row>
                 <Col>
                 <img src={logo} style={{width:50,height:50}}/>
            
                 </Col>
                 <Col style={{marginLeft:'1%'}}>
                 <h2 style={{color:'white'}}>Jump on Job</h2>
                 </Col>
             </Row>

        </Header>
        <Content>
        <div class="container" style={{marginTop:'5%'}}>
              <h2>{this.state.job.jobcname} </h2>
               <p><b> Job Description :-</b> {this.state.job.jobdes}</p>
                <h4>Job Role :- {this.state.job.jobrol}</h4>
                <h4>Work Place :- {this.state.job.jobplace}</h4>
                <h4>Salary Per annum :- {this.state.job.jobsalary}</h4>
                <h4>Skills Required :- {this.state.job.jobskill}</h4>
        </div>
        

        </Content>

        <Content style={{marginTop:'3%'}}>
        <div  class="container-fluid ">
              <div class="row" id="rowmain">

                  <div class="col-md-8">
                     <UserDetails cname={this.state.job.jobcname} cource={this.state.job.type} jobids={this.state.job.jobid}/>
                    </div>
                         

                  </div>


              </div>
                
             
                

        </Content>
        <Footer>

        <Foot/>

        </Footer>
      </Layout>
  
    )
    }
}

export default  JobDescriptionScreen;
 
    