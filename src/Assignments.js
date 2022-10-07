import React, {useState, useEffect} from 'react'
import NewAssignment from './NewAssignment'

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState('')

    useEffect(() => {
        fetch("http://localhost:3001/assignments")
        .then(resp => resp.json())
        .then(data => setAssignments(data))
        }, [])

console.log(selectedStudent)
    useEffect(() => {
        fetch("http://localhost:3001/students")
        .then(resp => resp.json())
        .then(data => {
            setStudents(data)
            setSelectedStudent(students[0].name)
        })
    }, [])
    
    const studentsList = students.map(student => <option key={student.name} value={student.name}>{student.name}</option>) 
    const assignmentsList = assignments.map(assignment => <li key={assignment.id}>{assignment.missingAssignment}</li>) 
    
    function handleChange(e) {
        setSelectedStudent(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <h3>Assignments for</h3>
            <form className="NewAssignment" >
          <label>
            Student Name:
            <select
              name="name"
              value={selectedStudent}
              onChange={handleChange}
            >
                {studentsList}
            </select>
          </label>
          </form>
            <hr/>
            {assignmentsList}
            <br/>
            <br/>
            {<NewAssignment selectedStudent={selectedStudent}/>}
        </div>
    )
}

export default Assignments