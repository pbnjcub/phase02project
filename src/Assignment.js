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
    <tr className={assignment.turnedIn ? "completed" : "not-completed"}>
        <td className="student-name">{assignment.name}</td>
        <td className="class">{assignment.class}</td>
        <td className="class-teacher">{assignment.classTeacher}</td>
        <td className="type">{assignment.type}</td>
        <td className="missing-assignment">{assignment.missingAssignment}</td>
        <td className="reason">{assignment.reason}</td>
        <td>
            <button
                className={assignment.turnedIn ? "completed" : "not-completed"}
                onClick={handleTurnIn}
            >
                {assignment.turnedIn ? "Completed" : "Turn In"}
            </button>
        </td>
    </tr>
    
  );
}

export default Assignment;
