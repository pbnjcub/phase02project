import React from 'react'
import Assignment from './Assignment'

const Assignments = ({assignments, onUpdateAssignment}) => {
    return (
        <div>
            <h3>Missed Assignments for All</h3>
            <hr/>
            <table className="all-assignments">
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
                    {assignments.map(assignment => (
                        <Assignment key={assignment.id} assignment={assignment} onUpdateAssignment={onUpdateAssignment}/>
                    ))}
                </tbody>
  
            </table>

        </div>
    )
}

export default Assignments