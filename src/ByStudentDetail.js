import React from 'react'
import Assignment from './Assignment'

const ByStudentDetail = ({selectedStudent, allAssignments, match, location}) => {

    const filteredAssignmentsList = allAssignments.filter(assignment => {
        const {
            params: {studentName}
        } = match

        if(assignment.name === selectedStudent) {
            return assignment
        }
    }) 
    

    function handleQRSubmit(e) {
        e.preventDefault()
        
    }

    return (
        
            <table className="assignments-by-student">
                <code>{JSON.stringify(match, null, 2)}</code>
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