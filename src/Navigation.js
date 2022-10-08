import React from "react";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navigation({assignments, onNewAssignments}) {

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/assignments"
        state={assignments}
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Assignments
      </NavLink>
      <NavLink 
        //to={byStudentProps}
        to="/byStudent"
        // state={assignments}
        state={{assignments: assignments}}
        // state={{assignments: assignments, onNewAssignments: onNewAssignments}}
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        By Student
      </NavLink>
    </div>
  );
}

export default Navigation
