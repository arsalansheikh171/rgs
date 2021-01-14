import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import '../styles/Indexstyle.css';
import Footer from './Footer';
import Sidenavlist from './Sidenavlist';
//import Dashboardcontainer from './Dashboardcontainer';
//import Dashboardheader from './Dashboardheader';
export default class Header extends Component{
render(){
    return(
        <BrowserRouter>
<div>

    <div className="wrapper">
        <Sidenavlist />
    </div>
    <Footer />

 </div>
 </BrowserRouter>
    )
}
}