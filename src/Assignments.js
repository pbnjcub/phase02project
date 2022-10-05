import React, {useState, useEffect} from 'react'
import NewAssignment from './NewAssignment'

const Assignments = () => {
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/assignments")
        .then(resp => resp.json())
        .then(data => setAssignments(data))
        }, [])
    
    const assignmentsList = assignments.map(assignment => <li key={assignments.stuff}>{assignment.stuff}</li>) 
        console.log(assignments)
    return (
        <div>
            <h3>Assignments for</h3>
            <hr/>
            {assignmentsList}
            <br/>
            <br/>
            {<NewAssignment />}
        </div>
    )
}

export default Assignments