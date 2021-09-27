/* eslint-disable no-unused-vars */
import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import MainScreen from "./screens/MainScreen"
import AdminScreen from "./screens/AdminScreen"
import ClientScreen from "./screens/ClientScreen"
import JobDescriptionScreen from "./screens/JobDescriptionScreen"
import './App.css';
 
class App extends Component{
  render(){
  return (
     <div>

<Router>
        <Switch> 
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/MainScreen" /> 
                       
                    )
                }}
              />
        <Route exact path="/MainScreen" component={MainScreen}/>
              
        <Route path="/AdminScreen" component={AdminScreen}/>
        <Route path="/ClientScreen" component={ClientScreen}/>        
         <Route path="/JobDescriptionScreen" component={JobDescriptionScreen}/>         
                   </Switch>





     </Router>


     </div>
  )
}
}

export default App;
