/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import firebaseDB from '../firebase';
import  Upload from "../components/Upload"    
import { Statistic, Row, Col, Button } from 'antd';


const ApplidCards2=(props)=>{
    if(props.infoid!==props.i)
    {
       return null
    }
    return(
            <div class="col-lg-5 col-sm-6 col-md-6 mt-4">
                                <div class="card" id="cardstyle">
                                    <h2  style={{textAlign:'center'}}>Name:- {props.username}</h2>
                                    <h3  style={{textAlign:'center'}}>Email id:- {props.emai}</h3>
                                    <h3  style={{textAlign:'center'}}>Phone Number:-{props.phone}</h3>
                                   
                                    <div class="card-body">
                                            <h4>Qualification:- {props.quali}</h4>
                                                <h4>Skills:- {props.ski}</h4>
                                                <h4>About:- {props.abt}</h4>
                                    </div>
                                </div>
                               </div> 
                                        
    )
}
 
const AppliedDetails2=(props)=>{
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('UsersNonTechnical').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])


    return(
        <div  class="row">

        {getData &&
        Object.keys(getData).map(key =>
            <ApplidCards2 i={props.adminid} infoid={getData[key].jid} username={getData[key].name} phone={getData[key].phonenumber} ema={getData[key].email} abt={getData[key].about} quli={getData[key].qualification} ski={getData[key].skills}/>
                                         
            
        )
        }

    </div>
    
    )
}

const AppliedCard1=(props)=>{

    if(props.infoid!==props.i)
    {
       return null
    }
    return(
            <div class="col-lg-5 col-sm-6 col-md-6 mt-4">
                                <div class="card" id="cardstyle">
                                    <h2  style={{textAlign:'center'}}>Name:- {props.username}</h2>
                                    <h3  style={{textAlign:'center'}}>Email id:- {props.emai}</h3>
                                    <h3  style={{textAlign:'center'}}>Phone Number:-{props.phone}</h3>
                                   
                                    <div class="card-body">
                                            <h4>Qualification:- {props.quali}</h4>
                                                <h4>Skills:- {props.ski}</h4>
                                                <h4>About:- {props.abt}</h4>
                                    </div>
                                </div>
                               </div> 
                                        
    )
}
const AppliedDetails=(props)=>{
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('UsersTechnical').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])

    if(props.data==="NonTechnical"){
        return <AppliedDetails2 adminid={props.info}/>
    }
    return(
        <div class="row">

        {getData &&
        Object.keys(getData).map(key =>
                            <AppliedCard1 i={props.info} infoid={getData[key].jid} username={getData[key].name} phone={getData[key].phonenumber} ema={getData[key].email} abt={getData[key].about} quli={getData[key].qualification} ski={getData[key].skills}/>
                                         
            
        
        )
        }

    </div>
    
    )

}

const ProfileStatisticFiles=(props)=>{

    if(props.info==="profile"){
        return  <div>
            <h1>User Id</h1>
            <h1>{props.userinfo}</h1>
            <img src={props.urlphoto}/>
        </div>

        
    }
    return(
        <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Jobs Applied for Technical" value={10} />
        </Col>
        <Col span={12}>
          <Statistic title="Jobs Applied for Non-Technical" value={5}   />
           
        </Col>
         
      </Row>
    )
}

class Job extends React.Component{
    constructor(props){
        super(props);
        this.state={
             data1:" ",
             data2:" ",
             useriddata:"",
             photo:""
        }
    }
    static getDerivedStateFromProps(props, state) {
          
            return {data1:props.cat,
            data2:props.typ,
            useriddata:props.userid,
            photo:props.photourl,
            }
      }
     
    render(){
       
    if(this.state.data1==="profile" || this.state.data1==="Statistics" ||this.state.data1==="Files"){
        return <ProfileStatisticFiles info={this.state.data1} userinfo={this.state.useriddata} urlphoto={this.state.photo}/>
    }  
    
    return (
        <>
        {this.state.data2==="applied"?<AppliedDetails data={this.state.data1} info={this.state.useriddata}/>:  <Upload d1={this.state.data1} d2={this.state.data2} info={this.state.useriddata}/>}
          
        </>
    )
    }
}

 
export default Job;
