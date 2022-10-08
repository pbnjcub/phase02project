import React from "react";
/* Add NavLink to import */
import { Link } from "react-router-dom";

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
      <Link
        to="/"
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Home
      </Link>
      <Link 
        to="/assignments"
        state={assignments}
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Assignments
      </Link>
      <Link 
        to="/byStudent"
        state={assignments}
        exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        By Student
      </Link>
    </div>
  );
}

export default Navigation
