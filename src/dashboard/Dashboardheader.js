import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Dashboardheader extends Component{
render(){
    return(
<div>
<nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <span>Toggle Sidebar</span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
                     data-toggle="collapse" data-target="#navbarSupportedContent" 
                     aria-controls="navbarSupportedContent" aria-expanded="false" 
                     aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                   
                </div>
            </nav>
</div>
    )
}
}