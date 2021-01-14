import React, { Component } from 'react';
import Register from '../forms/Register';
import Test from '../forms/Test';
import Dashboardheader from './Dashboardheader';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
export default class Dashboardcontainer extends Component{
render(){
    return(
        <BrowserRouter>
<div>
<Dashboardheader />
<Link></Link>
<Route path="/forms/Register" component={Register}/>
</div>
</BrowserRouter>
    )
}
}