import React, { Component } from 'react';
//import Student from '../student/Studentlov';
//import Staff from '../staff/Stafflov';
//import Dashboardheader from './Dashboardheader';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Register from '../forms/Register';
//import Test from '../forms/Test';
import Newsection from '../forms/Newsection';
export default class Sidenavlist extends Component{
  
render(){
  
    return(
        <BrowserRouter>
<div>
<div className="wrapper">
<nav id="sidebar">
            <div className="sidebar-header">
                <h3>Dashboard</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Pokemon Characters</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" 
                    >List of Values</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/forms/Register">See The Effects</Link>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
        
<br/>
<Switch>
<Route path="/forms/Register" component={Register}/>
<Route path="/forms/Newsection" component={Newsection}/>
</Switch>
</div>
 </div>
 </BrowserRouter>
    )
}
}
