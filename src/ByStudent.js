import React from 'react'
import { Link } from 'react-router-dom'
import NewAssignmentForm from './NewAssignmentForm'
import ByStudentDetail from './ByStudentDetail'

const ByStudent = ({students, selectedStudent, setSelectedStudent, onNewAssignment, assignments, onUpdateAssignment}) => {

    const studentsList = students.map(student => <option key={student.name} value={student.name}><Link to={`/byStudent/${student.name}`}>{student.name}</Link></option>) 
    
    function handleChange(e) {
        setSelectedStudent(e.target.value)
    }


    return (

        <div>

            <h3>Assignments for: {selectedStudent}</h3>
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
          <br/>
          
          </form>
            <hr/>
            <ByStudentDetail selectedStudent={selectedStudent} assignments={assignments} onUpdateAssignment={onUpdateAssignment}/>
            <br/>
            <br/>
            {<NewAssignmentForm selectedStudent={selectedStudent} assignments={assignments} onNewAssignment={onNewAssignment} />}
        </div>
    )
}

export default ByStudent