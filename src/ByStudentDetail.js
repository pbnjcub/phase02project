import React from 'react'
import Assignment from './Assignment'


const ByStudentDetail = ({selectedStudent, assignments, onUpdateAssignment}) => {

    const filteredAssignmentsList = assignments.filter(assignment => assignment.name === selectedStudent ? assignment : null)
    
    return ( 
            <table className="striped">
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
                        <Assignment key={assignment.id} assignment={assignment} onUpdateAssignment={onUpdateAssignment} />
                    ))}
                </tbody>
            </table>
    )
}

export default ByStudentDetail