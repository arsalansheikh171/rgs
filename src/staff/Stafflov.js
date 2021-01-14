import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Stafflov extends Component{
  
render(){
  
    return(
<div>
                <li className="active">
                    <a href="#staffSubmenu" data-toggle="collapse" aria-expanded="false" 
                    className="dropdown-toggle">Staff Management</a>
                    <ul className="collapse list-unstyled" id="staffSubmenu">
                        <li>
                            <Link to="">New Joinings</Link>
                        </li>
                        <li>
                        <Link to="">Listings</Link>
                        </li>
                        <li>
                        <Link to="">Test</Link>
                        </li>
                    </ul>
                </li>
 </div>
    )
}
}