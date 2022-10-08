import React from "react";

function Assignment({ assignment }) {

  function handleTurnIn() {
    fetch(`http://localhost:3001/assignments/${assignment.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      turnedIn: !assignment.turnedIn,
    }),
  })
    .then((r) => r.json())
    .then((updatedAssignment) => console.log(updatedAssignment));
  }


  return (
    <li className={assignment.turnedIn ? "completed" : "not-completed"}>
        <span className="student-name">{assignment.name}</span>
        <span className="class">{assignment.class}</span>
        <span className="class-teacher">{assignment.classTeacher}</span>
        <span className="type">{assignment.type}</span>
        <span className="missing-assignment">{assignment.missingAssignment}</span>
        <span className="reason">{assignment.reason}</span>
        <button
            className={assignment.turnedIn ? "completed" : "not-completed"}
            onClick={handleTurnIn}
        >
            {assignment.turnedIn ? "Completed" : "Turn In"}
        </button>
    </li>
    
  );
}

export default Assignment;
