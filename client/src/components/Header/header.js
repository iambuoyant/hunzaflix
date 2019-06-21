import React from "react";
import { Link } from "react-router-dom";
//import { firebase } from "../../firebase";

const header = props => {
  return (
    <header>
      <div>
        
        <Link to="/" onClick={()=>{props.history.push('/')}}>Home</Link>
        <Link to="/movies" onClick={()=>{props.history.push('/movies')}}>Movies</Link>

      </div>
    </header>
  );
};

export default header;
