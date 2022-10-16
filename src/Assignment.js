import React, {useState, useEffect} from "react";
import CompTurnInBtn from "./CompTurnInBtn"
import DelBtn from "./DelBtn"
import './css/materialize.min.css';

function Assignment({ assignment, onUpdateAssignment, onDeleteAssignment }) {
  const [happyEmoji, setHappyEmoji] = useState("")
  const [sadEmoji, setSadEmoji] = useState("")

  useEffect(() => {
      fetch("https://emojihub.herokuapp.com/api/random/group_face_positive")
      .then(resp => resp.json())
      .then(data => {
        const converted = data.unicode[0].split('')
        const result = []
        for (let i = 2; i < converted.length; i++) {
          result.push(converted[i])
        }
        setHappyEmoji(0 + 'x' + result.join(''))
      })
  }, [])

  useEffect(() => {
      fetch("https://emojihub.herokuapp.com/api/random/group_face_negative")
      .then(resp => resp.json())
      .then(data => {
        const converted = data.unicode[0].split('')
        const result = []
        for (let i = 2; i < converted.length; i++) {
          result.push(converted[i])
        }
        setSadEmoji(0 + 'x' + result.join(''))
      })
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
    <tr style={{fontSize: 10}} className={assignment.turnedIn ? "completed" : "not-completed"}>
        <td className="student-name">{assignment.name}</td>
        <td className="class">{assignment.class}</td>
        <td className="class-teacher">{assignment.classTeacher}</td>
        <td className="type">{assignment.type}</td>
        <td className="missing-assignment">{assignment.missingAssignment}</td>
        <td className="reason">{assignment.reason}</td>
        <CompTurnInBtn onTurnIn={handleTurnIn} turnedIn={assignment.turnedIn} happyEmoji={happyEmoji} sadEmoji={sadEmoji}/>
        <DelBtn assignment={assignment} onDeleteAssignment={onDeleteAssignment} />       
    </tr>
    
  );
}

export default Assignment;
