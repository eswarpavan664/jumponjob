/* eslint-disable import/first */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';
import intro from "../images/1164874.jpg" 
import logo from "../images/job.png"
import { Card, Col, Row } from 'antd';
import { Layout,Button } from 'antd';
import Foot from "../components/Foot"
import {Technical,NonTechnical} from "../components/Jobs" 
const { Header, Footer, Sider, Content } = Layout;
import {auth} from '../firebase';
import firebaseDB from '../firebase';
import '../card.css'
const TechnicalCards=(props)=>{
    const [getData,setGetData] = useState({});
    useEffect(()=>{
        firebaseDB.child('Technical').on('value',details=>{
            console.log(details.val());
            setGetData(details.val());
        })
},[])


     
    return(
        <div class="row"  id="client_row" >
        
        {getData &&
        Object.keys(getData).map(key =>

           
                <article class="text-center">
                <div class="text">
  
                    <h3  style={{textAlign:'center'}}>{getData[key].companyname}</h3>
                            <hr style={{backgroundColor: 'black'}} />
                            <div class="card-body">
                             <h4>{getData[key].role}</h4>
                                <h4>{getData[key].salary}₹</h4>
                                 
                                <NavLink   to={{
                    pathname:"/JobDescriptionScreen",
                      aboutjob:{
                         type:"Technical",
                         jobid:getData[key].id,
                          jobdes:getData[key].description,
                          jobrol:getData[key].role,
                          jobsalary:getData[key].salary,
                          jobplace:getData[key].place,
                          jobcname:getData[key].companyname,
                          jobskill:getData[key].skills
                        }
                }}
                exact> <p style={{textAlign:'center'}} id="cardapply" class="btn"> Apply</p></NavLink>
                    </div>       
                        
                </div>
                </article>
      
                                                                                                                                          
            
        )}

            
                     
        </div>
    )
}


const NonTechnicalCards=(props)=>{
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('NonTechnical').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])


    return(
        <div class="row" id="client_row">
        {getData &&
        Object.keys(getData).map(key =>
            <article class="text-center">
                <div class="text">
  
                    <h3  style={{textAlign:'center'}}>{getData[key].companyname}</h3>
                            <hr style={{backgroundColor: 'black'}} />
                            <div class="card-body">
                             <h4>{getData[key].role}</h4>
                                <h4>{getData[key].salary}₹</h4>
                                 
                                <NavLink   to={{
                    pathname:"/JobDescriptionScreen",
                      aboutjob:{
                         type:"NonTechnical",
                         jobid:getData[key].id,
                          jobdes:getData[key].description,
                          jobrol:getData[key].role,
                          jobsalary:getData[key].salary,
                          jobplace:getData[key].place,
                          jobcname:getData[key].companyname,
                          jobskill:getData[key].skills
                        }
                }}
                exact> <p style={{textAlign:'center'}} id="cardapply" class="btn"> Apply</p></NavLink>
                    </div>       
                        
                </div>
                </article>
        )}

            
                     
        </div>
    )
}
class ClientScreen extends React.Component {
constructor(props){
    super(props);
    this.state={
        Technical:Technical,
        nontechnical:NonTechnical

    }
}
 

    render(){
    const { Meta } = Card;
    console.log(Technical);

    function applybtn(id){
            
    }
    return (
        <Layout>
        <Header>
             <Row>
                 <Col>
                 <img src={logo} style={{width:50,height:50}}/>
            
                 </Col>
                 <Col style={{marginLeft:'1%'}}>
                
                 <h2 style={{color:'white'}}>Jump on Job</h2>
                 <div>
           
           
        </div>
                 
                 </Col>
             </Row>

        </Header>
           <Content>

                <div class="container-fluid intro">
                                      
                                      <h4><span style={{color:'lightblue'}}> Jump on Job is a leading global information technology,</span> consulting and business process services company. 
                                    </h4>
                                    <h4> we have over <span style={{color:'tomato'}}> 200,000</span> dedicated employees serving clients across<span style={{color:'tomato'}}>  six continents. </span> </h4>
                                    <h4>Together, we discover ideas and connect the dots to <span style={{color:'brown'}}> build a better and a bold new future.</span></h4>
                        </div>



           </Content>





        <Content>

            <div class="container" style={{width:'100%'}}>
                <h1>Technical Jobs</h1>
                 <TechnicalCards/>
                <h1>Non-Technical Jobs</h1>
                 <NonTechnicalCards/>
            </div>

        </Content>
        <Footer>
                 
                 <Foot/>

        </Footer>
      </Layout>
  
    )
    }
}

export default ClientScreen;
 
    