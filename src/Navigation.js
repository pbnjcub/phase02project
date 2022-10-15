import React from "react";
/* Add NavLink to import */
import { Link } from "react-router-dom";
import './css/materialize.min.css';
// import { Button, Card, Row, Col } from 'react-materialize';


function Navigation() {

  return (
    <nav >
      <div className="nav-wrapper blue darken-4">
        <Link to="/" className="brand-logo left" >HWTrckr</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="active">
            <Link to="/" exact>Home</Link>
          </li>
          <li className="active">
            <Link to="/assignments" exact>Assignments</Link>
          </li>
          <li className="active">
            <Link to="/byStudent" exact>By Student</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navigation
