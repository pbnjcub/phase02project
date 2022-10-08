import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import NewAssignment from './NewAssignment'
import Assignment from './Assignment'

const ByStudent = () => {
    const location = useLocation()
    const allAssignments = location.state
    console.log(allAssignments)

    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState('')
    // const [filteredByName, setFilteredByName] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/students")
        .then(resp => resp.json())
        .then(data => {
            setStudents(data)
            setSelectedStudent(data[0].name)
        })
    }, [])
    
    const studentsList = students.map(student => <option key={student.name} value={student.name}>{student.name}</option>) 
    const filteredAssignmentsList = allAssignments.filter(assignment => {
        if(assignment.name === selectedStudent) {
            return assignment
        }
    }) 
    
    function handleChange(e) {
        setSelectedStudent(e.target.value)
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
            <ul className="AllAssignments">
                {filteredAssignmentsList.map(assignment => (
                    <Assignment key={assignment.id} assignment={assignment}/>
                ))}
            </ul>
            <br/>
            <br/>
            {<NewAssignment selectedStudent={selectedStudent}/>}
        </div>
    )
}

export default ByStudent