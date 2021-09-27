/* eslint-disable import/first */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import AdminScreen from "./AdminScreen"
import ClientScreen from "./ClientScreen"
import '../index.css'
import { Form, Input, InputNumber, Button,Card, Col, Row,Layout } from 'antd';
import logo from '../images/job.png'
import   firebase from '../firebase'
import { auth } from '../firebase';
require('firebase/auth');
import Admin from "../screens/AdminScreen"
import UserAuth from '../components/UserAuth';


const EmailAuth=()=>{
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user?.uid,
        email:user?.email,
        photo:user?.photoURL
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser ? <AdminScreen presentUser={presentUser}/> : <MainScreen/> }
      </center>
    </div>
  )
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      
    },
     
  }

const Google=()=>{
  const [user,setUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(person=>{
      if(person){
        setUser(person);
      }
      else{
        setUser(null);
      }
    })
  })
  const signInWithGoogle = async()=>{
   
    try{
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    catch(err){
      console.log(err)
    }
  }
  console.log(user);
  return(
      <Button onclick={signInWithGoogle}>google sigin</Button>
  )
}


const EmailLogin=()=>{
  const [data,setData] = useState({
    email:"",
    password:"",
    
})
const {email,password} = data;
const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
}
const signUp = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then(
        user => console.log(user)
        ).catch(err => console.log(err))
}
const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(
        user => console.log(user)
        ).catch(err => console.log(err))
}
return (
    <div>
        <center>
            <form autoComplete="off">
                <h1>Company Registration for Jobs Posting</h1>
               
                <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler}/><br />
                <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler}/><br />
                <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                <button onClick={signUp}>Sign Up</button>
            </form>
        </center>
    </div>
)
}


class MainScreen extends React.Component {
      constructor(props){
        super(props)
        this.state={
          userissiginin:false,
          adminsiginin:false
        }
        
      }
      render(){

    const onFinish = (values: any) => {
        console.log(values);
      };
      
      
      


      
    return (
        <div className="contact-background-image">
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'orange'}}>

                <img src={logo} style={{width:50,height:50}}/>
                <h2 style={{}}>Jump on Jobs</h2>


                </div>


            {this.state.userissiginin?<NavLink to="/ClientScreen">click to on palnel</NavLink>:<div  class="container-fluid pf">
              <div class="row" id="rowmain">

                  <div class="col-md-4">
                     <EmailLogin/>
                      </div> 



                   <div class="col-md-6">
                          <div class="mainbox">


                                  <h2 style={{fontSize:30,textAlign:'center'}}>ARE YOUR SEARCHING FOR JOBS</h2>
                                  <h3 style={{fontSize:20,textAlign:'center'}}>JUST SIGNIN WITH GOOGLE</h3>
                                  <h1 style={{fontSize:20,textAlign:'center'}}>AND EXPLORE IT  👍</h1>


                                   <NavLink to="/ClientScreen"> <Button type="primary"   >GOOGLE SIGNIN</Button> </NavLink> 

                          </div>
                      <Google/>
                   </div>                
                                    

                  </div>


              </div>
                
                
            
}


                  

            


        </div>
    )
}
}

export default  EmailAuth;
