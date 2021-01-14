import React, { Component } from 'react';
export default class Studenteduinfo extends Component{
  
render(){
  
    return(
<div>
  <h3><b>Educational Profile</b></h3>
  <div className="line"></div>
  <table className="table table-lg">
  <thead>
    <tr className="bg-primary">
      <th scope="col">Sr#</th>
      <th scope="col">Class</th>
      <th scope="col">School/Institute</th>
      <th scope="col">Board</th>
      <th scope="col">Session</th>
      <th scope="col">Roll No</th>
      <th scope="col">Marks Obtained</th>
      <th scope="col">Div/Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="bg-primary">1</th>
      <td className="bg-primary">Middle</td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
    </tr>
    <tr>
      <th className="bg-primary" scope="row">2</th>
      <td className="bg-primary">Matric</td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
    </tr>
    <tr>
      <th className="bg-primary" scope="row">3</th>
      <td className="bg-primary">Intermediate</td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
      <td><input className="form-control" id="ex1" type="text" /></td>
    </tr>
  </tbody>
</table>

 </div>
    )
}
}