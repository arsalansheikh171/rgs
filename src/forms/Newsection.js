import React, { Component } from 'react';
export default class Newsection extends Component{
  
render(){
  
    return(
<div>
    <div className="container">
                <h1>Add New Secion</h1>
                <div className="line"></div>
   <form>
  <div class="col-xs-3">
    <label for="ex3">New Section</label>
    <input class="form-control" id="ex3" type="text" />
  </div>
  <div class="col-xs-3">
    <label for="ex3"></label>
  <button type="submit" class="form-control bg-primary">Submit</button>
  </div>
</form>
</div>
 </div>
    )
}
}