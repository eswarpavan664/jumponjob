/* eslint-disable no-unused-expressions */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import firebaseDB from '../firebase';
import { NonTechnical } from './Jobs';
import '../index.css'
/*const displaydata=()=>{
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('Technicalapplied').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])


    return(
        <div>

        {getData &&
        Object.keys(getData).map(key =>
            <div className="border">

                
                    
            </div>
        
        )
        }

</div>

    )
}*/

const CardDisplay=(props)=>{
    const deleteHandler = key =>{
        firebaseDB.child(`NonTechnical/${key}`).remove(
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    }
    if(props.i!==props.admin)
    {
        return null
    }
    return(
        <div class="col-lg-5 col-sm-6 col-md-6 mt-4">
        <div class="card" id="cardstyles">
            <p style={{textAlign:'center'}}>company Name:- {props.name}</p>
               <p style={{textAlign:'center'}}>Salary:-{props.sal}</p>
                <p style={{textAlign:'center'}}>Role:- {props.rol}</p>
                <p style={{textAlign:'center'}}>Skills Requeried:- {props.skill}</p>
                <p style={{textAlign:'center'}}>Place:- {props.pla}</p>
               <h3>Description</h3>
               <hr style={{backgroundColor: 'black'}} size="10"/>
                <p>Description:- {props.des}</p><br></br>

            <div class="card-body">
             

         <button className="btn btn-danger"
                   onClick={()=> deleteHandler(props.k)}
                >Delete</button>  

            </div>
        </div>
       </div> 
    )
}

const CardDisplayTech=(props)=>{
    const deleteHandler = key =>{
        firebaseDB.child(`Technical/${key}`).remove(
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    }
    
    if(props.i!==props.admin)
    {
        return null
    }
return(
    <div class="col-lg-5 col-sm-6 col-md-6 mt-4">
    <div class="card" id="cardstyles">
        <p style={{textAlign:'center'}}>company Name:- {props.name}</p>
           <p style={{textAlign:'center'}}>Salary:-{props.sal}</p>
            <p style={{textAlign:'center'}}>Role:- {props.rol}</p>
            <p style={{textAlign:'center'}}>Skills Requeried:- {props.skill}</p>
            <p style={{textAlign:'center'}}>Place:- {props.pla}</p>
           <h3>Description</h3>
           <hr style={{backgroundColor: 'black'}} size="10"/>
            <p>Description:- {props.des}</p><br></br>

        <div class="card-body">
         

     <button className="btn btn-danger"
               onClick={()=> deleteHandler(props.k)}
            >Delete</button>  

        </div>
    </div>
   </div> 
)
}
const UploadNonTch=(props)=>{

    const [NonTechdata,setNonTechData] = useState({
        id:props.userinfo,
        companyname:"",
        description:"",
        role:"",
        salary:"",
        skills:"",
        place:"",
    })
    const {companyname,description,role,salary,skills,place} = {...NonTechdata}
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('NonTechnical').on('value',details=>{
                console.log(details.val());
                setGetData(details.val());
            })
    },[])


    const changeHandler = e =>{
        setNonTechData({...NonTechdata,[e.target.name]:e.target.value});
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        var dataAdded = await firebaseDB.child('NonTechnical').push(
            
            NonTechdata,
            err=>{
                if(err){
                    console.log(err);
                }
                else{
                    alert("Job Post Uploaded successfully")
                }
            }
        )
        setNonTechData({
            id:"",
            companyname:"",
            description:"",
            role:"",
            salary:"",
            skills:"",
            place:"",

        })

        
    }
    const deleteHandler = key =>{
        firebaseDB.child(`NonTechnical/${key}`).remove(
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    }

    return(
<div>
        <h2 style={{"textAlign":"center"}}>{props.d1} Job Uploading Form</h2><br />

        <div class="row">

            {getData &&
            Object.keys(getData).map(key=>
                <CardDisplay admin={props.userinfo} i={getData[key].id} name={getData[key].companyname} sal={getData[key].salary} rol={getData[key].role} skill={getData[key].skills} pla={getData[key].place} des={getData[key].description} k={key}/>
            )
            }

    </div>
   
        <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off" style={{marginTop:'5%'}}>
            <div className="form-group">
          
            <div className="col-sm-4">
                <input type="text" className="form-control" placeholder="Company Name" name="companyname" value={companyname} onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">
     
            <div className="col-sm-4">          
            <textarea rows="4" cols="50" type="text" name="description" form="usrform" className="form-control" value={description}
             onChange={changeHandler} placeholder="Description About Job"
            >
                                 </textarea>   
            </div>
            </div>

            <div className="form-group">
             
            <div className="col-sm-4">          
                <input type="text" className="form-control" placeholder="salary" name="salary" value={salary} 
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
                 <input type="text" className="form-control" placeholder="Role" name="role" value={role} 
                 onChange={changeHandler}/>
             </div>
             </div>

            <div className="form-group">
             
             <div className="col-sm-4">          
                 <input type="text" className="form-control" placeholder="place" name="place" value={place} 
                 onChange={changeHandler}/>
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





const  Upload = (props) => {
    
    const [Techdata,setTechData] = useState({
        id:props.info,
        companyname:"",
        description:"",
        role:"",
        salary:"",
        skills:"",
        place:"",
    })

     
     
    const [getData,setGetData] = useState({});
    useEffect(()=>{
            firebaseDB.child('Technical').on('value',details=>{
                console.log(details.val());
                
                setGetData(details.val());
            })
    },[])



    const {companyname,description,role,salary,skills,place} = {...Techdata}
    
    const changeHandler = e =>{
        setTechData({...Techdata,[e.target.name]:e.target.value});
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        var dataAdded = await firebaseDB.child('Technical').push(
            
            Techdata,
            err=>{
                if(err){
                    console.log(err);
                }
                else{
                    alert("Job Post Uploaded successfully")
                }
            }
        )
        setTechData({
            id:props.info,
            companyname:"",
            description:"",
            role:"",
            salary:"",
            skills:"",
            place:"",

        })
    }
    const deleteHandler = key =>{
        firebaseDB.child(`Technical/${key}`).remove(
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    }

   const type=props.d1
   if(type==="NonTechnical" && props.d2==="upload"){
       return <UploadNonTch d1={props.d1} userinfo={props.info}/>
   }
    return (
         <div>
        <h2 style={{"textAlign":"center"}}>{props.d1} Job Uploading Form</h2><br />

        <div class="row">

            {getData &&
            Object.keys(getData).map(key =>
            
                <CardDisplayTech admin={props.info} i={getData[key].id} name={getData[key].companyname} sal={getData[key].salary} rol={getData[key].role} skill={getData[key].skills} pla={getData[key].place} des={getData[key].description} k={key}/>
        

            )
            }

    </div>
   
        <form className="form-horizontal" onSubmit={submitHandler} autoComplete="off" style={{marginTop:'5%'}}>
            <div className="form-group">
          
            <div className="col-sm-4">
                <input type="text" className="form-control" placeholder="Company Name" name="companyname" value={companyname} onChange={changeHandler}/>
            </div>
            </div>
            
            <div className="form-group">
     
            <div className="col-sm-4">          
            <textarea rows="4" cols="50" type="text" name="description" form="usrform" className="form-control" value={description}
             onChange={changeHandler} placeholder="Description About Job"
            >
                                 </textarea>   
            </div>
            </div>

            <div className="form-group">
             
            <div className="col-sm-4">          
                <input type="text" className="form-control" placeholder="salary" name="salary" value={salary} 
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
                 <input type="text" className="form-control" placeholder="Role" name="role" value={role} 
                 onChange={changeHandler}/>
             </div>
             </div>

            <div className="form-group">
             
             <div className="col-sm-4">          
                 <input type="text" className="form-control" placeholder="place" name="place" value={place} 
                 onChange={changeHandler}/>
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

export default  Upload;