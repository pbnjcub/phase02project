import React, {useState, useEffect} from "react";

function Assignment({ assignment, onUpdateAssignment }) {
  const [happyEmoji, setHappyEmoji] = useState("")
  const [sadEmoji, setSadEmoji] = useState("")

  useEffect(() => {
      fetch("https://emojihub.herokuapp.com/api/random/group_face_positive")
      .then(resp => resp.json())
      .then(data => {
        setHappyEmoji(data.unicode)
      })
  }, [])

  console.log(happyEmoji[0])
  const displayHappyEmoji = (happyEmoji) => happyEmoji[0].slice(2, 5)
  // String.fromCodePoint(happyEmoji.unicode.slice(2,7)


  useEffect(() => {
      fetch("https://emojihub.herokuapp.com/api/random/group_face_negative")
      .then(resp => resp.json())
      .then(data => setSadEmoji(data.unicode))
  }, [])



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
    .then((updatedAssignment) => onUpdateAssignment(updatedAssignment));
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
        <td
          className="emoji"
          role="img"
        >
          {assignment.turnedIn ? sadEmoji.unicode : sadEmoji.unicode}
        </td>
    </tr>
    
  );
}

export default Assignment;
