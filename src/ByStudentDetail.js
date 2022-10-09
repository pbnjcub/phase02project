import React from 'react'
import Assignment from './Assignment'
import {useParams} from 'react-router-dom'

const ByStudentDetail = ({selectedStudent, assignments}) => {

    const filteredAssignmentsList = assignments.filter(assignment => {
        

        if(assignment.name === selectedStudent) {
            return assignment
        }
    }) 
    

    function handleQRSubmit(e) {
        e.preventDefault()
        
    }

    return (
        
            <table className="assignments-by-student">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Type</th>
                        <th>Name of Assignment</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAssignmentsList.map(assignment => (
                        <Assignment key={assignment.id} assignment={assignment}/>
                    ))}
                </tbody>
            </table>
    )
}

export default ByStudentDetail