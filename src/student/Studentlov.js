import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
export default class Studentlov extends Component{
  
render(){
  
    return(
<BrowserRouter>
<div>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse"
                    className="dropdown-toggle">Administration</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/forms/Register">Student Registration</Link>
                        </li>
                        
                        <li>
                            <Link to="/forms/Test">New Section</Link>
                        </li>
                        <li>
                            <Link to="/">Enrollment 3</Link>
                        </li>
                    </ul>
                </li>
 </div>
 </BrowserRouter>
    )
}
}