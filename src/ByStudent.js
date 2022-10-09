import React, {useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import NewAssignmentForm from './NewAssignmentForm'
import ByStudentDetail from './ByStudentDetail'

const ByStudent = () => {
    const location = useLocation()
    const allAssignments = location.state
    // const onNewAssignments = location.state.onNewAssignments
    // console.log(onNewAssignments)
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
    
    const studentsList = students.map(student => <option key={student.name} value={student.name}><Link to={`/byStudent/${student.name}`}>{student.name}</Link></option>) 
    
    function handleChange(e) {
        setSelectedStudent(e.target.value)
    }

    function handleQRSubmit(e) {
        e.preventDefault()
    }

    

    return (
        
        <div>
            <h3>Assignments for: {selectedStudent}</h3>
            <form className="NewAssignment" onSubmit="handleQRSubmit">
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
          <br/>
          <label>
            Download Missed Assignments: 
            <button type="submit">Get QR Code</button>
          </label>
          
          </form>
            <hr/>
            <ByStudentDetail selectedStudent={selectedStudent} allAssignments={allAssignments} />
            <br/>
            <br/>
            {<NewAssignmentForm selectedStudent={selectedStudent} />}
        </div>
    )
}

export default ByStudent