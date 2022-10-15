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

        <div style={{padding: 25}}>
          <h5>Assignments for: <b>{selectedStudent}</b></h5>
          <form className="NewAssignment" >
            <div className="row">
              <div className="input-field col s6">
                <label>Student Name:</label>
                <br/>
                <select name="name" value={selectedStudent} onChange={handleChange} className="browser-default">
                  {studentsList}
                </select>           
              </div>
            </div>
            
            
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