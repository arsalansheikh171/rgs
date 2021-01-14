//Import React Hooks & Fragment
import React, { Fragment, useEffect, useState } from "react";
//Import Axios package/library to get data
import axios from "axios";
//Import Bootstrap to enable bootstrap classes in this page
import 'bootstrap/dist/css/bootstrap.css';
 
//functional component
const PokemonComponent = () =>{
    //React hooks, this functionality can be done in single hook but for better understanding i used three times
    const [num, setNum] = useState(1);
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    //Again a hook that detects change and store updated values select/pass by user
    useEffect(() =>{
        //A function that get data from API & wait for promise return
         async function getData(){
             const res = await axios.get(
                 `https://pokeapi.co/api/v2/pokemon/${num}`
                 );

                 //console.log(res);
                 setName(res.data.name);
                 setMoves(res.data.moves.length);
         }
         getData();
         
    })
    //Return JSX elements
    return (
        //Fragment tag return multiple elements
    <Fragment>
        <div className="container">
  <h2>ReactJS Pokemon State Change Test</h2><br/>
  <h3> Form </h3>
    <label>Select Pokemon:</label>
    {/* Form for a slect tag */}
    <form className="form-horizontal">
        {/* Better Practice is that we should fetch data list in select options from database*/}
    <select className="form-control" value={num} onChange={(event) => {
        setNum(event.target.value);

    }}>
        <option value="1"> Bulbasaur </option>
        <option value="25"> Pikachu </option>
        <option value="3"> Venusaur </option>
        <option value="4"> Charmander </option>
        <option value="5"> Charmeleon </option>
    </select>
    </form>
    
    <br />
    {/* This could be fetch from database list- OUTPUT depends upon user input select tag*/}
    {/* Better Practice is that we should make another component i.e Table/Output component*/}
    <h3> Output in Table Form </h3>
    <table className="table table-hover">
    <thead>
      <tr>
        <th>Pokemon Name</th>
        <th>Moves</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{moves}</td>
      </tr>
    </tbody>
  </table>
    </div>

    </Fragment>
        
        );
};
export default PokemonComponent;
